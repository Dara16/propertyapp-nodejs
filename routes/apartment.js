const express = require('express');
const router = express.Router();
const {
    getApartments,
    createApartment,
    deleteApartments,
    getApartment,
    updateApartment,
    deleteApartment
} = require('../controllers/apartmentController')

// root endpoint
router.route('/')
    .get(getApartments)
    .post(createApartment)
    .delete(deleteApartments)

router.route('/:apartmentId')
    .get(getApartment)
    .put(updateApartment)
    .delete(deleteApartment)

module.exports = router;