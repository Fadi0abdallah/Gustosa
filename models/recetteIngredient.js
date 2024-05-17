

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const RecetteIngredient = sequelize.define('RecetteIngredient', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    RecetteIngredient.associate = (models) => {
        RecetteIngredient.belongsTo(models.Recette, { foreignKey: { allowNull: false } });
        RecetteIngredient.belongsTo(models.Ingredient, { foreignKey: { allowNull: false } });
    };

    return RecetteIngredient;
};
