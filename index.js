const express= require("express")
const app= express()
const mongoose=require('mongoose')

app.listen(8000,()=>{
    console.log("server is running on port 8000");
        
    }
); 
 app.get('/',(req,res)=>{
    res.send("data vanchU");
 }
)


mongoose.connect('mongodb+srv://vaishnu753880:9566656880@node.x8h1x.mongodb.net/NODE_TEST?retryWrites=true&w=majority&appName=node')
.then(()=> {
    console.log("xonnected to database");

})
.catch(()=>
{
    console.log('failed')
})