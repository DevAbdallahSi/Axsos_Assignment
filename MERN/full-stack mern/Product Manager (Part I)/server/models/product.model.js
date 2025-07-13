const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'title is required']
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        min: [1, "price must be greater than 0"],
    },
    description: {
        type: String,
        required: [true, 'description is rrequired']
    }
}, { timestamps: true });

module.exports = mongoose.model('product', ProductSchema);


