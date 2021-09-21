import { SpreadsheetRepository } from "../repositories/inMemory/spreadsheetsRepository";
import { SpreadsheetService } from "../../Services/spreadsheet/SpreadsheetService";

const spreadsheetInjectionHandler = () => {
  let spreadsheetService, spreadsheetRepository;
  if (spreadsheetService && spreadsheetRepository) {
      console.log("inside the if statement of injection handler")
    return spreadsheetService;
  } else {
    spreadsheetRepository = new SpreadsheetRepository();
    spreadsheetService = new SpreadsheetService(spreadsheetRepository);
  }
};

export { spreadsheetInjectionHandler };
