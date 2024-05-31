const express=require('express')

// const passport = require('passport');

//router object
const router=new express.Router()


//import the userlogic 
const userlogic=require('../Controllers/userlogic')


//register
router.post('/user/register',userlogic.userregister)


//login
router.post('/user/login',userlogic.login)






module.exports=router
