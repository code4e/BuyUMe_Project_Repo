const express = require("express");
const router = express.Router();
const payloadController = require('../controllers/payloadController');

router.post("/", payloadController.handleInventory);

module.exports = router;
