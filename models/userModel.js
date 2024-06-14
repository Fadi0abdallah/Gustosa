
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define(
        'User',
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: {
                        msg: "Le nom d'utilisateur doit avoir un nombre de caractères compris entre 3 et 20.",
                        args: [3, 20]
                    }
                },
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING
            },
        },
        {
            onDelete: 'CASCADE',
            defaultScope: {
                attributes: { exclude: ['password'] }
            },
            scopes: {
                withPassword: {
                    attributes: {}
                }
            },
            hooks: {
                afterCreate: (record) => {
                    delete record.dataValues.password;
                },
                afterUpdate: (record) => {
                    delete record.dataValues.password;
                },
            }
        },
    );

    // Define associations
    User.associate = (models) => {
        User.belongsTo(models.Role, { foreignKey: { allowNull: false } });
        User.hasMany(models.Recette, { foreignKey: { allowNull: false } });
        User.hasMany(models.Review, { foreignKey: { allowNull: false } });
    };

    return User;
};
