const express = require("express");
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.routes');

app.use(express.json());
app.use('/api/products',productRoutes);



app.get('/', (req, res) => {
    res.send('data vanchU');
});

mongoose.connect('mongodb+srv://vaishnu753880:9566656880@node.x8h1x.mongodb.net/NODE_TEST?retryWrites=true&w=majority&appName=node')
    .then(() => {
        app.listen(8000, () => {
            console.log('server is running on port 8000');
        });
        console.log('connected to database');
    })
    .catch(() => {
        console.log('failed');
    });