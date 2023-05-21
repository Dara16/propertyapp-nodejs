// For '/apartment endpoints

const getApartments = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the apartments!' })
} 

const createApartment = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created apartment with number: ${req.body.apartmentNumber}` })
}

const deleteApartments = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all the apartments!' })
}

// For 'apartment/:apartmentId'
const getApartment = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the apartment with apartment id: ${req.params.apartmentId}!` })
}

const updateApartment = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Update the apartment with apartment id: ${req.params.apartmentId}!` })
}

const deleteApartment = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Delete the apartment with apartment id: ${req.params.apartmentId}!` })
}

module.exports = {
    getApartments,
    createApartment,
    deleteApartments,
    getApartment,
    updateApartment,
    deleteApartment
}