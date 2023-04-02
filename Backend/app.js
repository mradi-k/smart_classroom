const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());

//Route imports student
const student = require('./routes/registerStudentRoute');
app.use('/api/v1',student);

//Route import faculty
const faculty = require('./routes/registerFacultyRoute');
app.use('/api/v1',faculty);
module.exports= app;

