const mongoose=require('mongoose')

const connectionstring=process.env.DATABASE
mongoose.connect(connectionstring).then(()=>{
    console.log("____MondoDB Atlas Connected");

}).catch((err)=>{
    console.log(`____MongoDB Atlas connection Failed ${err}____`);
})