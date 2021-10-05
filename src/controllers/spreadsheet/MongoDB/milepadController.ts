import e, { Request, Response } from "express";
const express = require("express");
const injectionHandler = require("../../../frameworks/injectionHandler/milepadInjectionHandler");
const { Milepad } = require("../../../entities/Milepad");

const router = express.Router();

router.get("/milepad/get-all", async (req: Request, res: Response) => {
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  const milepads = await milepadService.getAllSpreadsheets();
  res.send(milepads);
});

router.get("/milepad/:id", async (req: Request, res: Response) => {
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  const milepadData = await milepadService.findSpreadsheetByID(
    req.params.id
  );
  res.send(milepadData);
});

router.post("/milepad/delete", async (req: Request, res: Response) => {
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  const { milepadID } = req.body;
  console.log(milepadID);
  const deletedSpreadsheet = await milepadService.deleteSpreadsheet(
    milepadID
  );
  res.send({});
});

router.post("/milepad/update", async (req: Request, res: Response) => {
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  const { milepadID, milepadData } = req.body;
  const response = await milepadService.updateSpreadsheet(
    milepadID,
    milepadData
  );
  res.send(response);
});

router.post("/milepad/create", async (req: Request, res: Response) => {
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  const { id } = req.body;
  const newMilepad = new Milepad({
    milepadID: id,
  });

  const getData = await milepadService.findSpreadsheetByID(id);

  if (!(getData === undefined || getData.length === 0)) {
    if (getData[0].milepadID === id) {
      res.status(200).send(getData);
    }
  } else {
    try {
      const addedMilepad = await milepadService.addMilepad(
        newMilepad
      );
      res.status(200).send(`New Milepad created! ${addedMilepad}`);
    } catch (error) {
      console.log(error);
    }
  }
});

module.exports = router;
