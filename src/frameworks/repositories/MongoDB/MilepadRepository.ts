const {Milepad} = require("../../../entities/Milepad");
const {
  MilepadModel,
} = require("../../database/mongoDB/models/MilepadSchema");

interface IMilepadRepository {
  add(milepad: typeof Milepad): void;
  delete(milepadID: string): void;
  findByID(milepadID: string): void;
}

class MilepadRepository implements IMilepadRepository {
  /**
   * @param milepad{object} is the spreadsheet that you want to add. It should have the following properties.
   * spreadsheetID:string, spreadsheetData: object. It'll save it to the database.
   */
  add = (milepad: typeof Milepad) => {
    const newMilepad = new MilepadModel(milepad);
    console.log("creating new Milepad", newMilepad);
    return newMilepad.save();
  };

  /**
   * @param milepad {object} is the spreadsheet that you want to delete. It should satisfy the properties of ISpreadsheet.
   * It returns the deleted spreadsheet object.
   */
  delete = (id: string) => {
    MilepadModel.deleteOne({ milepadID: id })
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
    return MilepadModel.find({ milepadID: id });
  };

  /**
   * Get all spreadsheets
   */
  getAll = () => {
    return MilepadModel.find({});
  };

  update = async (id, milepadData) => {
    // if (spreadsheetData.length === 0) {
    //   return "no data received"
    // }

    if (milepadData.length === 0) {
      return "no data received";
    }

    const document = await MilepadModel.find({ milepadID: id });

    const milepadDataArr = document[0].milepadData;

    //IF THERE IS NO DATA IN ARRAY JUST PUSH IT IN
    if (milepadDataArr.length === 0) {
      milepadDataArr.push(milepadData);
      document[0].save();
      console.log(milepadDataArr.length);
      return "written";
    } else {
    
      const index = milepadDataArr.findIndex((item) => {
        return item.name === milepadData.name;
      });

      milepadDataArr[index] = milepadData;

      if (index === -1) {
        milepadDataArr.push(milepadData);
      }

      console.log(index);

      document[0].save();
    }
  };
}

module.exports = { MilepadRepository };
export {};
