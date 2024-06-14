

const express = require('express')
const router = express.Router()
const { protect, restrictToOwnUser, restrictTo } = require('../middlewares/auth')
const { createReview, findAllReviews, findReviewByPk, updateReview, deleteReview, findUserInReviews, findReviewByPkAdmin } = require('../controllers/reviewController')
const { Review } = require('../db/sequelizeSetup')

router
    .route('/')

    .get(findAllReviews)

    .post(protect, createReview)

router
    .route('/admin/reviwes')
    .get(protect, findUserInReviews)

router
    .route('/:RecetteId')

    .get(findReviewByPk)

router
    .route('/admin/:id')

    .get(protect, findReviewByPkAdmin)
router
    .route('/:id')

    .put(protect, restrictToOwnUser(Review), updateReview)

    .delete(protect, restrictToOwnUser(Review), deleteReview)

module.exports = router