const User = require('../models/User')

// For '/user endpoints
const getUsers = async (req, res, next) => {
    // query parameter
    if (Object.keys(req.query).length) {
        const {
            firstName,
            lastName,
            gender,
            apartment,
            leaseEnd,
            email,
            phone
        } = req.query

        const filter = []

        if (firstName) filter.push(firstName)
        if (lastName) filter.push(lastName)
        if (gender) filter.push(gender)
        if (apartment) filter.push(apartment)
        if (leaseEnd) filter.push(leaseEnd)
        if (email) filter.push(email)
        if (phone) filter.push(phone)

        for (const query of filter) {
            console.log(`Searching by ${query}`)
        }
    }

    try {
       const users = await User.find()
       
       res
       .status(200)
       .setHeader('Content-Type', 'application/json')
       .json(users)
    } catch (err) {
        next(err)
    }

}

const createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        
        res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json(newUser)
    } catch (err) {
        next(err)
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        const deletedUser = await User.deleteMany() 
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(deletedUser)
    } catch (err) {
        next(err)
    }
}

// For User/:UserId
const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(user)
    } catch (err) {
        next(err)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(updatedUser)
    } catch (err) {
        next(err)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId)
        
        res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ message: `Deleted user with username: ${deletedUser.userName}` })
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getUsers,
    createUser,
    deleteUsers,
    getUser,
    updateUser,
    deleteUser
}