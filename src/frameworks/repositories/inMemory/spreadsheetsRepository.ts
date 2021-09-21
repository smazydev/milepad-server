const { inMemoryDB } = require("../../database/inMemory");
const { SpreadsheetEntity } = require("../../../entities/Spreadsheet");

interface ISpreadsheetRepository {
  add(spreadsheet: typeof SpreadsheetEntity): void;
  delete(spreadsheetID: string): void;
  findByID(spreadsheetID: string): void;
}

class SpreadsheetRepository implements ISpreadsheetRepository {
  /**
   * @param spreadsheet {object} is the spreadsheet that you want to add. It should have the following properties.
   * spreadsheetID:string, spreadsheetData: object. It should return the added spreadsheet object.
   */
  add = (spreadsheet: typeof SpreadsheetEntity) => {
    inMemoryDB.spreadsheets.push(spreadsheet);
    return inMemoryDB.spreadsheets.find(
      (item) => item.spreadsheetID === SpreadsheetEntity.spreadsheetID
    );
  };

  /**
   * @param spreadsheet {object} is the spreadsheet that you want to delete. It should satisfy the properties of ISpreadsheet.
   * It returns the deleted spreadsheet object.
   */
  delete = (id: string) => {
    let index = inMemoryDB.spreadsheets.findIndex(
      (item) => item.spreadsheetID === id
    );
    return inMemoryDB.spreadsheets.splice(index, 0);
  };

  /**
   *
   * @param id {string} is the id of the spreadsheet that you want to find. It returns the spreadsheet Object that holds the data.
   */
  findByID = (id: string) => {
    return inMemoryDB.spreadsheets.find((item) => item.spreadsheetID === id);
  };
}

module.exports = { SpreadsheetRepository };
