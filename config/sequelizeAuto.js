const path = require("path");
const SequelizeAuto = require('sequelize-auto');
const dotenv = require("dotenv");

//berfungsi untuk menyambungkan .env agar kebaca
require("dotenv").config();

dotenv.config({ path: path.join(__dirname, "../env/.env.dev") });

// change format name to camelcase
const toCamelCaseName = (str) => {
  return str
      .toLowerCase()
      .replace(/_(.)/g, (_, match) => match.toUpperCase());
};

// use database from env as you liike
const auto = new SequelizeAuto(
  process.env.MYSQL_EXAMPLE_NAME,  // Add your database name as the first parameter
  process.env.MYSQL_EXAMPLE_USER,
  process.env.MYSQL_EXAMPLE_PASS,
  {
    host: process.env.MYSQL_EXAMPLE_HOST,
    dialect: process.env.MYSQL_EXAMPLE_DIALECT,
    directory: path.join(__dirname, '../src/models/', toCamelCaseName(process.env.MYSQL_EXAMPLE_NAME)), // specify the models directory
    port: process.env.MYSQL_EXAMPLE_PORT,
    caseModel: 'c', // enable this to camelcase model name
    caseFile: 'c', // enable this to camelcase model name
    singularize: false,
    additional: {
        timestamps: false
        // ...options added to each model
    },
    // use this option when use generate from older database, example sql server 2008 etc...
    // dialectOptions: {
    //     options: {
    //         encrypt: false,
    //     },
    // },
    noInitModels: true,
    // tables: ['mst_department'] // enable this when need to generate specific tables only
    //...
  }
);

auto.run().then(data => {
    // console.log(data.tables);      // table and field list
    // console.log(data.foreignKeys); // table foreign key list
    // console.log(data.indexes);     // table indexes
    // console.log(data.hasTriggerTables); // tables that have triggers
    // console.log(data.relations);   // relationships between models
    // console.log(data.text)         // text of generated models
    console.log('Models generated successfully!');
});
