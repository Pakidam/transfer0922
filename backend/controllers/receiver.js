const receiverRouter = require("express").Router();
const Receiver = require("../models/receiver");
const Sender = require("../models/sender");
const jwt = require("jsonwebtoken");

const getTokenFrom = req => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

receiverRouter.post("/", async (req, res, next) => {
  const body = req.body;
  const token = getTokenFrom(req);

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    if (!token || !decodedToken.id) {
      return res.status(401).json({ error: "token missing or invalid" });
    }

    const sender = await Sender.findById(decodedToken.id);

    const receiver = new Receiver({
      firstName: body.firstName,
      middleName: body.middleName,
      lastName: body.lastName,
      email: body.email,
      dob: body.dob,
      tel: body.tel,
      address: body.address,
      country: body.country,
      sender: sender._id
    });

    const savedReceiver = await receiver.save();
    sender.receivers = sender.receivers.concat(savedReceiver._id);
    await sender.save();
    res.json(savedReceiver.toJSON());
  } catch (exception) {
    next(exception);
  }
});

module.exports = receiverRouter;
