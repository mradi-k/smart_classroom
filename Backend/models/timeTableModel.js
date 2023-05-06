const mongoose = require("mongoose");

const timeTableSchema = mongoose.Schema({
  department: {
    type: String,
    required: [true, "Please Enter Department"],
    trim: true,
    unique: true,
  },
  slot: [
    {
      type: Object,
      required: [true, "Please Enter Slot"],
      semester: {
        type: String,
        required: [true, "Please Enter Semester"],
      },
      subject: {
        type: String,
        required: [true, "Please Enter Subject"],
      },
      day: {
        type: String,
        required: [true, "Please Enter Day"],
      },
      time: {
        type: String,
        required: [true, "Please Enter Time"],
      },
      faculty: {
        type: String,
        required: [true, "Please Enter Faculty"],
      },
    },
  ],
});

module.exports = mongoose.model("timetable", timeTableSchema);
