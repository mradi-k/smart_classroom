const Student = require("../controllers/registerStudentController");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.student = await Student.findById(decoded.id);
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
