const express = require('express')
const { findAllRecettesIngredient, createRecetteIngredient } = require('../controllers/recetteIngredientController')
const { protect } = require('../middlewares/auth')
const router = express.Router()

router
    .route('/')
    .get(findAllRecettesIngredient)
    .post(protect, createRecetteIngredient)

module.exports = router