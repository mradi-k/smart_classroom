const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Route imports student
const student = require("./routes/registerStudentRoute");
app.use("/api/v1", student);

//Route import faculty
const faculty = require("./routes/registerFacultyRoute");
app.use("/api/v1", faculty);

//Route contact import
const contact = require("./routes/contactRoute");
app.use("/api/v1", contact);

//Route Assignment import
const assignment = require("./routes/assignmentRoute");
app.use("/api/v1", assignment);

//Route import Department
const department = require("./routes/departmentRoute");
app.use("/api/v1", department);

module.exports = app;
