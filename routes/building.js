const express = require('express');
const router = express.Router();
const {
    getBuildings,
    createBuilding,
    deleteBuildings
} = require('../controllers/buildingController')

router.route('/')
    .get(getBuildings)
    .post(createBuilding)
    .delete(deleteBuildings)

module.exports = router;