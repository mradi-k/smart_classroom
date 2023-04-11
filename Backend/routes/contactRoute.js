const  express  = require('express');
const { addContact } = require('../controllers/contactController');

const router = express.Router();

router.route('/contact/new').post(addContact);


module.exports= router;