const Assignment = require("../models/assignmentModel");
const DepartMent = require("../models/departmentModel");
// const getDataUri = require("../utils/dataUri");
// const cloudinary = require("cloudinary");
//add Assignment

exports.addAssignment = async (req, res, next) => {
  // console.log(filename1);

  try {
    const data = req.body;

    if (!data.department) {
      res.status(400).json({
        success: false,
        message: "Department is Required",
      });
    }
    const newAssignment = {
      department: data.department,
      semester: data.semester,
      subject: data.subject,
      submissionDate: data.submissionDate,
    };

    const assignment = await Assignment.create(newAssignment);
    res.status(201).json({
      success: true,
      message: "Assignment Added",
      assignment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//show Assighment
exports.showAssignment = async (req, res, next) => {
  try {
    const assignment = await Assignment.find({
      department: req.params.department,
    }).populate("department");
    res.status(200).json({
      success: true,
      assignment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
