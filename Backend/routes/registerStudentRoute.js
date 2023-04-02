const express =require('express');
const { getStudentDetails, addStudents, loginStudent, findStdudent, updateStudent } = require('../controllers/registerStudentController');
const router = express.Router();

router.route('/students').get(getStudentDetails);
router.route('/student/new').post(addStudents);
router.route('/student/login').post(loginStudent);
router.route('/student/:id').get(findStdudent).post(updateStudent);

module.exports= router;