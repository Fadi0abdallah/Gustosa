// CONFIG DB
const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt')
const RecetteModel = require('../models/recetteModel')
const UserModel = require('../models/userModel')
const RoleModel = require('../models/roleModel')
const mockRecettes = require('./recette');
const mockUsers = require('./users');
const reviewModel = require('../models/reviewModel');
const CategorieModel = require('../models/carégorieModel')
const IngredientsModel = require("../models/ingredientModel")
const mockIngredients = require("./ingredients")
const RecetteIngredientModel = require("../models/recetteIngredient")
const mockRecetteIngredient = require("./recetteIngredient")
const mockCategorie = require("./catégorie")
const env = process.env.NODE_ENV;
const config = require('../configs/db-config.json')[env];


// Option: Passing parameters separately (other dialects)

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false
});

const Recette = RecetteModel(sequelize);
const User = UserModel(sequelize);
const Role = RoleModel(sequelize);
const Review = reviewModel(sequelize);
const Categorie = CategorieModel(sequelize);
const Ingredients = IngredientsModel(sequelize);
const RecetteIngredient = RecetteIngredientModel(sequelize)

// Par défaut, tous les utilisateurs créés sont "user"
Role.hasMany(User, {
    foreignKey: {
        defaultValue: 3,
    },
});
User.belongsTo(Role);

User.hasMany(Recette)
Recette.belongsTo(User)

Recette.hasMany(Review, {
    foreignKey: {
        allowNull: false,
    },
})
Review.belongsTo(Recette)

User.hasMany(Review, {
    foreignKey: {
        allowNull: false,
    },
})
Review.belongsTo(User)

Categorie.hasMany(Recette, {
    foreignKey: {
        allowNull: false,
    },
})
Recette.belongsTo(Categorie)

Recette.hasMany(RecetteIngredient)
RecetteIngredient.belongsTo(Recette)

Ingredients.hasMany(RecetteIngredient)
RecetteIngredient.belongsTo(Ingredients)


const resetDb = process.env.NODE_ENV === "development"

sequelize.sync({ force: resetDb })
    .then(() => {
        mockRecettes.forEach(recette => {
            Recette.create(recette)
                .then()
                .catch(error => {
                    console.log(error)
                })
        })

        mockIngredients.forEach(ingredients => {
            Ingredients.create(ingredients)
                .then()
                .catch(error => {
                    console.log(error)
                })
        })

        Role.create({ id: 1, label: "superadmin" })
        Role.create({ id: 2, label: "admin" })
        Role.create({ id: 3, label: "user" })

        mockCategorie.forEach(categorie => {
            Categorie.create(categorie)
                .then()
                .catch(error => {
                    console.log(error)
                })
        })

        mockRecetteIngredient.forEach(recetteIngredient => {
            RecetteIngredient.create(recetteIngredient)
                .then()
                .catch(error => {
                    console.log(error)
                })
        })

        // Categorie.create({ id: 1, name: "entrées" })
        // Categorie.create({ id: 2, name: "plats" })
        // Categorie.create({ id: 3, name: "desserts" })

        mockUsers.forEach(async user => {
            const hash = await bcrypt.hash(user.password, 10)
            user.password = hash
            User.create(user)
                .then()
                .catch(error => {
                    console.log(error)
                })
        })
    })
    .catch((error) => {
        console.log(error)
    })


sequelize.authenticate()
    .then(() => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))

module.exports = { sequelize, Recette, User, Role, Review, Ingredients, Categorie, RecetteIngredient }