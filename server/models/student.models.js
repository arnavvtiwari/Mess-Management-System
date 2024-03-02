const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    rollno:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    hostel:{
        type:String,
        required:true
    },
    fees:{
        type:Schema.type.ObjectId,
        ref:'fees'
    },
    leave:{
        type:Boolean,
    }
})

export const Students=mongoose.model('Students',studentSchema)