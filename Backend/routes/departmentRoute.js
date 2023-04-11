const express = require('express');
const { addDepartment } = require('../controllers/departmentController');
const router = express.Router();



router.route('/adddepartment').post(addDepartment)

module.exports= router;