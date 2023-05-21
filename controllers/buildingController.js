// For '/building endpoints

const getBuildings = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Show me all the buildings!' })
}

const createBuilding = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created apartment with number: ${req.body.buildingName}` })
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