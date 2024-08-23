const express = require('express');
const router = express.Router();
const plantasController = require('../controllers/plantasController');

router.get('/', plantasController.getAllPlantas);
router.post('/', plantasController.createPlanta);
router.get('/:id', plantasController.getPlantaById);
router.put('/:id', plantasController.updatePlanta);
router.delete('/:id', plantasController.deletePlanta);

module.exports = router;
