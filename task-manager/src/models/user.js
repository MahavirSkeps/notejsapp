
const mongoose = require('mongoose')
const validator = require('validator')
const User = mongoose.model('User', {
    name:{
        type: String,
        required: true,
        trim: true,

    },
    email:{
        type:String,
        required: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is not valid')
               
            }
        }

    },
    age:{
        type: Number,
        default: 15,
        validate(value){
            if(value<0){
                throw new Error('age must be positive')
            }
        }

    },
    password:{
        type: String,
        required:true,
        trim: true,
        validate(value){
            if(value.length<6){
                throw Error ('size must be greater then 6')
            }
            if(value==="password"){
                throw Error("password must not be password")
            }
        }
    }
})

module.exports = User;