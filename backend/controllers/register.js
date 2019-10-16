const registerRouter = require("express").Router();
const bcrypt = require("bcrypt");
const Sender = require("../models/sender");

//get list of all users
registerRouter.get("/list", async (req, res) => {
  const senders = await Sender.find({});
  res.json(senders.map(u => u.toJSON()));
});

registerRouter.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const findEmail = await Sender.findOne({ email: body.email });

    if (!findEmail) {
      const maskedPassword = await bcrypt.hash(body.password, 10);
      const sender = new Sender({
        firstName: body.firstName,
        middleName: body.middleName,
        lastName: body.lastName,
        dob: body.dob,
        email: body.email,
        password: maskedPassword
      });
      const savedSender = await sender.save();

      res.status(201).send(savedSender);
    } else {
      res.status(404).send("Email already exists!");
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = registerRouter;
