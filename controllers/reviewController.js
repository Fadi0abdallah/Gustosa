const { Review, User, Recette } = require("../db/sequelizeSetup")
const { errorHandler } = require("../errorHandler/errorHandler")

const findAllReviews = async (req, res) => {

    try {
        const results = await Review.findAll()
        res.json({ message: `Il y a ${results.length} Reviews`, data: results })
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
const findUserInReviews = async (req, res) => {
    try {
        const UserId = req.user.id;
        const RecetteId = req.body.RecetteId;

        if (!UserId) {
            return res.status(400).json({ message: 'UserId is required' });
        }

        const results = await Review.findAll({
            where: {
                UserId: UserId,
                ...(RecetteId && { RecetteId: RecetteId }) // Optional RecetteId filter
            },
            include: [
                {
                    model: User,
                    attributes: ['username'] // Only include the username attribute
                },
                {
                    model: Recette,
                    attributes: ['title'] // Only include the title attribute
                }
            ]
        });

        res.json({ message: `Il y a ${results.length} Review(s)`, data: results });
        console.log(results);
    } catch (error) {
        console.log(error);
        errorHandler(error, res);
    }
};
const findReviewByPkAdmin = async (req, res) => {
    try {
        const result = await Review.findByPk(req.params.id)
        if (!result) {
            return res.json({ message: 'Review non trouvé' })
        }
        res.json({ data: result })
    } catch (error) {
        console.log(error);
        errorHandler(error, res)
    }

}



const createReview = async (req, res) => {
    try {
        req.body.UserId = req.user.id;

        const newReview = await Review.create(req.body);
        res.status(201).json({ message: `Un avis a bien été ajouté`, data: newReview });
    } catch (error) {
        console.log(error);
        errorHandler(error, res);
    }
};

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

module.exports = { findUserInReviews, findAllReviews, findReviewByPk, createReview, updateReview, deleteReview, findReviewByPkAdmin }