const mongoose = require('mongoose');

// Task 1: User Model

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: String,
    phoneNumber: String,
},
    { timestamps: true, versionKey: false }

);

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;

