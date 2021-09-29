interface ISpreadsheet {
  spreadsheetID: string;
  spreadsheetData: object;
}

class Spreadsheet {
  public spreadsheetID;
  public spreadsheetData;
  public readOnlySpreadsheet: string;

  constructor({ spreadsheetID }) {
    this.spreadsheetID = spreadsheetID;
    this.spreadsheetData = [];
    this.readOnlySpreadsheet = `r.${spreadsheetID}`;
  }
}

module.exports = { Spreadsheet };
export {};
