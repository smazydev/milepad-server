const Repository = require("../../frameworks/repositories/MongoDB/MilepadRepository");
const Service = require("../../Services/milepad/MongoDB/MilepadService");

class MilepadServiceSingleton {
  private static milepadService: MilepadServiceSingleton;

  private constructor() {}

  public static getInstance(): MilepadServiceSingleton {
    if (!MilepadServiceSingleton.milepadService) {
      const milepadRepository = new Repository.MilepadRepository();
      MilepadServiceSingleton.milepadService =
        new Service.MilepadService(milepadRepository);
    }

    return MilepadServiceSingleton.milepadService;
  }
}

module.exports = { MilepadServiceSingleton };
export {};
