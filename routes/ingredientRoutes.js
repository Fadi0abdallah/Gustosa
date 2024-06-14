const express = require('express')
const { findAllIngredients, createIngredient, updateIngredient, deleteIngredient, searchIngredient, } = require('../controllers/ingredientControlers')
const { protect } = require('../middlewares/auth')

const router = express.Router()

router
    .route('/')
    .get(findAllIngredients)
    .post(protect, createIngredient)

router
    .route("/search")
    .get(searchIngredient)

router
    .route("/:id")

    .put(updateIngredient)
    .delete(deleteIngredient)

module.exports = router