const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./utils/config");
const registerRouter = require("./controllers/register");
const loginRouter = require("./controllers/login");
const morgan = require("morgan");

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch(error => {
    logger.info("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);

module.exports = app;
