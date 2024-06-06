

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Recette = sequelize.define(
        'Recette',
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: {
                        msg: "Le nom doit avoir un nombre de caractères compris entre 3 et 50.",
                        args: [3, 50]
                    }
                },
            },
            servings: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            difficulty_level: {
                type: DataTypes.STRING,
                // allowNull: false,
            },
            preparation: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            descriptionProduit: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING,
            },
            tempsTotal: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            onDelete: 'CASCADE',
            // Other model options go here
        }
    );

    Recette.associate = (models) => {
        Recette.belongsTo(models.Categorie, { foreignKey: { allowNull: false } });
        Recette.hasMany(models.RecetteIngredient, { foreignKey: { allowNull: false } });
    };

    return Recette;
};