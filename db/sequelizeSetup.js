
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

const RecetteModel = require('../models/recetteModel');
const UserModel = require('../models/userModel');
const RoleModel = require('../models/roleModel');
const ReviewModel = require('../models/reviewModel');
const CategorieModel = require('../models/carégorieModel');
const IngredientModel = require('../models/ingredientModel');
const RecetteIngredientModel = require('../models/recetteIngredient');

const mockRecettes = require('./recette');
const mockUsers = require('./users');
const mockIngredients = require('./ingredients');
const mockRecetteIngredient = require('./recetteIngredient');
const mockCategorie = require('./catégorie');

const env = process.env.NODE_ENV;
const config = require('../configs/db-config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false
});

const models = {
    Recette: RecetteModel(sequelize, Sequelize.DataTypes),
    User: UserModel(sequelize, Sequelize.DataTypes),
    Role: RoleModel(sequelize, Sequelize.DataTypes),
    Review: ReviewModel(sequelize, Sequelize.DataTypes),
    Categorie: CategorieModel(sequelize, Sequelize.DataTypes),
    Ingredient: IngredientModel(sequelize, Sequelize.DataTypes),
    RecetteIngredient: RecetteIngredientModel(sequelize, Sequelize.DataTypes),
};

// Setup associations
Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

const resetDb = process.env.NODE_ENV === 'development';

sequelize.sync({ force: resetDb })
    .then(async () => {
        try {
            // Insert categories first
            await Promise.all(mockCategorie.map(categorie => models.Categorie.create(categorie)));

            // Insert ingredients
            await Promise.all(mockIngredients.map(ingredient => models.Ingredient.create(ingredient)));

            // Insert roles
            await models.Role.bulkCreate([
                { id: 1, label: 'superadmin' },
                { id: 2, label: 'admin' },
                { id: 3, label: 'user' }
            ]);

            // Insert users
            await Promise.all(mockUsers.map(async user => {
                const hash = await bcrypt.hash(user.password, 10);
                user.password = hash;
                return models.User.create(user);
            }));

            // Insert recettes
            await Promise.all(mockRecettes.map(recette => models.Recette.create(recette)));

            // Insert recette ingredients
            for (const recetteIngredient of mockRecetteIngredient) {
                const { RecetteId, IngredientId } = recetteIngredient;
                const recetteExists = await models.Recette.findByPk(RecetteId);
                const ingredientExists = await models.Ingredient.findByPk(IngredientId);

                if (recetteExists && ingredientExists) {
                    const existingEntry = await models.RecetteIngredient.findOne({
                        where: { RecetteId, IngredientId }
                    });

                    if (!existingEntry) {
                        await models.RecetteIngredient.create(recetteIngredient);
                    } else {
                        console.log(`RecetteIngredient already exists for RecetteId: ${RecetteId}, IngredientId: ${IngredientId}`);
                    }
                } else {
                    console.log(`Recette or Ingredient does not exist for RecetteId: ${RecetteId}, IngredientId: ${IngredientId}`);
                }
            }
        } catch (error) {
            console.error('Error inserting mock data:', error);
        }
    })
    .catch(error => {
        console.error('Error synchronizing the database:', error);
    });

sequelize.authenticate()
    .then(() => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données: ${error}`));

module.exports = { sequelize, ...models };




