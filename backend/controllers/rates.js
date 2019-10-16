const ratesRouter = require("express").Router();
const rates = require("../utils/rates");

ratesRouter.get("/", async (req, res, next) => {
  try {
    await res.status(200).send(rates[0]);
  } catch (err) {
    next(err);
  }
});

module.exports = ratesRouter;
