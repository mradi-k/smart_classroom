const Student = require('../models/registerStudentModel')

//Add  Students --- Admin

exports.addStudents = async (req,res,next)=>{
    const student = await Student.create(req.body);
    res.status(201).json({
        success:true,
        message:`New Student Register Successfully ${student.name}`,
        student
    })
}


//get All Register Students ----Admin
exports.getStudentDetails = async(req,res,next) =>{
     const allstudents =await Student.find();
    res.status(201).json({
        success:true,
        message:"All Stde",
        data: allstudents
    })
}

//login for student ---student Api
exports.loginStudent =  async (req,res,next) =>{
    const studentdata = req.body;
    const student = await Student.findOne({email:studentdata.email,password:studentdata.password})
                    .then((data)=>{
                        return data;
                    });
    if(student){
        res.status(201).json({
            success:true,
            message:"logIn Success Full",
            data:student
        })
    }
    else{
        res.status(401).json({
            success:false,
            message:"Email or Password is not correct"
        })
    }
}

//Edit Details or Update details?
// first find by id
exports.findStdudent = async (req,res,next) =>{
    let student =  await Student.findById(req.params.id);
    if(student){
        res.status(201).json({
            success:true,
            message:"student Found",
            student
        })
    }
}


//update details
exports.updateStudent = async (req,res,next) =>{
    let student = await Student.findById(req.params.id);
    if(!student){
       res.status(401).json({
        success:false,
        message:"User Not Found"
       })
    }

    student = await Student.findByIdAndUpdate(
        req.params.id, req.body,
        {
            new:true, 
            runValidators:true, 
            useFindAndModify:false
        });

        res.status(500).json({
            success:true,
            student
        })
     
}

// exports.editProfile = async (req,res,next) =>{
//     const studentdata =
// }









