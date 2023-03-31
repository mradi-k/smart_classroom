const Student = require('../models/registerStudentModel')

//Add  Students --- Admin

exports.addStudents = async (req,res,next)=>{
    const student = await Student.create(req.body);
    res.status(201).json({
        success:true,
        student
    })
}

//get All Register Students ----Admin
exports.getStudentDetails = async(req,res,next) =>{
    res.status(201).json({
        success:true,
        message:"Aditya"
    })
}


