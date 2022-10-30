// Use enviroment variables
require('dotenv/config');

// Import express
const express = require("express");

// Import body-parser
const bodyParser = require("body-parser");

// Import routes
const router = require("./routes/routes");

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Initialize routes
app.use("/",router);

// Initialize server
app.listen(process.env.APP_PORT,() => {

    console.log("Servidor rodando");

});