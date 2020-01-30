const express = require("express");
const router = express.Router();

//for controller
const nearestController = require("../controller/nearest");

router.get("/getlocation", nearestController.getlocation);

module.exports = router;
