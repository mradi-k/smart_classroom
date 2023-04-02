const mongoose = require('mongoose');

const facultySchema =  mongoose.Schema({
    name:{
        type:String,
        required :[true,"Please Enter Student Name"],
        trim:true
    },
    email:{
        type:String,
        required :[true,"Please Enter Email"]
    },
    dob:{
        type:String,
        default:""
    },
    phone:{
        type:String,
        default:123456789
    },
    password:{
        type:String,
        required:[true,"Please Enter Password"]
    },
    department:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        default:""
    },
    profileimg:[
        {
            p_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model("facultys",facultySchema);