    const mongoose = require('mongoose')


    //schema

    const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique:true
        },
        password: {
            type: String,
           
        },
        googleId:{
            type:String
            
        },
        image:{
            type:String
        }
        
    },{timestamps:true});

    // model

    const users = mongoose.model("users", userSchema)

    module.exports = users