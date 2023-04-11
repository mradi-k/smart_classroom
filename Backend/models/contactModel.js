const mongoose = require('mongoose');

const contactSchema =  mongoose.Schema({
    name:{
        type:String,
        required :[true,"Please Enter Student Name"],
        trim:true
    },
    email:{
        type:String,
        required :[true,"Please Enter Email"]
    },
    phone:{
        type:String,
        required:[true,"Please Enter Your Mobile Number"]
    },
    query:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("contacts",contactSchema);