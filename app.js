const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path');

const app = express()
const port = process.env.PORT || 5000
require("./db/sequelizeSetup")

const corsOptions = {
    credentials: true,
};

app
    .use(cors(corsOptions))
    .use(express.json())
    .use(cookieParser())

if (process.env.NODE_ENV === "development") {
    const morgan = require('morgan')
    app.use(morgan('dev'))
}

const recetteRouter = require('./routes/recetteRoutes')
const userRouter = require('./routes/userRoutes')
const reviewRouter = require('./routes/reviewRoutes')
const categorieRoutes = require('./routes/catégorieRoutes')
const ingredientRoutes = require('./routes/ingredientRoutes')
const recetteIngredient = require('./routes/recetteIngredientRoutes')

app.get('/', (req, res) => {
    res.json({ message: 'Homepage' })
})

app.use('/api/recettes', recetteRouter)
app.use('/api/users', userRouter)
app.use('/api/review', reviewRouter)
app.use('/api/categorie', categorieRoutes)
app.use('/api/ingredient', ingredientRoutes)
app.use('/api/recetteingredient', recetteIngredient)

// route de fichiers static
app.use('/images', express.static(path.join(__dirname, 'images')));

// const swagger = require('./configs/swagger')
// swagger(app)

app.get('*', (req, res) => {
    res.status(404).json({ message: "Page not found" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})