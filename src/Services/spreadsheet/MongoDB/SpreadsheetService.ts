const { Spreadsheet } = require("../../../entities/Spreadsheet");

class SpreadsheetService {
  spreadsheetRepository;

  constructor(sheetRepository) {
    this.spreadsheetRepository = sheetRepository;
  }

  addSpreadsheet = (spreadsheet: typeof Spreadsheet) => {
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

  updateSpreadsheet = (spreadsheetID, spreadsheetData) => {
    return this.spreadsheetRepository.update(spreadsheetID, spreadsheetData);
  };
}

module.exports = {
  SpreadsheetService,
};
export {};
