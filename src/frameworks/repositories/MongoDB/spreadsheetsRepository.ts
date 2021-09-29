const Spreadsheet = require("../../../entities/Spreadsheet");
const {
  SpreadsheetModel,
} = require("../../database/mongoDB/models/SpreadsheetSchema");

interface ISpreadsheetRepository {
  add(spreadsheet: typeof Spreadsheet.Spreadsheet): void;
  delete(spreadsheetID: string): void;
  findByID(spreadsheetID: string): void;
}

class SpreadsheetRepository implements ISpreadsheetRepository {
  /**
   * @param spreadsheet {object} is the spreadsheet that you want to add. It should have the following properties.
   * spreadsheetID:string, spreadsheetData: object. It'll save it to the database.
   */
  add = (spreadsheet: typeof Spreadsheet.Spreadsheet) => {
    const newSpreadsheet = new SpreadsheetModel(spreadsheet);
    console.log("creating new spreadsheet", newSpreadsheet);
    return newSpreadsheet.save();
  };

  /**
   * @param spreadsheet {object} is the spreadsheet that you want to delete. It should satisfy the properties of ISpreadsheet.
   * It returns the deleted spreadsheet object.
   */
  delete = (id: string) => {
    SpreadsheetModel.deleteOne({ spreadsheetID: id })
      .then(() => {
        console.log("Data deleted");
      })
      .catch((err) => {
        console.log(err);
      });
    return {};
  };

  /**
   *
   * @param id {string} is the id of the spreadsheet that you want to find. It returns the spreadsheet Object that holds the data.
   */
  findByID = (id: string) => {
    return SpreadsheetModel.find({ spreadsheetID: id });
  };

  /**
   * Get all spreadsheets
   */
  getAll = () => {
    return SpreadsheetModel.find({});
  };

  update = async (id, spreadsheetData) => {
    // if (spreadsheetData.length === 0) {
    //   return "no data received"
    // }

    if (spreadsheetData.length === 0) {
      return "no data received";
    }

    const document = await SpreadsheetModel.find({ spreadsheetID: id });

    const spreadsheetDataArr = document[0].spreadsheetData;

    //IF THERE IS NO DATA IN ARRAY JUST PUSH IT IN
    if (spreadsheetDataArr.length === 0) {
      spreadsheetDataArr.push(spreadsheetData);
      document[0].save();
      console.log(spreadsheetDataArr.length);
      return "written";
    } else {
    
      const index = spreadsheetDataArr.findIndex((item) => {
        return item.name === spreadsheetData.name;
      });

      spreadsheetDataArr[index] = spreadsheetData;

      if (index === -1) {
        spreadsheetDataArr.push(spreadsheetData);
      }

      console.log(index);

      document[0].save();
    }
  };
}

module.exports = { SpreadsheetRepository };
export {};
