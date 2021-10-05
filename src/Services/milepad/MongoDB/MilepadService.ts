const { Milepad } = require("../../../entities/Milepad");

class MilepadService {
  milepadRepository;

  constructor(milepadRepository) {
    this.milepadRepository = milepadRepository;
  }

  addMilepad = (milepad: typeof Milepad) => {
    return this.milepadRepository.add(milepad);
  };

  deleteMilepad = (id: string) => {
    return this.milepadRepository.delete(id);
  };

  findMilepadByID = (id: string) => {
    return this.milepadRepository.findByID(id);
  };

  getAllMilepads = () => {
    return this.milepadRepository.getAll();
  };

  updateMilepad = (milepadID, milepadData) => {
    return this.milepadRepository.update(milepadID, milepadData);
  };
}

module.exports = {
  MilepadService,
};
export {};
