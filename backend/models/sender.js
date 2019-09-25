const mongoose = require("mongoose");

const senderSchema = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  password: String,
  dob: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Sender", senderSchema);
