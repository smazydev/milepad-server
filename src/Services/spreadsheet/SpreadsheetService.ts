const Entity = require("../../entities/Spreadsheet");

class SpreadsheetService {
  spreadsheetRepository;

  constructor(sheetRepository) {
    this.spreadsheetRepository = sheetRepository;
  }

  addSpreadsheet = (spreadsheet: typeof Entity.Spreadsheet) => {
    return this.spreadsheetRepository.add(spreadsheet);
  };

  deleteSpreadsheet = (id: string) => {
    return this.spreadsheetRepository.delete(id);
  };

  findSpreadsheetByID = (id: string) => {
    return this.spreadsheetRepository.findByID(id);
  };
}

module.exports = {
  SpreadsheetService,
};
