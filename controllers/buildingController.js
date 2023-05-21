// For '/building endpoints

const getBuildings = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the buildings!' })
}

const createBuilding = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created building with name: ${req.body.buildingName} and address: ${req.body.address}` })
}

const deleteBuildings = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all the buildings!' })
}

module.exports = {
    getBuildings,
    createBuilding,
    deleteBuildings
}