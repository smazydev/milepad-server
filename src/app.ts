import express from "express";
import { spreadsheetInjectionHandler } from "./frameworks/injectionHandler/spreadsheetInjectionHandler";

const app = express();

const PORT = process.env.PORT || 3000;


const start = () => {
  app.listen(PORT, () => {
    console.log("Server listening on: ", PORT);
    spreadsheetInjectionHandler();
  });
};


start();
