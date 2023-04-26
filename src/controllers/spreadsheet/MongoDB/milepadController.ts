import e, { Request, Response } from "express";
const express = require("express");
const injectionHandler = require("../../../frameworks/injectionHandler/milepadInjectionHandler");
const { Milepad } = require("../../../entities/Milepad");

const router = express.Router();

router.get("/pad/get-all", async (req: Request, res: Response) => {
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  //const milepads = await milepadService.getAllSpreadsheets();
  res.send({});
});

router.get("/pad/:id", async (req: Request, res: Response) => {
  console.log("get data")
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  const milepadData = await milepadService.findMilepadByID(
    req.params.id
  );
  res.send(milepadData);
});

router.post("/pad/delete", async (req: Request, res: Response) => {
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  const { milepadID } = req.body;
  console.log(milepadID);
  const deletedSpreadsheet = await milepadService.deleteSpreadsheet(
    milepadID
  );
  res.send({});
});

router.post("/pad/update", async (req: Request, res: Response) => {
  console.log("update")
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  const { milepadID, milepadData } = req.body;
  const response = await milepadService.updateMilepad(
    milepadID,
    milepadData
  );
  res.send(response);
});

router.post("/pad/create", async (req: Request, res: Response) => {
  console.log("create")
  const milepadService =
    injectionHandler.MilepadServiceSingleton.getInstance();
  const { id } = req.body;
  const newMilepad = new Milepad({
    milepadID: id,
  });

  const getData = await milepadService.findMilepadByID(id);

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
