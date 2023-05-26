const express = require("express");
const {
  addClass,
  getClasses,
  getClassesByFaculty,
} = require("../controllers/classController");

const router = express.Router();
        
router.route("/addclass").post(addClass);
router.route("/getClasses").post(getClasses);
router.route("/getClassbyfac").post(getClassesByFaculty);

module.exports = router;
