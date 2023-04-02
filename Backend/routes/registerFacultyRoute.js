const express = require('express');
const { addFaculty, getFacultyDetails, loginFaculty, findFaculty, updateFaculty } = require('../controllers/registerFacultyController');

const router = express.Router(); 

router.route('/faculty/new').post(addFaculty);
router.route('/facultys').get(getFacultyDetails);
router.route('/faculty/login').post(loginFaculty);

router.route('/faculty/:id').get(findFaculty).post(updateFaculty);


module.exports= router;