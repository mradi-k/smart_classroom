const Student = require("../models/registerStudentModel");

//Add  Students --- Admin

exports.addStudents = async (req, res, next) => {
  const student = await Student.create(req.body);
  res.status(201).json({
    success: true,
    message: `New Student Register Successfully ${student.name}`,
    student,
  });
};

//get All Register Students ----Admin
exports.getStudentDetails = async (req, res, next) => {
  const allstudents = await Student.find();
  res.status(201).json({
    success: true,
    message: "All Stde",
    data: allstudents,
  });
};

//login for student ---student Api
exports.loginStudent = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email }).select("+password");
    if (!student) {
      res.status(401).json({
        success: false,
        message: "Invalid Details",
      });
    }
    const isMatch = await student.matchPassword(password);
    if (!isMatch) {
      res.status(401).json({
        success: false,
        message: "Invalid Details",
      });
    }
    const token = await student.generateToken();
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.status(200).cookie("token", token, options).json({
      success: true,
      message: "Login Successfully",
      token,
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//Edit Details or Update details?
// first find by id
exports.findStdudent = async (req, res, next) => {
  let student = await Student.findById(req.params.id);
  if (student) {
    res.status(201).json({
      success: true,
      message: "student Found",
      student,
    });
  }
};

//update details
exports.updateStudent = async (req, res, next) => {
  let student = await Student.findById(req.params.id);
  if (!student) {
    res.status(401).json({
      success: false,
      message: "User Not Found",
    });
  }

  student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(500).json({
    success: true,
    student,
  });
};

// exports.editProfile = async (req,res,next) =>{
//     const studentdata =
// }
