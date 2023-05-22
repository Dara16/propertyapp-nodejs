// For '/occupant endpoints

const getOccupants = (req, res, next) => {
    // query parameter
    if (Object.keys(req.query).length) {
        const {
            name,
            gender,
            apartment,
            leaseEnd,
            email,
            phoneNumber
        } = req.query

        const filter = []

        if (name) filter.push(name)
        if (gender) filter.push(gender)
        if (apartment) filter.push(apartment)
        if (leaseEnd) filter.push(leaseEnd)
        if (email) filter.push(email)
        if (phoneNumber) filter.push(phoneNumber)

        for (const query of filter) {
            console.log(`Searching by ${query}`)
        }
    }

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

// For occupant/:occupantId
const getOccupant = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the occupant with occupant id: ${req.params.occupantId}!` })
}

const updateOccupant = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Update the occupant with occupant id: ${req.params.occupantId}!` })
}

const deleteOccupant = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Delete the occupant with occupant id: ${req.params.occupantId}!` })
}

module.exports = {
    getOccupants,
    createOccupant,
    deleteOccupants,
    getOccupant,
    updateOccupant,
    deleteOccupant
}