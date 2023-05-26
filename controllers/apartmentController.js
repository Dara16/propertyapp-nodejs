const Apartment = require('../models/Apartment')

// For '/apartment endpoints

const getApartments = async (req, res, next) => {
    // query parameter
    if (Object.keys(req.query).length) {
        const {
            number,
            building,
            bedrooms,
            isOccupied
        } = req.query

        const filter = []

        if (number) filter.push(number)
        if (building) filter.push(building)
        if (bedrooms) filter.push(bedrooms)
        if (isOccupied) filter.push(isOccupied)

        for (const query of filter) {
            console.log(`Searching by ${query}`)
        }
    }
    
    try {
        const apartments = await Apartment.find()

        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(apartments)
    
    } catch (err) {
        next(err)
    }
} 

const createApartment = async (req, res, next) => {
    try {
        const apartment = await Apartment.create(req.body) 
        
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(apartment)
    } catch (err) {
        next(err)
    }
}

const deleteApartments = async (req, res, next) => {
    try {
        const deletedApartments = await Apartment.deleteMany()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedApartments)
    
    } catch (err) {
        next(err)
    }
}

// For 'apartment/:apartmentId'
const getApartment = async (req, res, next) => {
    try {
        const apartment = await Apartment.findById(req.params.apartmentId)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(apartment)
    
    } catch (err) {
        next(err)
    }
}

const updateApartment = async (req, res, next) => {
    try {
        const updatedApartment = await Apartment.findByIdAndUpdate(req.params.apartmentId, req.body, { new: true })
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedApartment)
    
    } catch (err) {
        next(err)
    }
}

const deleteApartment = async (req, res, next) => {
    try {
        const deletedApartment = await Apartment.findByIdAndDelete(req.params.apartmentId)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedApartment)
    
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getApartments,
    createApartment,
    deleteApartments,
    getApartment,
    updateApartment,
    deleteApartment
}