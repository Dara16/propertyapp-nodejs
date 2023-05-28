const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const UserSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'User name is required!'],
        unique: [true, 'Try again! This username has already been taken'],
        maxLength: [15, 'User name cannot exceed 15 characters!']
    },
    email: {
        type: String,
        required: true,
        validate: (email) => validator.isEmail(email)
    },
    password: {
        type: String,
        required: true,
        validate: (password) => validator.isStrongPassword(password)
    },
    phone: {
        type: String,
        maxLength: [15, 'Phone number cannot exceed 15 digits!']
    },
    admin: {
        type: Boolean,
        default: false
    },
    firstName: {
        type: String,
        required: true,
        maxLength: [15, 'First name cannot exceed 15 characters!']
    },
    lastName: {
        type: String,
        required: true,
        maxLength: [15, 'Last name cannot exceed 15 characters!']
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'Male',
            'Female',
            'male',
            'female' 
        ]
    },
    apartment: {
        type: Number,
        maxLength: 5
    },
    leaseEnd: {
        type: Date,
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('User', UserSchema)