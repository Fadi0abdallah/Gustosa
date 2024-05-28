const { RecetteIngredient } = require("../db/sequelizeSetup")
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


module.exports = {
    createRecetteIngredient,
    findAllRecettesIngredient,
    findRecetteIngredientByPk,
    findRecetteIngredientsByRecetteId
}