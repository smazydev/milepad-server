const Repository = require("../../frameworks/repositories/inMemory/spreadsheetsRepository");
const Service = require("../../Services/spreadsheet/SpreadsheetService");

const spreadsheetInjectionHandler = () => {
  let spreadsheetService, spreadsheetRepository;
  if (spreadsheetService && spreadsheetRepository) {
    console.log("inside the if statement of injection handler");
    return spreadsheetService;
  } else {
    spreadsheetRepository = new Repository.SpreadsheetRepository();
    spreadsheetService = new Service.SpreadsheetService(spreadsheetRepository);
    console.log(
      "Inside the else statement of the spreadsheet injection handler"
    );
  }
};

module.exports = { spreadsheetInjectionHandler };
