const express = require('express');
const router = express.Router();
const {
    getOccupants,
    createOccupant,
    deleteOccupants,
    getOccupant,
    updateOccupant,
    deleteOccupant
} = require('../controllers/occupantController')

router.route('/')
    .get(getOccupants)
    .post(createOccupant)
    .delete(deleteOccupants)

router.route('/:occupantId')
    .get(getOccupant)
    .put(updateOccupant)
    .delete(deleteOccupant)

module.exports = router;