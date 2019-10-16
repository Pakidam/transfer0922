const mongoose = require("mongoose");

const receiverSchema = mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Sender"
  },
  firstName: String,
  middleName: String,
  email: String,
  dob: Date,
  tel: String,
  address: String,
  country: String
});

receiverSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Receiver", receiverSchema);
