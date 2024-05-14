const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Categorie',

        {
            name: {
                type: DataTypes.STRING,
            }
        }
    )
}