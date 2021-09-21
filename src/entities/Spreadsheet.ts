interface ISpreadsheet {
  spreadsheetID: string;
  spreadsheetData: object;
}

class Spreadsheet {
  public spreadsheetID;
  public spreadsheetData;
  public readOnlySpreadsheet: string;


  constructor({spreadsheetID,spreadsheetData}:ISpreadsheet) {
    this.spreadsheetID = spreadsheetID;
    this.spreadsheetData = spreadsheetData;
    this.readOnlySpreadsheet = `r.${spreadsheetID}`;
  }
}


module.exports.Spreadsheet = Spreadsheet;