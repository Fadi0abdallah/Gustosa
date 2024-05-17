
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Categorie = sequelize.define('Categorie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Categorie.associate = (models) => {
        Categorie.hasMany(models.Recette, { foreignKey: { allowNull: false } });
    };

    return Categorie;
};