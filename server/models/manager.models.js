const mongoose = require('mongoose')

const managerSchema = new mongoose.Schema({
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const manager = mongoose.model('manager',managerSchema)