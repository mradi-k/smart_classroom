const DepartMent  =  require('../models/departmentModel');


exports.addDepartment = async (req,res,next) =>{
    const department  = await (DepartMent.create(req.body));
    res.status(201).json({
        success:true,
        department
    })
}