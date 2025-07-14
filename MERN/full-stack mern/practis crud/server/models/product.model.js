const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'title is required'],
        min:[3,"title must be more than one"]
    },
    price: {
        type: Number,
        required: [true, "price is required"]
        // min: [1, "price must be greater than 0"],
    },
    description: {
        type: String,
        required: [true, 'description is required']
    }
}, { timestamps: true });

module.exports = mongoose.model('newproduct', ProductSchema);