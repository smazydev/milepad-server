import { Request, Response } from "express";
const express = require("express");
const injectionHandler = require("../../../frameworks/injectionHandler/spreadsheetInjectionHandler");
const { Spreadsheet } = require("../../../entities/Spreadsheet");

const router = express.Router();

router.get("/spreadsheets/get-all", async (req: Request, res: Response) => {
  const spreadsheetService =
    injectionHandler.SpreadsheetServiceSingleton.getInstance();
  const spreadsheets = await spreadsheetService.getAllSpreadsheets();
  res.send(spreadsheets);
});

router.get("/spreadsheets/:id", async (req: Request, res: Response) => {
  const spreadsheetService =
    injectionHandler.SpreadsheetServiceSingleton.getInstance();
  const spreadSheetData = await spreadsheetService.findSpreadsheetByID(
    req.params.id
  );
  res.send(spreadSheetData);
});

router.post("/spreadsheets/delete", async (req: Request, res: Response) => {
  const spreadsheetService =
    injectionHandler.SpreadsheetServiceSingleton.getInstance();
  const { spreadsheetID } = req.body;
  console.log(spreadsheetID);
  const deletedSpreadsheet = await spreadsheetService.deleteSpreadsheet(
    spreadsheetID
  );
  res.send({});
});

router.post("/spreadsheets/create", async (req: Request, res: Response) => {
  const spreadsheetService =
    injectionHandler.SpreadsheetServiceSingleton.getInstance();
  const newSpreadsheet = new Spreadsheet(req.body);
  console.log(newSpreadsheet);
  const adddedSpreadsheet = await spreadsheetService.addSpreadsheet(
    newSpreadsheet
  );
  res.send(adddedSpreadsheet);
});

module.exports = router;
