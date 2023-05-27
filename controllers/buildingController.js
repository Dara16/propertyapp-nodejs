const Building = require('../models/Building')

// For '/building endpoints

const getBuildings = async (req, res, next) => {
    //query parameter
    if (Object.keys(req.query).length) {
        const {
            name,
            address
        } = req.query

        const filter = []

        if (name) filter.push(name)
        if (address) filter.push(address)

        for (const query of filter) {
            console.log(`Searching by ${query}`)
        }
    }

    try {
        const buildings = await Building.find()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(buildings)
    
    } catch (err) {
        next(err)
    }

}

const createBuilding = async (req, res, next) => {
    try {
        const newBuilding = await Building.create(req.body)
        
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(newBuilding)
    } catch (err) {
        next(err)
    }
}

const deleteBuildings = async (req, res, next) => {
    try {
        const deletedBuildings = await Building.deleteMany()
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedBuildings)
    } catch (err) {
        next(err)
    }
}

// For 'building/:buildingId
const getBuilding = async (req, res, next) => {
    try {
        const building = await Building.findById(req.params.buildingId)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(building)
    } catch (err) {
        next(err)
    }
}

const updateBuilding = async (req, res, next) => {
    try {
       const updatedBuilding = await Building.findByIdAndUpdate(req.params.buildingId, req.body, { new: true }) 
       
       res
       .status(200)
       .setHeader('Content-Type', 'application/json')
       .json(updatedBuilding)
    } catch (err) {
        next(err)
    }
}

const deleteBuilding = async (req, res, next) => {
    try {
        const deletedBuilding = await Building.findByIdAndDelete(req.params.buildingId)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedBuilding)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getBuildings,
    createBuilding,
    deleteBuildings,
    getBuilding,
    updateBuilding,
    deleteBuilding
}