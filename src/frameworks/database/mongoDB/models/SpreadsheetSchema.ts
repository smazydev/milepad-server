const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  spreadsheetID: String,
  spreadsheetData: Array,
  readOnlySpreadsheet: String,
});

const SpreadsheetModel = mongoose.model("Spreadsheet", schema);

module.exports = {
  SpreadsheetModel,
};

export {};
