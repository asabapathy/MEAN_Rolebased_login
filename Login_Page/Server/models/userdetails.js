const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userDetailsSchema = new Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String
});

module.exports = mongoose.model("userdetail", userDetailsSchema, "userdetails");
