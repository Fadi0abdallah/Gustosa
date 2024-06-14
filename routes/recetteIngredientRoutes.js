const express = require('express')
const { findAllRecettesIngredient, createRecetteIngredient, findRecetteIngredientsByRecetteId, updateRecetteIngredient, findRecetteRandom } = require('../controllers/recetteIngredientController')
const { protect } = require('../middlewares/auth')
const router = express.Router()

router
    .route('/')
    .get(findAllRecettesIngredient)
    .post(protect, createRecetteIngredient)
router
    .route('/random')
    .get(findRecetteRandom)
// router
//     .route('/:id')
//     .get(findRecetteIngredientByPk)

// New route to get all RecetteIngredients by RecetteId
router
    .route('/by-recette/:recetteId')
    .get(findRecetteIngredientsByRecetteId);

router
    .route('/recetteingredient/:recetteId/:ingredientId')
    .put(protect, updateRecetteIngredient);



module.exports = router