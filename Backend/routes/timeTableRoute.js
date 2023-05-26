const express = require("express");
const {
  addtimeTable,
  getTimeTable,
} = require("../controllers/timeTableController");
const router = express.Router();

router.route("/timeTable").post(addtimeTable);
router.route("/timeTable").get(getTimeTable);
module.exports = router;
