// const { Op, QueryTypes } = require('sequelize')
const { Recette, sequelize, Categorie } = require('../db/sequelizeSetup')
const { errorHandler } = require('../errorHandler/errorHandler')

const findAllRecettes = async (req, res) => {
    // A l'aide de req.query, on ajoute une fonction de recherche de Recette sur critère du nom
    try {
        const results = await Recette.findAll()
        res.json({ message: `Il y a ${results.length} recettes`, data: results })
    } catch (error) {
        errorHandler(error, res)
    }
}

// On utilise la méthode sequelize.query() pour écrire une requête SQL en dur, SELECT name, rating FROM Recette

// const findAllRecettesRawSQL = async (req, res) => {
//     try {
//         const result = await sequelize.query("SELECT name, rating FROM recettes LEFT JOIN reviews ON recettes.id = reviews.RecetteId", {
//             type: QueryTypes.SELECT,
//         })
//         res.json({ data: result })
//     } catch (error) {
//         errorHandler(error, res)
//     }
// }

const searchRecettes = async (req, res) => {
    // A l'aide de req.query, on ajoute une fonction de recherche de Recette sur critère du nom
    try {
        const results = await Recette.findAll(
            {
                where:
                    { name: { [Op.like]: `%${req.query.name}%` } }
            }
        )
        res.json({ message: `Il y a ${results.length} recettes`, data: results })

    } catch (error) {
        errorHandler(error, res)
    }
}

const findRecetteByPk = async (req, res) => {
    try {
        const result = await Recette.findByPk(req.params.id);
        if (!result) {
            return res.status(404).json({ message: `Le recette n'existe pas` })
        }
        res.json({ message: 'Recette trouvé', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}
const findRecetteByPlat = async (req, res) => {
    try {
        const result = await Recette.findAll({
            where: { CategorieId: 2 },
            include: [
                {
                    model: Categorie,
                    attributes: ['name']  // Only include the username attribute
                }
            ]  // Récupérer tous les avis pour lesquels l'identifiant RecetteId correspon
        });
        if (!result) {
            return res.status(404).json({ message: `Le recette n'existe pas` })
        }
        res.json({ message: 'Recette trouvé', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}
const findRecetteByDessert = async (req, res) => {
    try {
        const result = await Recette.findAll({
            where: { CategorieId: 3 },
            include: [
                {
                    model: Categorie,
                    attributes: ['name']  // Only include the username attribute
                }
            ]  // Récupérer tous les avis pour lesquels l'identifiant RecetteId correspon
        });
        if (!result) {
            return res.status(404).json({ message: `Le recette n'existe pas` })
        }
        res.json({ message: 'Recette trouvé', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}
const findRecetteByEntree = async (req, res) => {
    try {
        const result = await Recette.findAll({
            where: { CategorieId: 1 },
            include: [
                {
                    model: Categorie,
                    attributes: ['name']  // Only include the username attribute
                }
            ]  // Récupérer tous les avis pour lesquels l'identifiant RecetteId correspon
        });
        if (!result) {
            return res.status(404).json({ message: `Le recette n'existe pas` })
        }
        res.json({ message: 'Recette trouvé', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

const createRecette = async (req, res) => {


    try {
        req.body.UserId = req.user.id
        req.body.imageUrl = `${req.protocol}://${req.get('host')}/image/${req.file.filename}`
        const newRecette = await Recette.create(req.body)
        res.status(201).json({ message: `Un recette a bien été ajouté`, data: newRecette })
    } catch (error) {
        errorHandler(error, res)
    }
}

// const createRecetteWithImg = async (req, res) => {
//     console.log(req.protocol, req.get('host'), req.file.filename)
//     try {
//         req.body.UserId = req.user.id
//         req.body.imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//         const newRecette = await Recette.create(req.body)
//         res.status(201).json({ message: `Un recette a bien été ajouté`, data: newRecette })
//     } catch (error) {
//         errorHandler(error, res)
//     }
// }

const updateRecette = async (req, res) => {
    try {
        const result = await Recette.findByPk(req.params.id);
        if (!result) {
            return res.status(404).json({ message: `Le recette n'existe pas` })
        }
        await result.update(req.body)
        res.status(201).json({ message: 'Recette modifié', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

const deleteRecette = async (req, res) => {
    try {
        const result = await Recette.findByPk(req.params.id);
        if (!result) {
            return res.status(404).json({ message: `Le recette n'existe pas` })
        }
        result.destroy()
        res.status(200).json({ message: 'Recette supprimé', data: result })
    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    findAllRecettes,
    createRecette,
    // createRecetteWithImg,
    findRecetteByPk,
    updateRecette,
    deleteRecette,
    searchRecettes,
    // findAllRecettesRawSQL,
    findRecetteByPlat,
    findRecetteByEntree,
    findRecetteByDessert,
}