const express = require("express");
const bodyParser = require("body-parser");
const spreadsheetInjection = require("./frameworks/injectionHandler/spreadsheetInjectionHandler");
const spreadsheetRouter = require("./controllers/spreadsheet/MongoDB/spreadsheetController");
const mongoose = require("./frameworks/database/mongoDB/mongoDB");

const app = express();

const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(spreadsheetRouter);

const start = () => {
  app.listen(PORT, () => {
    console.log("Server listening on: ", PORT);
    spreadsheetInjection.SpreadsheetServiceSingleton.getInstance();
    mongoose.connectToMongoDB();
  });
};

start();

export {};
