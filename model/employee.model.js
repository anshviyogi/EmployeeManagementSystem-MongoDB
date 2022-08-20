const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

const Employee = new mongoose.model('EMP',employeeSchema)

module.exports = Employee