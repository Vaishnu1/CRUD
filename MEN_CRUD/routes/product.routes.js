const express = require('express');
const router = express.Router();
const {createProduct,getAllProducts,getProductById,updateProductById}= require('../controller/products.controller');

const mockAuthMiddleware = (req, res, next) => {
    const authHeader = req.query.auth;
    console.log(authHeader);
    if (authHeader== 'true') {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
};


router.post('/',createProduct);
router.get('/',mockAuthMiddleware,getAllProducts);
router.get('/:id', getProductById);
router.put('/:id',updateProductById);

module.exports = router;