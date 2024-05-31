

const express = require('express')
const router = express.Router()
const {
    findAllRecettes,
    createRecette,
    findRecetteByPk,
    updateRecette,
    deleteRecette,
    // findAllRecettesRawSQL,
    // createRecetteWithImg,
    searchRecettes,
    findRecetteByPlat,
    findRecetteByEntree,
    findRecetteByDessert } = require('../controllers/recetteControllers')
const { protect, restrictToOwnUser } = require('../middlewares/auth')
const multer = require('../middlewares/multer-config')
const { Recette } = require('../db/sequelizeSetup')

router
    .route('/')

    .get(findAllRecettes)

    .post(protect, multer, createRecette)

// router
//     .route('/rawSQL')
//     .get(findAllRecettesRawSQL)

// router
//     .route('/withImg')
//     .post(protect, multer, createRecetteWithImg)

router
    .route('/plat')
    .get(findRecetteByPlat)
router
    .route('/dessert')
    .get(findRecetteByDessert)

router
    .route('/entree')
    .get(findRecetteByEntree)

router
    .route('/search')
    .get(searchRecettes)

router
    .route('/:id')

    .get(findRecetteByPk)

    .put(protect, restrictToOwnUser(Recette), updateRecette)

    .delete(protect, restrictToOwnUser(Recette), deleteRecette)

module.exports = router