
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Review = sequelize.define('Review', {
        // Define attributes here
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    Review.associate = (models) => {
        Review.belongsTo(models.Recette, { foreignKey: { allowNull: false } });
        Review.belongsTo(models.User, { foreignKey: { allowNull: false } });
    };

    return Review;
};