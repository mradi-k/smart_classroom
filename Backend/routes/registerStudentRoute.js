const express =require('express');
const { getStudentDetails, addStudents, loginStudent } = require('../controllers/registerstudentcontroller');
const router = express.Router();

router.route('/students').get(getStudentDetails);
router.route('/student/new').post(addStudents);
router.route('/student/login').post(loginStudent);

module.exports= router;