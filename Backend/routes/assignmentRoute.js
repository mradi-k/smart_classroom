const express = require("express");
const {
  addAssignment,
  showAssignment,
} = require("../controllers/assignmentController");
const singleUpload = require("../middleware/multer");
const router = express.Router();

router.route("/assignment").post(addAssignment);
router.route("/assignment/:department").get(showAssignment);
module.exports = router;
