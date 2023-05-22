const express = require('express');
const router = express.Router();
const {
    getBuildings,
    createBuilding,
    deleteBuildings,
    getBuilding,
    updateBuilding,
    deleteBuilding
} = require('../controllers/buildingController')

router.route('/')
    .get(getBuildings)
    .post(createBuilding)
    .delete(deleteBuildings)

router.route('/:buildingId')
    .get(getBuilding)
    .put(updateBuilding)
    .delete(deleteBuilding)

module.exports = router;