const Classes = require("../models/createClassModel");

exports.addClass = async (req, res, next) => {
  try {
    const data = req.body;

    if (!data.department) {
      res.status(400).json({
        success: false,
        message: "Department is Required",
      });
    }

    const newClass = {
      department: data.department,
      semester: data.semester,
      subject: data.subject,
      classDate: data.classDate,
      classTime: data.classTime,
      classLink: data.classLink,
      faculty: data.faculty,
    };
    const classes = await Classes.create(newClass);
    res.status(201).json({
      success: true,
      message: "Class Added",
      classes,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//get scheduled classe
exports.getClasses = async (req, res, next) => {
  const { department } = req.body;
  try {
    const currentDate = new Date();

    const classes = await Classes.find({ department: department });
    const UpcomingClass = classes.filter((Class) => {
      return new Date(Class.classDate) >= currentDate;
    });
    res.status(200).json({
      success: true,
      message: "Classes Fetched",
      UpcomingClass,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//now get classes on the basis of facultyname 
exports.getClassesByFaculty = async (req, res, next) => {
  const { faculty } = req.body;
  try {
    const currentDate = new Date();

    const classes = await Classes.find({ faculty: faculty });
    const UpcomingClass = classes.filter((Class) => {
      return new Date(Class.classDate) >= currentDate;
    });
    res.status(200).json({
      success: true,
      message: "Classes Fetched",
      UpcomingClass,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}
