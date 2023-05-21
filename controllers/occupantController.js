// For '/occupant endpoints

const getOccupants = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the occupants!' })
}

const createOccupant = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created occupant with name: ${req.body.occupantName} and gender: ${req.body.gender}` })
}

const deleteOccupants = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all the occupants!' })
}

module.exports = {
    getOccupants,
    createOccupant,
    deleteOccupants
}