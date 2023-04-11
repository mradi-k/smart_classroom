const express = require("express");
const { addAssignment } = require("../controllers/assignmentController");
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const router = express.Router();

const filename1 =
  "picture-" + Date.now() + "-" + Math.round(Math.random() * 999999) + ".jpg";

//upload destination
const pictureUpload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, filename1);
  },
});
const upload = multer({ storage: pictureUpload });
// router.route("/assignment").post(upload.single("picture"), addAssignment);
router.post(
  "/assignment",
  upload.single("picture"),
  function (req, res, next) {
    const filename = req.params.filename1;
    // req.params.filename = filename;
    next();
  },
  addAssignment
);
// router.route("/assignment").post(upload.single("picture"), addAssignment);

module.exports = router;
