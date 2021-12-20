const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: "This field is required.",
  },
  middlename: {
    type: String,
    required: "This field is required.",
  },
  lastname: {
    type: String,
    required: "This field is required.",
  },
  email: {
    type: String,
    required: "This field is required.",
  },
  phone: {
    type: String,
    required: "This field is required.",
  },
  street: {
    type: String,
    required: "This field is required.",
  },
  brgy: {
    type: String,
    required: "This field is required.",
  },
  mn: {
    type: String,
    required: "This field is required.",
  },
  prov: {
    type: String,
    required: "This field is required.",
  },
  gender: {
    type: String,
    required: "This field is required.",
  },
  password: {
    type: String,
    required: "This field is required.",
  },
});

module.exports = mongoose.model("register", registerSchema);
