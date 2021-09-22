const Spreadsheet = require("../../../entities/Spreadsheet");

class SpreadsheetService {
  spreadsheetRepository;

  constructor(sheetRepository) {
    this.spreadsheetRepository = sheetRepository;
  }

  addSpreadsheet = (spreadsheet: typeof Spreadsheet.Spreadsheet) => {
    return this.spreadsheetRepository.add(spreadsheet);
  };

  deleteSpreadsheet = (id: string) => {
    return this.spreadsheetRepository.delete(id);
  };

  findSpreadsheetByID = (id: string) => {
    return this.spreadsheetRepository.findByID(id);
  };

  getAllSpreadsheets = () => {
    return this.spreadsheetRepository.getAll();
  };
}

module.exports = {
  SpreadsheetService,
};
export {};
