import { inMemory } from "../../database/inMemory";
const { Spreadsheet } = require("../../../entities/Spreadsheet");

export interface ISpreadsheetRepository {
  add(spreadsheet:typeof Spreadsheet): void;
  delete(spreadsheetID: string): void;
  findByID(spreadsheetID: string): void;
}

class SpreadsheetRepository implements ISpreadsheetRepository {
  /**
   * @param spreadsheet {object} is the spreadsheet that you want to add. It should have the following properties.
   * spreadsheetID:string, spreadsheetData: object. It should return the added spreadsheet object.
   */
  add = (spreadsheet: typeof Spreadsheet) => {
    inMemory.spreadsheets.push(spreadsheet);
    return inMemory.spreadsheets.find(
      (item) => item.spreadsheetID === spreadsheet.spreadsheetID
    );
  };

  /**
   * @param spreadsheet {object} is the spreadsheet that you want to delete. It should satisfy the properties of ISpreadsheet.
   * It returns the deleted spreadsheet object.
   */
  delete = (id: string) => {
    let index = inMemory.spreadsheets.findIndex(
      (item) => item.spreadsheetID === id
    );
    return inMemory.spreadsheets.splice(index, 0);
  };

  /**
   *
   * @param id {string} is the id of the spreadsheet that you want to find. It returns the spreadsheet Object that holds the data.
   */
  findByID = (id: string) => {
    return inMemory.spreadsheets.find((item) => item.spreadsheetID === id);
  };
}

export { SpreadsheetRepository };
