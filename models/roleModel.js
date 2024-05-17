
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Role = sequelize.define('Role', {
        // Define attributes here
        label: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            updatedAt: false,
            createdAt: false,
        }
    );

    Role.associate = (models) => {
        Role.hasMany(models.User, { foreignKey: { allowNull: false, defaultValue: 3 } });
    };

    return Role;
};
