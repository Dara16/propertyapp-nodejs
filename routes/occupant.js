const express = require('express');
const router = express.Router();
const {
    getOccupants,
    createOccupant,
    deleteOccupants
} = require('../controllers/occupantController')

router.route('/')
    .get(getOccupants)
    .post(createOccupant)
    .delete(deleteOccupants)

module.exports = router;