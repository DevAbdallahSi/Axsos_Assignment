const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"]  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be greater than 0"],
    max: [120, "Are you really over 120 years old? 😅"]}
  },{ timestamps: true });
  
//    email: {
//     type: String,
//     required: [true, "Email is required"],
//     match: [/.+@.+\..+/, "Please enter a valid email"]
//   },

const User = mongoose.model('User', UserSchema);
module.exports = User;
