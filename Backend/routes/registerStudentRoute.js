const express =require('express');
const { getStudentDetails, addStudents } = require('../controllers/registerstudentcontroller');
const router = express.Router();

router.route('/students').get(getStudentDetails);
router.route('/student/new').post(addStudents);

module.exports= router;