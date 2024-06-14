
const { Sequelize } = require("sequelize")
const { RecetteIngredient, Recette, Ingredient } = require("../db/sequelizeSetup")
const { errorHandler } = require("../errorHandler/errorHandler")

const createRecetteIngredient = async (req, res) => {
    try {
        req.body.UserId = req.user.id
        const newRecetteIngredient = await RecetteIngredient.create(req.body)
        res.status(201).json({ data: newRecetteIngredient })
    } catch (error) {
        console.log(error);
        errorHandler(error, res)
    }
}

const findAllRecettesIngredient = async (req, res) => {
    // A l'aide de req.query, on ajoute une fonction de recherche de Recette sur critère du nom
    try {
        const results = await RecetteIngredient.findAll()
        res.json({ message: `Il y a ${results.length} recettes`, data: results })
    } catch (error) {
        errorHandler(error, res)
    }
}
const findRecetteIngredientByPk = async (req, res) => {
    try {
        const result = await RecetteIngredient.findByPk(req.params.id);
        if (!result) {
            return res.status(404).json({ message: ` N'existe pas` })
        }
        res.json({ message: 'trouvé', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

const findRecetteIngredientsByRecetteId = async (req, res) => {
    try {
        const recetteId = req.params.recetteId;
        const results = await RecetteIngredient.findAll({
            where: {
                RecetteId: recetteId
            }
        });

        if (results.length === 0) {
            return res.status(404).json({ message: `No RecetteIngredients found for RecetteId ${recetteId}` });
        }

        res.json({ message: 'Found', data: results });
    } catch (error) {
        errorHandler(error, res);
    }
};
const updateRecetteIngredient = async (req, res) => {
    try {
        const { recetteId, ingredientId } = req.params;
        const { quantity, unit } = req.body;

        const recetteIngredient = await RecetteIngredient.findOne({
            where: { RecetteId: recetteId, IngredientId: ingredientId }
        });

        if (!recetteIngredient) {
            return res.status(404).json({ message: `Ingredient for recipe not found` });
        }

        await recetteIngredient.update({ quantity, unit });

        res.status(200).json({ message: 'Ingredient updated', data: recetteIngredient });
    } catch (error) {
        errorHandler(error, res);
    }
};
const findRecetteRandom = async (req, res) => {
    try {
        // Fetch a random RecetteIngredient
        const randomRecetteIngredient = await RecetteIngredient.findOne({
            order: [
                [Sequelize.fn('RAND')]
            ],
            include: [
                {
                    model: Recette,
                    attributes: ['title', 'imageUrl'],
                },
                {
                    model: Ingredient,
                    attributes: ['nom'],
                }
            ]
        });

        if (!randomRecetteIngredient) {
            return res.status(404).json({ message: `Le recette n'existe pas` });
        }

        res.json({ message: 'Recette trouvé', data: randomRecetteIngredient });
    } catch (error) {
        errorHandler(error, res);
    }
};



module.exports = {
    createRecetteIngredient,
    findAllRecettesIngredient,
    findRecetteIngredientByPk,
    findRecetteIngredientsByRecetteId,
    updateRecetteIngredient,
    findRecetteRandom

}