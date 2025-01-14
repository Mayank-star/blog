
const mongoose = require('mongoose')  

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String, 
    },
    email:{
        type:String, 
    },
    jobTitle:{
        type:String, 
    },
    gender:{
        type:String, 
    }, 
    
},{timestamps:true})

const user = mongoose.model('user',userSchema)

module.exports = user;