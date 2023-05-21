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

module.exports = {
    getApartments,
    createApartment,
    deleteApartments
}