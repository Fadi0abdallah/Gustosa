const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Ingredients',

        {
            nom: {
                type: DataTypes.STRING,
            },

        }
    )
}

