const mongoose = require('mongoose');

const AuthoreSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'name is required'],
        min:[3,"name must be more than one"]
    },
   
}, { timestamps: true });

module.exports = mongoose.model('newauthore', AuthoreSchema);