const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema({
  department: {
    type: String,
    required: [true, "DepartMent Is Required"],
    trim: true,
  },
  semester: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  submissionDate: {
    type: String,
    required: true,
  },
  fileName: String,
});

module.exports = mongoose.model("assignments", assignmentSchema);
