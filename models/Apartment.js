const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApartmentSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    building: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Apartment', ApartmentSchema)