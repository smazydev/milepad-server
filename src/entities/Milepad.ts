interface IMilepad {
  spreadsheetID: string;
  spreadsheetData: object;
}

class Milepad {
  public milepadID;
  public milepadData;
  public readOnlyMilepad: string;

  constructor({ milepadID }) {
    this.milepadID = milepadID;
    this.milepadData = [];
    this.readOnlyMilepad = `r.${milepadID}`;
  }
}

module.exports = { Milepad };
export {};
