import { Spreadsheet } from "../../entities/Spreadsheet";
import { ISpreadsheetRepository } from "../../frameworks/repositories/inMemory/spreadsheetsRepository";

class SpreadsheetService {
  spreadsheetRepository;

  constructor(sheetRepository: ISpreadsheetRepository) {
    this.spreadsheetRepository = sheetRepository;
  }

  addSpreadsheet = (spreadsheet: Spreadsheet) => {
    return this.spreadsheetRepository.add(spreadsheet);
  };

  deleteSpreadsheet = (id: string) => {
    return this.spreadsheetRepository.delete(id);
  };

  findSpreadsheetByID = (id: string) => {
    return this.spreadsheetRepository.findByID(id);
  };
}

export { SpreadsheetService };
