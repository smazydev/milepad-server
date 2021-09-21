const express = require("express");
const spreadsheetInjection = require("./frameworks/injectionHandler/spreadsheetInjectionHandler");

const app = express();

const PORT = process.env.PORT || 3000;

const start = () => {
  app.listen(PORT, () => {
    console.log("Server listening on: ", PORT);
    spreadsheetInjection.spreadsheetInjectionHandler();
  });
};

start();
