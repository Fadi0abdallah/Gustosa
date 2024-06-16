###
Bienvenue dans le backend de Gustoso, une application conçue pour améliorer l'expérience culinaire des utilisateurs. Gustoso offre une plateforme où les utilisateurs peuvent explorer des recettes, gérer leurs ingrédients, et bien plus encore. Ce backend est construit en utilisant [votre stack technologique], assurant une performance et une scalabilité optimales.
###
Installation
Clonez le repository :

 git clone  https://github.com/Fadi0abdallah/Gustosa

 Installez les dépendances :
 npm install

 Utilisation
Démarrez le serveur : npm run dev

Accédez à l'application :
Ouvrez votre navigateur et allez sur http://localhost:5000

Endpoints de l'API

Recettes

GET /api/recipes : Récupère la liste des recettes
POST /api/recipes : Crée une nouvelle recette
GET /api/recipes/
: Récupère une recette par ID
PUT /api/recipes/
: Met à jour une recette par ID
DELETE /api/recipes/
: Supprime une recette par ID

Ingrédients

GET /api/ingredients : Récupère la liste des ingrédients
POST /api/ingredients : Crée un nouvel ingrédient
GET /api/ingredients/
: Récupère un ingrédient par ID
PUT /api/ingredients/
: Met à jour un ingrédient par ID
DELETE /api/ingredients/
: Supprime un ingrédient par ID

Utilisateurs

GET /api/users : Récupère la liste des utilisateurs
POST /api/users : Crée un nouvel utilisateur
DELETE /api/users/: Supprime un utilisateur par ID