const Repository = require("../../frameworks/repositories/MongoDB/spreadsheetsRepository");
const Service = require("../../Services/spreadsheet/MongoDB/SpreadsheetService");

class SpreadsheetServiceSingleton {
  private static spreadsheetService: SpreadsheetServiceSingleton;

  private constructor() {}

  public static getInstance(): SpreadsheetServiceSingleton {
    if (!SpreadsheetServiceSingleton.spreadsheetService) {
      const spreadsheetRepository = new Repository.SpreadsheetRepository();
      SpreadsheetServiceSingleton.spreadsheetService =
        new Service.SpreadsheetService(spreadsheetRepository);
    }

    return SpreadsheetServiceSingleton.spreadsheetService;
  }
}

module.exports = { SpreadsheetServiceSingleton };
export {};
