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
module.exports = {
    createRecetteIngredient,
    findAllRecettesIngredient,

}