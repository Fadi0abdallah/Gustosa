const express = require('express')
const { findAllIngredients, createIngredient, updateIngredient, deleteIngredient, } = require('../controllers/ingredientControlers')
const { protect } = require('../middlewares/auth')
const { searchRecettes } = require('../controllers/recetteControllers')
const router = express.Router()

router
    .route('/')
    .get(findAllIngredients)
    .post(protect, createIngredient)

router
    .route("/search")
    .get(searchRecettes)

router
    .route("/:id")

    .put(updateIngredient)
    .delete(deleteIngredient)

module.exports = router