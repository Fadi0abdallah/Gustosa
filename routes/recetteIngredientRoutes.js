const express = require('express')
const { findAllRecettesIngredient, createRecetteIngredient, findRecetteIngredientsByRecetteId, updateRecetteIngredient, findRecetteRandom, deleteRecetteIngredient } = require('../controllers/recetteIngredientController')
const { protect } = require('../middlewares/auth')
const router = express.Router()

router
    .route('/')
    .get(findAllRecettesIngredient)
    .post(protect, createRecetteIngredient)
router
    .route('/random')
    .get(findRecetteRandom)

router
    .route('/by-recette/:recetteId')
    .get(findRecetteIngredientsByRecetteId);

router
    .route('/recetteingredient/:recetteId/:ingredientId')
    .put(protect, updateRecetteIngredient);

router
    .route('/:id')
    .delete(deleteRecetteIngredient)

module.exports = router