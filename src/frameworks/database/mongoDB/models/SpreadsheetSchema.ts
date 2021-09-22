const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  spreadsheetID: String,
  spreadsheetData: Object,
  readOnlySpreadsheet: String,
});

const SpreadsheetModel = mongoose.model("Spreadsheet", schema);

module.exports = {
  SpreadsheetModel,
};

export {};
