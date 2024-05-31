//load.env file
require('dotenv').config()

//  import express
const express = require('express')

// import cors  
const cors = require('cors')

//import the routes to index
const routes=require('./Routes/routes')

//import mongoose
require('./db/connection')

//create server using express
const loginserver = express()

//to connect frontend and server
loginserver.use(cors())

//convert all incoming json data to js data
loginserver.use(express.json())
loginserver.use(routes)




// //for google authentication
const session=require("express-session");
const passport=require("passport");
// const { login } = require('./Controllers/userlogic')

const OAuth2strategy = require("passport-google-oauth2").Strategy;
// const user=require('./Model/userModel')
const users = require('./Model/userModel')


const clientid=process.env.GOOGLE_OAUTH_CLIENT_ID;
const clientsecret=process.env.GOOGLE_OAUTH_CLIENT_SECRET;

// //setup session 

loginserver.use(session({
    secret:"123654789qwertyuio",
    resave:false,
    saveUninitialized:true
}))

//setup passport
loginserver.use(passport.initialize());
loginserver.use(passport.session());

passport.use(
    new OAuth2strategy({
        clientID:clientid,
        clientSecret:clientsecret,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async (accessToken, refreshtoken, profile, done) => {
            console.log("profile",profile);
            try {
                let user =await users.findOne({googleId:profile.id})
        
                if(!user){
                    user=new users({
                        googleId:profile.id,
                        username:profile.displayName,
                        email:profile.emails[0].value,
                        password:profile.password,
                        image:profile.photos[0].value
        
                    });
                    await user.save();
                }
                return done(null,user)
            } catch (error) {
                return done(error,null)
                
            }
        
        })
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
})


//initial google  oauth login

loginserver.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

loginserver.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000/home",
    failureRedirect:"http:localhost:3000/login"
}))



loginserver.get("/login/success",async(req,res)=>{
    console.log("reqq",req.user);
        
        // if(req.user){
        //     req.status(200).json({message:"user login",user:req.user})
        // }
        // else{
        //     res.status(400).json({message:"Not authorised"})
        // }
})












//to run the server in a port , assign a port
const port = 4000 || process.env.port

loginserver.listen(port, () => {
    console.log(`_____loginserver started at port number ${port}________`);
})


//api requests
loginserver.get('/', (req, res) => {
    res.send("<h1>project server started</h1>")
})


