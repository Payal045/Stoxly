const {model } =require("mongoose");

const {HoldingsSchemas} = require('../schemas/HoldingsSchema');

const HoldingsModel = new model("holding", HoldingsSchemas);

module.exports = {HoldingsModel};
