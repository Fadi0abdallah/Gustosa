
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Ingredient = sequelize.define('Ingredient', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Ingredient.associate = (models) => {
        Ingredient.hasMany(models.RecetteIngredient, { foreignKey: { allowNull: false } });
    };

    return Ingredient;
};

