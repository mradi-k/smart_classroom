const mongoose = require("mongoose");

const classSchema = mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  classDate: {
    type: String,
    required: true,
  },
  classTime: {
    type: String,
    required: true,
  },
  classLink: {
    type: String,
    required: true,
  },
  faculty: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("classes", classSchema);
