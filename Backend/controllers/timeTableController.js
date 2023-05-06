const TimeTable = require("../models/timeTableModel");

exports.addtimeTable = async (req, res, next) => {
  try {
    const timeTable = await TimeTable.create(req.body);
    res.status(201).json({
      success: true,
      timeTable,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
