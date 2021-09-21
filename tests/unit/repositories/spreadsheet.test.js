import { Spreadsheet } from "../../../src/entities";
import { v4 } from "uuid";
import { SpreadsheetRepository } from "../../../src/frameworks/repositories";

describe("Spreadsheet Repository", () => {
  test("New spreadsheet should be added and returned", async () => {
    const spreadsheet = {
      spreadsheetID: v4(),
      spreadsheetData: {hello:"hello"},
    };
    const newSpreadsheet = new Spreadsheet(spreadsheet);
    const addedSpreadsheet = SpreadsheetRepository.add(spreadsheet);
    expect(addedSpreadsheet.readOnlySpreadsheet).toBeDefined();
    expect(addedSpreadsheet).toEqual(newSpreadsheet.spreadsheetData);
    expect(addedSpreadsheet.spreadsheetID).toEqual(newSpreadsheet.spreadsheetID);
  });
  test("Spreadsheet should be deleted", async () => {
    //init two spreadsheets
    const spreadsheet = {
      spreadsheetID: v4(),
      spreadsheetData: {hello:"hello"},
    };
    const spreadsheetToBeDeleted = {
      spreadsheetID: v4(),
      spreadsheetData: {hello:"hello"}, 
    }
    const newSpreadsheet = new Spreadsheet(spreadsheet);
    const newSpreadsheetToBeDeleted = new Spreadsheet(spreadsheetToBeDeleted);
    //Push to in memory DB.
        

  });
  test("Find spreadsheet by id", async () => {});
});

socket.join("room id");
