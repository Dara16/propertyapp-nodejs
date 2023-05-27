const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        maxLength: 15
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,

    },
    phone: {
        type: String,
        maxLength: 15
    },
    admin: {
        type: Boolean,
        default: false
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 15
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 15
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