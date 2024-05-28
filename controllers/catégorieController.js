const { Categorie } = require('../db/sequelizeSetup')
const { errorHandler } = require('../errorHandler/errorHandler')

const findAllCategorie = async (req, res) => {

    try {
        const results = await Categorie.findAll()
        res.json({ message: `Il y a ${results.length} catégorie`, data: results })
    } catch (error) {
        errorHandler(error, res)
    }
}
module.exports = {
    findAllCategorie,

}