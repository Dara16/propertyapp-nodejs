const express = require('express');
const router = express.Router();
const {
    getApartments,
    createApartment,
    deleteApartments
} = require('../controllers/apartmentController')

// root endpoint
router.route('/')
    .get(getApartments)
    .post(createApartment)
    .delete(deleteApartments)

module.exports = router;