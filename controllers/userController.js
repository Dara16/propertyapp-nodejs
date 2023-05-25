// For '/user endpoints

const getUsers = (req, res, next) => {
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
    .json({ message: 'Show me all the users!' })
}

const createUser = (req, res, next) => {
    res
    .status(201)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Created user with name: ${req.body.userName} and gender: ${req.body.gender}` })
}

const deleteUsers = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: 'Deleting all the users!' })
}

// For User/:UserId
const getUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Show me the user with user id: ${req.params.userId}!` })
}

const updateUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Update the user with user id: ${req.params.userId}!` })
}

const deleteUser = (req, res, next) => {
    res
    .status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ message: `Delete the user with user id: ${req.params.userId}!` })
}

module.exports = {
    getUsers,
    createUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
}