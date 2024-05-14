const { Catégorie } = require('../db/sequelizeSetup')

const findAllCategorie = async (req, res) => {

    try {
        const results = await Catégorie.findAll()
        res.json({ message: `Il y a ${results.length} catégorie`, data: results })
    } catch (error) {
        errorHandler(error, res)
    }
}
module.exports = {
    findAllCategorie,

}