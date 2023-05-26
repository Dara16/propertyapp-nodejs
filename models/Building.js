const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BuildingSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    address: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Building', BuildingSchema)