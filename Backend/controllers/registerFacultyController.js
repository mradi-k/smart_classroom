const Faculty = require('../models/registerFacultyModel')


//Add faculty   ---Admin
exports.addFaculty = async (req,res,next) =>{
    const faculty = await Faculty.create(req.body);
    res.status(201).json ({
        success:true,
        faculty
    })
}

//Get All faculty ---Admin

exports.getFacultyDetails = async (req,res,next) =>{
    const allFacultys = await Faculty.find();
    res.status(201).json({
        success:true,
        messagge:"All facultys",
        data: allFacultys
    })
}

//login Faculty 

exports.loginFaculty =  async (req,res,next) =>{
    const facultydata = req.body;
    const faculty = await Faculty.findOne({email:facultydata.email,password:facultydata.password})
                    .then((data)=>{
                        return data;
                    });
    if(faculty){
        res.status(201).json({
            success:true,
            message:"logIn Success Full",
            data:faculty
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
exports.findFaculty = async (req,res,next) =>{
    let faculty =  await Faculty.findById(req.params.id);
    if(faculty){
        res.status(201).json({
            success:true,
            message:"student Found",
            faculty
        })
    }
}


//update details
exports.updateFaculty = async (req,res,next) =>{
    let faculty = await Faculty.findById(req.params.id);
    if(!faculty){
       res.status(401).json({
        success:false,
        message:"User Not Found"
       })
    }

    faculty = await Faculty.findByIdAndUpdate(
        req.params.id, req.body,
        {
            new:true, 
            runValidators:true, 
            useFindAndModify:false
        });

        res.status(500).json({
            success:true,
            faculty
        })
     
}

