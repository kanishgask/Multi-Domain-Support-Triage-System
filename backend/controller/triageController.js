const express = require("express");
const router = express.Router();
const { createTicket, getTickets } = require("../controller/triageController");

router.post("/", createTicket);
router.get("/", getTickets);

module.exports = router;
