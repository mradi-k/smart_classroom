const TimeTable = require("../models/timeTableModel");

exports.addtimeTable = async (req, res, next) => {
  try {
    const data = req.body;
    const existingData = await TimeTable.findOne({
      branch: data.branch,
      semester: data.semester,
      day: data.day,
    });
    if (existingData) {
      console.log("matched");
      existingData.Subjects.push(...data.Subjects);
      await existingData.save();
      return res.status(201).json({
        message: "Time table added successfully",
        data: existingData,
      });
    }
    const timeTable = await TimeTable.create(req.body);
    res.status(201).json({
      success: true,
      timeTable,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
//getting timetable by branch , semester , day
exports.getTimeTable = async (req, res, next) => {
  try {
    const { branch, semester, day } = req.query;
    const timeTable = await TimeTable.findOne({
      branch,
      semester,
      day,
    });
    if (timeTable) {
      return res.status(200).json({
        success: true,
        data: timeTable,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Time table not found",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
