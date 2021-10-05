const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  milepadID: String,
  milepadData: Array,
  readOnlyMilepad: String,
  Comments: Array,
});

const MilepadModel = mongoose.model("Milepad", schema);

module.exports = {
  MilepadModel,
};

export {};
