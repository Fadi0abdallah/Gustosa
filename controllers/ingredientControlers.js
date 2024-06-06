const { Ingredient } = require('../db/sequelizeSetup')
const { errorHandler } = require('../errorHandler/errorHandler')

const findAllIngredients = async (req, res) => {
    // A l'aide de req.query, on ajoute une fonction de recherche de Recette sur critère du nom
    try {
        const results = await Ingredient.findAll()
        res.json({ message: `Il y a ${results.length} ingrédients`, data: results })
    } catch (error) {
        console.log(error);
        errorHandler(error, res)
    }
}
const createIngredient = async (req, res) => {
    try {
        req.body.UserId = req.user.id
        const newIngredient = await Ingredient.create(req.body)
        res.status(201).json({ message: `Un ingrédient a bien été ajouté`, data: newIngredient })
    } catch (error) {
        errorHandler(error, res)
    }
}
const updateIngredient = async (req, res) => {
    try {
        const result = await Ingredient.findByPk(req.params.id);
        if (!result) {
            return res.status(404).json({ message: `Le ingrédient n'existe pas` })
        }
        await result.update(req.body)
        res.status(201).json({ message: 'ingrédient modifié', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}
const deleteIngredient = async (req, res) => {
    try {
        const result = await Ingredient.findByPk(req.params.id);
        if (!result) {
            return res.status(404).json({ message: `Le ingrédient n'existe pas` })
        }
        result.destroy()
        res.status(200).json({ message: 'ingrédient supprimé', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}
const searchIngredient = async (req, res) => {
    // A l'aide de req.query, on ajoute une fonction de recherche de Ingredient sur critère du nom
    try {
        const results = await Ingredient.findAll(
            {
                where:
                    { nom: { [Op.like]: `%${req.query.nom}%` } }
            }
        )
        res.json({ message: `Il y a ${results.length} Ingredient`, data: results })

    } catch (error) {
        errorHandler(error, res)
    }
}


module.exports = {
    findAllIngredients,
    createIngredient,
    updateIngredient,
    deleteIngredient,
    searchIngredient

}