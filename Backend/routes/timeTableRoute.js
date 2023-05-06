const express = require("express");
const { addtimeTable } = require("../controllers/timeTableController");
const router = express.Router();

router.route("/timeTable").post(addtimeTable);

module.exports = router;
