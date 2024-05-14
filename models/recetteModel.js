const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define(
        'Recette',
        {
            // Model attributes are defined here
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
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
            tempsTotal: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            diffculty_level: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            perparation: {
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
        },
        {
            onDelete: 'CASCADE'
            // Other model options go here
        },
    );
}
