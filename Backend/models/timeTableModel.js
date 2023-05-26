const mongoose = require("mongoose");

const timeTableSchema = mongoose.Schema({
  branch: {
    type: String,
    required: [true, "Please Enter Branch"],
  },
  semester: {
    type: String,
    required: [true, "Please Enter Semester"],
  },
  day: {
    type: String,
    required: [true, "Please Enter Day "],
  },
  Subjects: [
    {
      type: Object,
      required: [true, "Please Enter Subjects "],
      subName: {
        type: String,
        required: [true, "Please Enter Subject Name "],
      },
      Time: {
        type: String,
        required: [true, "Please Enter Time "],
        unique: [true, "Time Should be Unique"],
      },
      FacultyName: {
        type: String,
        required: [true, "Please Enter Faculty Name "],
      },
    },
  ],
});

module.exports = mongoose.model("timetable", timeTableSchema);
