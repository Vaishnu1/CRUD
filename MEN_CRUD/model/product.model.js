const mongoose = require('mongoose');

// Define the product schema
const productSchema =  mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the product name"],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true, // Enable createdAt and updatedAt fields
    }
);

// Create the model
const product = mongoose.model("Product", productSchema);

// Export the model
module.exports = product;
