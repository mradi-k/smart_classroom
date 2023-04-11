const Assignment = require("../models/assignmentModel");

//add Assignment

exports.addAssignment = async (req, res, next) => {
  // console.log(filename1);
  const filename = req.params.filename1;
  const assData = req.body;
  var newAssignment = new Assignment({
    department: assData.department,
    semester: assData.semester,
    subject: assData.subject,
    submissionDate: assData.submissionDate,
    filename: filename,
  });
  const assignment = await Assignment.create(newAssignment);
  res.status(201).json({
    success: true,
    assignment,
  });
};
