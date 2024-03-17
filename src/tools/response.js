const message = require("../../config/messages.json");
const fs = require("fs");
const path = require("path");

// log into file
function resLog(req, res) {
    const logData = {
        endpoint: req.originalUrl,
        ip: req.ip.substr(7, req.ip.length),
        request: req.body,
        response: res.data,
        status: res.status,
        datetime: req.customDate,
        elapsed_time: req.elapsedTime, // Add the elapsed time here if needed
    };

    // Define the log file path based on the current date
    const logFilePath = path.join(
        __dirname,
        "../../logs",
        `${new Date().toISOString().split("T")[0]}.log`
    );

    // Read existing log entries or create an empty array
    let logEntries = [];
    if (fs.existsSync(logFilePath)) {
        const logFileContent = fs.readFileSync(logFilePath, "utf8");
        logEntries = JSON.parse(logFileContent);
    }

    // Add the new log entry to the array
    logEntries.push(logData);

    // Write the updated array back to the log file
    fs.writeFileSync(logFilePath, JSON.stringify(logEntries, null, 2), "utf8");
}

module.exports = (req, res, data) => {
    // logging to terminal
    //Limit request/response logging print character
    req.elapsedTime = new Date().getTime() - req.startTime;

    let request;

    if (req) {
        if (req.body && Object.keys(req.body).length > 0) {
            request =
                JSON.stringify(req.body).length > 3000
                    ? JSON.stringify(req.body).substr(0, 3000) + " ..."
                    : JSON.stringify(req.body);
        } else if (req.params && Object.keys(req.params).length > 0) {
            request =
                JSON.stringify(req.params).length > 3000
                    ? JSON.stringify(req.params).substr(0, 3000) + " ..."
                    : JSON.stringify(req.params);
        } else if (req.query && Object.keys(req.query).length > 0) {
            request =
                JSON.stringify(req.query).length > 3000
                    ? JSON.stringify(req.query).substr(0, 3000) + " ..."
                    : JSON.stringify(req.query);
        } else {
            request = "";
        }
    }

    let response = data.data
        ? JSON.stringify(data.data).length > 3000
            ? JSON.stringify(data.data).substr(0, 3000) + " ..."
            : JSON.stringify(data.data)
        : "";

    console.log("\n==========================================================");
    console.log(`STATUS       : ${data.status == 200 ? "OK" : "ERR"}`);
    console.log(`IP           : ${req !== undefined ? req.ip.substr(7, req.ip.length) : ""}`);
    console.log(`ENDPOINT     : ${req !== undefined ? req.originalUrl : ""}`);
    console.log(`TIMESTAMP    : ${req !== undefined ? req.customDate : ""}`);
    console.log("PROCESS TIME : " + ((req && req.elapsedTime) || "0") + " ms");
    console.log("====================== REQUEST ===========================");
    console.log(request + "\n");
    console.log("====================== RESPONSE ==========================");
    console.log(response + "\n");
    console.log("==========================================================");

    let msg = data.status == 200 ? message.OK : message.ERR;
    msg.status = data.status;
    msg.from = process.env.SERVICE_NAME;
    msg.message = data.message;
    msg.data = data.data;

    // if env value return true log into file
    if (process.env.APP_LOG == "true") {
        resLog(req, msg);
    }

    if (req !== undefined) return res.status(msg.status).json(msg);
};
