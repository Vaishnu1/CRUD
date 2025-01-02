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
          const productall = await product.find({});
          res.status(200).json(productall)
        //    res.send("products get successfully")
           }
        catch(error)
        {
            res.status(500).json({message:error.message});
        }
    });
    
    app.get('/api/products/:id', async (req, res) => {
        try {
            const { id } = req.params; // Extract the ID from the request parameters
            const singleproduct = await product.findById(id); // Fetch the product by ID
            
            if (!singleproduct) {
                return res.status(404).json({ message: "Product not found" }); // Handle case when no product is found
            }
            
            res.status(200).json(singleproduct); // Send the product as a JSON response
        } 
            catch(error)
            {
                res.status(500).json({message:error.message});
            }
        });


        app.put('/api/products/:id',async (req,res)=>
            {

                try 
                {
                const { id } = req.params; // Extract the ID from the request parameters
                const updateproduct = await product.findByIdAndUpdate(id,req.body); // Fetch the product by ID
                
                if (!updateproduct) {
                    return res.status(404).json({ message: "Product not found" }); // Handle case when no product is found
                }
                const updatedproduct=await product.findById(id);
                res.status(200).json(updatedproduct); // Send the product as a JSON response
                
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