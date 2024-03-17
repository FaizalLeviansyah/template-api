const nodemailer = require('nodemailer');
const mustache = require('mustache');
const fs = require('fs');
const path = require('path');

module.exports = data => {
  fs.readFile(path.join(__dirname, '../../config/templates/', data.file), 'utf8', (err, file) => {
    if (err) throw err;

    let transporter = nodemailer.createTransport({
      host: String(process.env.EMAIL_HOST),
      port: String(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_PORT == 465 ? true : false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: { rejectUnauthorized: false }
    });

    let mailOptions = {
      from: data.from || String(process.env.EMAIL_SENDER),
      to: data.to,
      subject: data.subject,
      attachments: data.attachments,
      html: mustache.render(file, data.data)
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) throw error;

      console.log('Email sent: ' + info.response);
    });
  });
};