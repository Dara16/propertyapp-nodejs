// For '/building endpoints

const getBuildings = (req, res, next) => {
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

// For 'building/:buildingId
const getBuilding = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the building with building id: ${req.params.buildingId}!` })
}

const updateBuilding = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Updated the building with building id: ${req.params.buildingId}!` })
}

const deleteBuilding = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Deleted the building with building id: ${req.params.buildingId}!` })
}

module.exports = {
    getBuildings,
    createBuilding,
    deleteBuildings,
    getBuilding,
    updateBuilding,
    deleteBuilding
}