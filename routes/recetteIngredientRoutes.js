const express = require('express')
const { findAllRecettesIngredient, createRecetteIngredient, findRecetteIngredientsByRecetteId } = require('../controllers/recetteIngredientController')
const { protect } = require('../middlewares/auth')
const router = express.Router()

router
    .route('/')
    .get(findAllRecettesIngredient)
    .post(protect, createRecetteIngredient)

// router
//     .route('/:id')
//     .get(findRecetteIngredientByPk)

// New route to get all RecetteIngredients by RecetteId
router
    .route('/by-recette/:recetteId')
    .get(findRecetteIngredientsByRecetteId);

module.exports = router