const mongoose=require('mongoose')

const feeSchema = new mongoose.Schema({
    fees:{
        type:Number,
        required:true
    }
})
export const fees=mongoose.model('fees',feeSchema)