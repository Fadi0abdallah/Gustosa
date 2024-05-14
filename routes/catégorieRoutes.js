const express = require('express')
const router = express.Router()
const { findAllCategorie } = require('../controllers/catégorieController')


router
    .route('/')
    .get(findAllCategorie)

module.exports = router