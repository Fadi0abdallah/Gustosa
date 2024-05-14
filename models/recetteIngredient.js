const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'RecetteIngredient',

        {
            quantity: {
                type: DataTypes.STRING,
            },
            unit: {
                type: DataTypes.STRING,

            }
        }
    )
}