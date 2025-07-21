const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, 'username is required'],
        min: [5, "username must be more than 5 characters!"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/.+@.+\..+/, "Please enter a valid email"]
    },
    gender: {
        type: String,
        // required: [true, 'gender is required'],
    },
    details: {
        type: String,
        required: [true, 'details is required'],
        min: [20, "details must be more than 20 characters!"]
    },
}, { timestamps: true });

module.exports = mongoose.model('Player', PlayerSchema);