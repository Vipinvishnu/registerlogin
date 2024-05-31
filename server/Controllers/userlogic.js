const users = require("../Model/userModel");
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs')




exports.userregister = async (req, res) => {
    const { username, email, password, confirmpassword } = req.body;
    if (password !== confirmpassword)
         {
        return res.status(400).json("password not matching");
          }
    try
    
    {
        const existinguser = await users.findOne({ email });
        if (existinguser)
        {
            return res.status(400).json("user already exist !! please login ");
        }
         else
        {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newuser = new users({
                username,
                email,
                password:hashedPassword
            });
            await newuser.save();
            return res.status(200).json(newuser);
        }
    } catch (err) 
    
    {
        return res.status(401).json(`Register Api Failed ${err}`);
    }
}






exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const existuser = await users.findOne({ email})
        if (existuser) {
            const isMatch = await bcrypt.compare(password, existuser.password);
         if(isMatch){
            const token = jwt.sign({ id: existuser._id }, "supersecretkey")
            res.status(200).json({ user: existuser, token })

                    }
        else {
            res.status(404).json("incorrect email or password")
            }
        
    }
    else {
        res.status(404).json("incorrect email or password")
    }
    
}
    catch (err) {
        res.status(401).json(`Login Api Failed ${err}`)

    }

}








