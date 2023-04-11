const Contact =require('../models/contactModel');

//Add contacts 
exports.addContact = async(req,res,next) => {
    const contact = await Contact.create(req.body);
    res.status(201).json({
        success:true,
        contact
    })
}