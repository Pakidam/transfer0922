const mongoose = require("mongoose");

const senderSchema = mongoose.Schema({
  firstName: String,
  middleName: String,
  lastName: String,
  email: String,
  password: String,
  dob: Date,
  created: {
    type: Date,
    default: Date.now
  },
  receivers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Receiver"
    }
  ]
});

senderSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Sender", senderSchema);
