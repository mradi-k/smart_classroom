const mongoose = require("mongoose");
// npm i bcrypt for password hashing

const bcrypt = require("bcrypt");
//import jwttoken
const jwt = require("jsonwebtoken");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Student Name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter Email"],
    unique: [true, "Email Already Exists"],
  },
  session: {
    type: String,
    required: [true],
  },
  dob: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: 123456789,
  },
  fathername: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },
  branch: {
    type: String,
    required: [true],
  },
  address: {
    type: String,
    default: "",
  },
  department: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    default: "",
  },
  profileimg: [
    {
      p_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});
//Encrypting Password Before saving
studentSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
studentSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
//Generate Token
studentSchema.methods.generateToken = async function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

module.exports = mongoose.model("students", studentSchema);
