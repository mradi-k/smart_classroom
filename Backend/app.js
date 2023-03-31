const express = require('express');

const app = express();
app.use(express.json());

//Route imports
const student = require('./routes/registerStudentRoute');
app.use('/api/v1',student);


module.exports= app;

