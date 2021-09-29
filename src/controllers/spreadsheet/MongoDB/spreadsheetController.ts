import e, { Request, Response } from "express";
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

router.post("/spreadsheets/update", async (req: Request, res: Response) => {
  const spreadsheetService =
    injectionHandler.SpreadsheetServiceSingleton.getInstance();
  const { spreadsheetID, spreadsheetData } = req.body;
  const response = await spreadsheetService.updateSpreadsheet(
    spreadsheetID,
    spreadsheetData
  );
  res.send(response);
});

router.post("/spreadsheets/create", async (req: Request, res: Response) => {
  const spreadsheetService =
    injectionHandler.SpreadsheetServiceSingleton.getInstance();
  const { id } = req.body;
  const newSpreadsheet = new Spreadsheet({
    spreadsheetID: id,
  });

  const getData = await spreadsheetService.findSpreadsheetByID(id);

  if (!(getData === undefined || getData.length === 0)) {
    if (getData[0].spreadsheetID === id) {
      res.status(200).send(getData);
    }
  } else {
    try {
      const addedSpreadsheet = await spreadsheetService.addSpreadsheet(
        newSpreadsheet
      );
      res.status(200).send(`New Spreadsheet created! ${addedSpreadsheet}`);
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = router;
