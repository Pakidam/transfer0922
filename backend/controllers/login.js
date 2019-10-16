const loginRouter = require("express").Router();
const Sender = require("../models/sender");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

loginRouter.post("/", async (req, res) => {
  const body = req.body;

  const user = await Sender.findOne({ email: body.email });
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.password, user.password);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: "Invalid email or password"
    });
  }
  const userForToken = {
    email: user.email,
    id: user._id
  };

  const token = jwt.sign(userForToken, process.env.SECRET);

  res.status(200).send({ token, email: user.email, firstName: user.firstName });
});

module.exports = loginRouter;
