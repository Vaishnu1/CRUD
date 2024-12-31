const express= require("express")
const app= express()
const product=require('./product.model.js');
const mongoose=require('mongoose');

app.use(express.json());

app.listen(8000,()=>
    {
    console.log('server is running on port 8000');   
    }
         ); 
 app.get('/',(req,res)=>
    {
    res.send('data vanchU');
    console.log(req.query.a)
 }
) ;

app.post('/api/products',async (req,res)=>
{
    
    try{
       await product.create(req.body);
       res.send("products send successfully")
       }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
});

app.get('/api/products',async (req,res)=>
    {
        
        try{
          const product = await product.find({});
           res.send("products get successfully")
           }
        catch(error)
        {
            res.status(500).json({message:error.message});
        }
    });
    
mongoose.connect('mongodb+srv://vaishnu753880:9566656880@node.x8h1x.mongodb.net/NODE_TEST?retryWrites=true&w=majority&appName=node')
.then(()=> {
    console.log('xonnected to database');
           })

.catch(()=>
{
    console.log('failed')
});