const { Review, User } = require("../db/sequelizeSetup")
const { errorHandler } = require("../errorHandler/errorHandler")

const findAllReviews = async (req, res) => {

    try {
        const results = await Review.findAll()
        res.json({ message: `Il y a ${results.length} Review`, data: results })
    } catch (error) {
        errorHandler(error, res)
    }
}

const findReviewByPk = async (req, res) => {
    try {
        const RecetteId = req.params.RecetteId;  // Use req.params  pour obtenir le RecetteId à partir des paramètres de l'URL

        // Trouver tous les commentaires de RecetteId
        const results = await Review.findAll({
            where: { RecetteId: RecetteId },
            include: [
                {
                    model: User,
                    attributes: ['username']  // Only include the username attribute
                }
            ]  // Récupérer tous les avis pour lesquels l'identifiant RecetteId correspond
        });

        if (!results || results.length === 0) {
            return res.status(404).json({ message: 'Reviews not found' });
        }

        return res.status(200).json(results);

    } catch (error) {
        console.error(error);
        errorHandler(error, res)
    }
};

const createReview = async (req, res) => {
    try {
        req.body.UserId = req.user.id
        const newReview = await Review.create(req.body)
        res.status(201).json({ message: `Un avis a bien été ajouté`, data: newReview })
    } catch (error) {
        errorHandler(error, res)
    }
}

const updateReview = async (req, res) => {
    try {
        const result = await Review.findByPk(req.params.id);
        if (!result) {
            return res.status(404).json({ message: `L'avis n'existe pas` })
        }
        await result.update(req.body)
        res.status(201).json({ message: 'Review modifié', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

const deleteReview = async (req, res) => {
    try {
        const result = await Review.findByPk(req.params.id);
        if (!result) {
            return res.status(404).json({ message: `L'avis n'existe pas` })
        }
        result.destroy()
        res.status(200).json({ message: 'Review supprimé', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = { findAllReviews, findReviewByPk, createReview, updateReview, deleteReview }