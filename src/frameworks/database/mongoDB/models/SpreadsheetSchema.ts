const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  spreadsheetID: String,
  spreadsheetData: Array,
  readOnlySpreadsheet: String,
  Comments: Array,
});

const SpreadsheetModel = mongoose.model("Spreadsheet", schema);

module.exports = {
  SpreadsheetModel,
};

export {};
