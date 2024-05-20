const recettes = [
    {
        id: 1,
        title: "MOZZARELLA IN CARROZZA",
        servings: "4 per",
        tempsTotal: "10 min",
        difficulty_level: "facile",
        preparation: `Coupez la mozzarella en 4 tranches. Faites 4 petits sandwichs en disposant entre deux tranches de pain de mie la mozzarella, du basilic, les anchois grossièrement coupés et une pincée de poivre. Appuyez pour bien sceller. Attention à ce que rien ne dépasse du pain de mie.
        Passez le sandwich successivement dans la farine, les œufs battus et la chapelure. plongez les dans l'huile  à 180°C (testez en jetant un peu de chapelure . il faut que ça fasse des petites bulles)
        pendant 2 à 3 minutes le temps que les crocchette deviennent dorées . Egouttez sur du papier absorbant`,

        descriptionProduit: `Classique de la street Food en version napolitaine, un sandwich frit au cœur coulant de mozzarella à décliner avec vos saveurs préférées. Ici, on a choisi le basilic et l'anchois. Mais vous pouvez l'imaginer avec des tranches de jambon de Parme ou des tranches d'aubergine grillée. Ce n'est peut-être pas léger , mais c'est tellement gourmand que personne ne vous le reprochera.`,

        imageUrl: "https://www.sanpellegrino.com/fr/sites/g/files/xknfdk2146/files/Mozzarella%252520in%252520carrozza_15.jpg",
        CategorieId: 1,
        UserId: 1
    },
    {
        id: 2,
        title: "FICO E STRACCIATELLA ",
        servings: "4 per",
        tempsTotal: "10 min",
        difficulty_level: "facile",
        preparation: ` Faites griller les amandes dans une poêle chaude à sec. Pour la vinaigrette, mélangez le miel et le vinaigre balsamique. Salez et poivrez. Ajoutez de l'huile d'olive en mélangeant pour créer une émulsion. Lavez les pousses de salade. Épluchez les fèves (il faut enlever la petite peau qui les recouvre). Coupez les figues en quartiers. Dans les assiettes, dressez la salade avec les fèves, les amandes et les figues, déposez la stracciatella au centre et arrosez de vinaigrette. Parsemez du piment d'Espelette.`,

        descriptionProduit: `a stracciatella est le mélange du cœur de la burrata avec de la crème. À déguster à la petite cuillère. 
        `,

        imageUrl: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Salade-de-figues-et-pousses-d%E2%80%99%C3%A9pinard.jpg",
        CategorieId: 1,
        UserId: 1
    },
    {
        id: 3,
        title: "FRESH CAESAR SALAD",
        servings: "4 per",
        tempsTotal: "20 min",
        difficulty_level: "facile",
        preparation: `Prélevez le zeste et le jus des agrumes. Réservez quelques zestes pour le dressage. Faites mariner les aiguillettes de poulet dans le jus et les zestes pendant 1 heure au minimum au réfrigérateur en les recouvrant d'un film alimentaire. Faites-les griller avec un peu d'huile d'olive pendant 5 minutes environ, afin qu'elles soient bien colorées. Déposez les tranches de jambon de Parme sur une plaque tapissée de papier sulfurisé et faites-les cuire au four sans ajout de matière grasse pendant 10 minutes à 230°C. Faites toaster les amandes au four pendant 13 minutes à 150°C.
        Mélangez les ingrédients de la sauce et mixez-les. Goûtez et rectifiez l'assaisonnement. Disposez la sucrine et les tomates coupées en quartiers, les radis émincés (à la mandoline, si possible), les aiguillettes de poulet et le jambon de Parme. Ajoutez les amandes, le basilic, des copeaux de parmesan et des morceaux de pain carasau. Arrosez de sauce et servez ! 
       `,

        descriptionProduit: `L'anchois, c'est cet ingrédient magique : sur le menu, personne ne l'aime, mais dans une vinaigrette ou une sauce, tout le monde l'adore.`,

        imageUrl: "https://www.galbani.fr/wp-content/uploads/2020/04/AdobeStock_157570276-2.jpeg",
        CategorieId: 1,
        UserId: 1
    },
    {
        id: 4,
        title: "POMODORI E MOZZARELLA",
        servings: "4 per",
        tempsTotal: "10 min",
        difficulty_level: "facile",
        preparation: `Découpez les tomates fraîches en deux, puis mélangez- les avec les tomates séchées et les tomates confites puis assaisonnez-les généreusement. Dressez dans les assiettes en ajoutant les billes de mozzarella, le basilic juste déchiré, de la fleur de sel, du poivre concassé et autant d'huile que vous voudrez ! `,

        descriptionProduit: `Salade estivale par excellence, tellement bonne qu'on voudrait en consommer toute l'année. Mais si vous n'avez pas de tomates à tomber par terre, passez votre chemin. Rien de révolutionnaire dans cette recette, mais avec un mélange de tomates séchées, oranges et Datterino, ainsi qu'avec de vrais bons bocconcini, vous devriez vous approcher d'une salade caprese digne d'un palais italien`,

        imageUrl: "https://blog.giallozafferano.it/ricettandocondany/wp-content/uploads/2021/08/14_08_2017_1773ott.jpg",
        CategorieId: 1,
        UserId: 1
    },
    {
        id: 5,
        title: "GNOCCHI ALLA SORRENTINA",
        servings: "4 per",
        tempsTotal: "20 min",
        difficulty_level: "facile",
        preparation: `Confectionnez les gnocchi. Pour cela, suivez la méthode de Carmine à la page 220 en omettant l'étape avec les épinards, puisque ces gnocchi ne sont pas
        verts.
        Préparez la sauce tomate comme on l'a fait page 428. Versez quelques cuillerées d'huile d'olive dans une casserole à fond épais et ajoutez des feuilles de basilic. Ajoutez la sauce tomate et faites-la chauffer doucement.
        Faites cuire les gnocchi dans un grand volume d'eau salée. Ils sont cuits dès qu'ils remontent à la surface. Égouttez-les brièvement. Mélangez-les à la sauce en ajoutant une première poignée de parmesan. Sortez du feu. Ajoutez la provola coupée en morceaux. Prenez un plat à gratin passant au four. Versez les gnocchi et parsemez le parmesan restant. Faites gratiner au four préchauffé à 190°C pendant 20 minutes environ. Ajoutez des feuilles de basilic pour présenter.
        
        LA PETITE HISTOIRE
        Pour servir cette recette dans nos restos, on a fait un grand concours avec tous les cuistots. Spéciale dédicace à Carmine donc, et à sa nonna!
        224 PÅTES
         `,

        descriptionProduit: `La provola affumicata est, pour le dire vite, une mozzarella (au lait de vache) fumée. Elle a en fait une consistance plus dense et peut se conserver un peu plus longtemps que la mozzarella. «Affumicata, car elle est fumée pendant quelques minutes sur de la paille humide brûlée, ce qui lui donne son goût si caractéristique qui accompagne à merveille ces gnocchi à la sauce tomate.`,

        imageUrl: "https://cdn.pixabay.com/photo/2020/07/02/22/25/gnocchi-5364564_1280.jpg",
        CategorieId: 2,
        UserId: 1
    },
    {
        id: 6,
        title: "LASAGNE ALLA BOLOGNESE",
        servings: "4 per",
        tempsTotal: "30 min ",
        difficulty_level: "moyen",
        preparation: `Épluchez et taillez en morceaux réguliers de 3 cm les carottes, les oignons et le céleri. Faites revenir le tout avec de l'huile dans une cocotte. Ajoutez le bouquet garni puis les viandes hachées et faites revenir 10 minutes en mélangeant avec un fouet et en écrasant les morceaux. Ajoutez le vin et laissez revenir 15 minutes. Ajoutez le concentré de tomates et les tomates pelées puis écrasez-les grossièrement. Couvrez et laissez mijoter 2 heures 30. Retirez le bouquet garni. Préparez la béchamel et mélangez-la à la sauce. Préchauffez le four à 180°C. Dressez vos lasagnes en commençant par un peu de sauce, une couche de pâtes, une couche de sauce et du parmesan. Renouvelez l'opération et terminez par la sauce, du parmesan puis les mozzarellas coupées en deux. Enfournez 30 minutes.
        `,

        descriptionProduit: `Servez les lasagnes dans une assiette creuse avec un rab de sauce tomate. Accompagnez d'une salade de pissenlits, avec des oignons nouveaux hachés et une sauce au vinaigre de xérès.
        `,

        imageUrl: "https://www.ricettealvolo.it/wp-content/uploads/2023/02/lasagne-bolognese.jpg",
        CategorieId: 2,
        UserId: 1
    },
    {
        id: 7,
        title: "PASTA ALLA CARBONARA",
        servings: "4 per",
        tempsTotal: "10 min",
        difficulty_level: "facile",
        preparation: `Faites rissoler le guanciale coupé en gros lardons de 1 x 2 cm puis déglacez avec le vin blanc, en remuant bien avec une spatule en bois pour décoller tous les
        sucs.
        Faites cuire les pâtes al dente. Pendant ce temps, fouettez les jaunes d'œufs, les fromages râpés, le poivre concassé et quelques cuillerées à soupe d'eau de cuisson des pâtes pour créer une petite émulsion. Égouttez les pâtes et mélangez-les avec tous les autres ingrédients dans une poêle pour bien lier la sauce. Servez immédiatement.
        
         `,

        descriptionProduit: `Qu'on se le dise : une carbo qui se respecte, c'est avec du guanciale, charcuterie à base de joue de porc fumée et salée, des jaunes d'oeufs et du fromage. Mais, surtout, (s'il vous plaît) SANS crème ! La qualité et le concassage du poivre sont essentiels dans cette recette.`,

        imageUrl: "https://www.fontanaforniusa.com/cdn/shop/articles/Pasta-alla-Carbonara.jpg?v=1666895672",
        CategorieId: 2,
        UserId: 1
    },
    {
        id: 8,
        title: "PASTA ALLA NORMA",
        servings: "4 per",
        tempsTotal: "15 min",
        difficulty_level: "facile",
        preparation: `LES AUBERGINES
        Lavez bien les aubergines puis coupez-les en deux. Enlevez une partie du cœur (les graines) avec une grande cuillère, puis coupez-les en lanières de 1⁄2 cm. Placez-les dans un saladier rempli d'eau additionnée d'une poignée de gros sel pendant 15 minutes. Égouttez, rincez puis pressez les aubergines à la main et séchez-les sur un torchon.
        Dans une cocotte, faites chauffer une bonne quantité d'huile d'olive (1 cm d'épaisseur). Ajoutez 2 à 3 feuilles de basilic et l'oignon haché, puis les aubergines et laissez frire 5 minutes. Pendant ce temps, mixez les tomates pelées directement dans la boîte avec un mixeur-plongeant. Ajoutez les tomates dans la cocotte et laissez cuire 30 minutes à feu moyen. Salez et poivrez.
        
        LES PÂTES
        
        Lancez la cuisson des pâtes. Quand elles sont à peine al dente, ajoutez-les à la sauce et mélangez bien. Dressez avec quelques feuilles de basilic et la ricotta séchée en copeaux.
        Oh le fumet chaud de cette recette quand elle arrive sur une grande table de potes!
        180. `,

        descriptionProduit: `Les aubergines sont très gourmandes en huile. La meilleure façon d'éviter d'avoir un résultat trop gras est de ne pas utiliser le cœur qui est le plus absorbant et de laisser la peau. Les plonger dans l'eau salée permet d'éliminer l'amertume. Et attention, la saison des aubergines, c'est de mai à septembre !`,

        imageUrl: "https://food-images.files.bbci.co.uk/food/recipes/pasta_alla_norma_65605_16x9.jpg",
        CategorieId: 2,
        UserId: 1
    },
    {
        id: 9,
        title: "PASTA TOSCANA",
        servings: "4 per",
        tempsTotal: "15 min",
        difficulty_level: "facile",
        preparation: `Faites revenir l'oignon haché dans de l'huile d'olive, sans le laisser dorer. Ajoutez les graines de fenouil (gardez-en quelques-unes pour la déco) et baissez le feu. Ajoutez la chair à saucisse pour qu'elle dore. Versez le vin blanc, mélangez puis ajoutez les tomates entières (elles vont réduire d'elles-mêmes à la cuisson). Laissez mijoter tranquillement pendant 45 minutes
        au moins.
        Faites cuire les pâtes dans un grand volume d'eau salée. Quand elles sont cuites, mélangez-les à la sauce et servez en ajoutant des copeaux de pecorino et les graines de fenouil restantes.
         `,

        descriptionProduit: `Dans cette sauce à la saucisse, on met du vin blanc dont l'acidité vient contrebalancer le gras de la chair à saucisse. Les graines de fenouil facilitent la digestion et apportent une fraîcheur inattendue à la sauce. C'est une recette tout simplement dingue, et qui plus est facile. Prenez des bonnes pâtes à trou, afin qu'elles se remplissent de sauce. Et surtout, achetez de la très bonne chair à saucisse, sous peine que votre plat soit
        un peu morne.`,

        imageUrl: "https://images.lecker.de/pasta-alla-toscana-mit-spargel-und-tomaten/1x1,id=c883c717,b=lecker,w=1600,h=,ca=16.48,0,83.52,100,rm=sk.jpeg",
        CategorieId: 2,
        UserId: 1
    },
    {
        id: 10,
        title: "LA PÂTE PIZZA AL TAGLIO",
        servings: "4 per",
        tempsTotal: " 5 h",
        difficulty_level: "moyen",
        preparation: `Mélangez les deux farines et partagez le tout en quatre. Dans un grand saladier, mélangez l'eau, l'huile et le sel. Ajoutez un quart de la farine, et mélangez bien. Délayez la levure dans un peu d'eau et ajoutez-la dans le saladier. Mélangez de nouveau pour incorporer le tout. Ajoutez le restant de la farine quart après quart, en pétrissant bien entre chaque ajout. Continuez de pétrir une bonne dizaine de minutes. Formez une grosse boule et posez-la dans le saladier. Couvrez avec un torchon et laissez lever la pâte pendant 3 heures dans un coin chaud (25 °C au moins).
        Après ce premier temps de repos, séparez la pâte en deux (chaque pâton pèse environ 700 g). Huilez généreusement la plaque de four (un fond d'huile doit la recouvrir en entier), posez chaque boule, couvrez et laissez lever de nouveau pendant 3 heures. Enfin, étalez une boule sur toute la surface de la plaque. Marquez de vos doigts l'ensemble de la pâte et recouvrez-la d'une nouvelle couche d'huile. La pâte doit de nouveau reposer 2 heures. Après ce dernier temps de repos, la pâte est prête à être utilisée dans votre four électrique.
        
       
         `,

        descriptionProduit: ` La pizza al taglio, c'est le plat de street food romain par excellence vendu dans des pizzerias dédiées. Tiziana, qui recrute tous nos chefs en Italie, les a toutes essayées. Ses préférées ? L'Antico Forno Roscioli ou le Forno Campo de' Fiori.
        La grande différence avec la pizza napolitaine, c'est qu'elle contient de l'huile d'olive, ce qui la rend plus croustillante.`,

        imageUrl: "https://assets.afcdn.com/recipe/20161230/8945_w1024h768c1cx3680cy2456.jpg",
        CategorieId: 2,
        UserId: 1
    },
    {
        id: 11,
        title: "PIZZA TONNO",
        servings: "1 per",
        tempsTotal: "15 min",
        difficulty_level: "facile",
        preparation: `
        Préchauffez le four au maximum avec la pierre de cuisson, si vous en avez une.
       Coupez la mozzarella en tranches et posez-les sur une grille afin qu'elles se dessèchent légèrement. Coupez l'oignon rouge en fines rondelles et plongez-les dans un bol rempli d'eau additionnée du vinaigre. Laissez reposer une trentaine de minutes afin d'adoucir le goût de l'oignon.
       Étalez votre pâte à pizza sur quelques centimètres d'épaisseur, jusqu'à obtenir un cercle de 30 cm de diamètre, Placez-la sur une pelle légèrement farinée. Ajoutez les tranches de mozzarella, les tomates confites et les olives Taggiasche. Enfournez quelques minutes, le temps que la croûte dore et que le fromage fonde.
       À la sortie du four, ajoutez les feuilles de persil, de l'huile d'olive et des rondelles d'oignon.
        `,

        descriptionProduit: `
        Prenez un bon thon à l'huile d'olive pour cette recette et égouttez-le bien. Privilégiez un thon germon qui est plus fin que l'albacore. Vous pouvez remplacer le thon par d'autres types de poisson gras en conserve, comme du saumon ou des sardines (à condition de bien retirer les arêtes !).
        Pour une pizza plus chic, ajoutez des copeaux de poutargue, les oeufs de mulet séchés, ça sera délicieux !`,

        imageUrl: "https://i0.wp.com/www.ungers-kitchen.de/cmsneu/wp-content/uploads/2021/04/PizzaTonnoCipolla-14-scaled.jpeg?fit=1300%2C975&ssl=1",
        CategorieId: 2,
        UserId: 1
    },
    {
        id: 12,
        title: "Gustoso",
        servings: "1 per",
        tempsTotal: "15 min",
        difficulty_level: "facile",
        preparation: `Découpez les châtaignes en morceaux grossiers, puis réchauffez-les en les faisant doucement griller dans une poêle beurrée pendant quelques minutes. Une vingtaine de minutes avant de commencer la pizza, préchauffez le four au maximum avec la pierre de cuisson, si vous en avez une. Coupez la mozzarella en tranches et posez-les sur une grille afin qu'elles se dessèchent légèrement. Découpez des tranches pas trop épaisses (3 mm environ) de caciocavallo. Découpez le gorgonzola en gros morceaux. Étalez votre pâte à pizza sur quelques centimètres d'épaisseur, jusqu'à obtenir un cercle de 30 cm de diamètre,  Placez-la sur une pelle légèrement farinée. Déposez le caciocavallo, la mozzarella et le gorgonzola de façon harmonieuse. Faites cuire la pizza pendant 5 minutes environ, le temps que la croûte dore et que la base fonde uniformément.
        À la sortie du four, déposez la ricotta au centre, les copeaux de parmesan, quelques feuilles de basilic, les châtaignes et un léger filet d'huile d'olive.
         `,

        descriptionProduit: `On a essayé des tonnes de fromages pour trouver la meilleure association. Pour nous celle-ci est parfaite : la force du gorgonzola compensée par la fraîcheur de la ricotta. Petit cousin des mozzarella, provolone, burrata, etc., le caciocavallo est un fromage en forme de poire à pâte semi-dure. La particularité de tous ces fromages, c'est qu'ils sont à pâte filée, une technique typiquement italienne. Le lait est tourné jusqu'à former un ruban de fils avant d'être moulé.`,

        imageUrl: "https://www.eurialfoodservice-industry.fr/wp-content/uploads/2020/06/166-PIZZA-4-FROMAGES.jpg",
        CategorieId: 2,
        UserId: 1
    },
    {
        id: 13,
        title: "FONDENTE AL CIOCCOLATO",
        servings: "4 per",
        tempsTotal: "1h",
        difficulty_level: "moyen",
        preparation: `LA CRÈME CHANTILLY À LA MENTHE 
        Placez dans une casserole un quart de la crème avec les feuilles de menthe puis faites chauffer 5 minutes, sans faire bouillir. Laissez refroidir à couvert pendant quelques heures. Si vous n'avez pas de siphon, placez un grand cul-de-poule et les batteurs au congélateur. 
        LE FONDANT AU CHOCOLAT
        Faites fondre le chocolat et le beurre coupés en morceaux au bain-marie. Mélangez bien à la spatule. Ajoutez les œufs entiers un par un en mélangeant à chaque fois. Ajoutez la farine tamisée et le sucre, ainsi qu'une pincée de sel. Beurrez et farinez légèrement des ramequins (l'idéal est d'utiliser des ramequins en aluminium). Remplissez-les avec la préparation et laissez reposer 1 heure au frais.
        
        LA CRÈME CHANTILLY À LA MENTHE (SUITE) 
        Filtrez la crème infusée puis mélangez-la avec le reste de crème et le sucre glace. Le tout doit être bien froid et conservé au réfrigérateur en attendant d'être utilisé. Si vous avez un siphon, vous n'avez qu'à mettre la préparation dedans et la conserver au frais.
        Si vous n'en avez pas, mettez le tout dans le cul-de- poule glacé. Montez la crème en démarrant à petite vitesse puis en accélérant mais sans dépasser la vitesse moyenne. Vous avez atteint la bonne texture si, en soulevant le batteur, la crème adhère au fouet.
         `,

        descriptionProduit: `LA CUISSON DES FONDANTS
        Préchauffez le four à 180°C. Enfournez 13 minutes. Le cœur sera encore très coulant. Laissez reposer 3 minutes avant de démouler. Servez avec une feuille de menthe et la chantilly parfumée.`,

        imageUrl: "https://wips.plug.it/cips/buonissimo.org/cms/2019/02/Torta-al-cioccolato-con-cuore-morbido.jpg",
        CategorieId: 3,
        UserId: 1
    },
    {
        id: 14,
        title: "TIRAMISÙ",
        servings: "4 per",
        tempsTotal: "40 min",
        difficulty_level: "moyen",
        preparation: ` Préparez les cafés bien serrés et bien courts, ou faites 10 cl de café très noir avec une machine à piston.
        LA CRÈME
       Au moins 1 heure avant, placez les batteurs de votre fouet électrique et un saladier type «< cul-de-poule » (ou le bol du robot électrique) au congélateur. Versez la crème fleurette dans le saladier glacé. Fouettez- en accélérant la en démarrant à petite vitesse puis progressivement. La crème doit être bien ferme : en soulevant le batteur, elle doit rester sur le fouet.
       Battez les jaunes d'oeufs et le sucre au fouet électrique jusqu'à ce que le mélange blanchisse. Ajoutez le mascarpone et remuez bien pour obtenir un mélange homogène. Incorporez délicatement la crème fouettée à la spatule, en mélangeant de bas en haut.`,

        descriptionProduit: `Trempez les biscuits dans le café tiède (pas trop longtemps, le tiramisù ne doit pas être trop humide !). Disposez une couche de biscuits dans un plat rectangulaire, recouvrez de la moitié de la crème. Ajoutez une nouvelle couche de biscuits imbibés, puis le restant de la crème. Mettez au frais quelques heures. L'idéal, c'est de le laisser une nuit pour que les arômes se mélangent. Au moment de servir, saupoudrez de cacao.

        `,

        imageUrl: "https://cdn.pixabay.com/photo/2018/04/21/12/03/food-3338312_1280.jpg",
        CategorieId: 3,
        UserId: 1
    },
    {
        id: 15,
        title: "PANNACOTTA",
        servings: "4 per",
        tempsTotal: "30 min",
        difficulty_level: "facile",
        preparation: `Coupez la gousse de vanille dans le sens de la longueur pour en extraire les grains. Mettez le sucre, les grains et la gousse de vanille à infuser avec la crème dans une casserole pendant 1 heure au frais. Faites ramollir la gélatine dans un bol d'eau froide.
        Faites chauffer la crème à feu doux pendant quelques minutes. Elle ne doit pas dépasser 80 °C, c'est-à-dire qu'elle doit légèrement frémir, tout au plus. Essorez la gélatine entre vos mains et jetez-la dans la crème en mélangeant avec une cuillère en bois. Laissez refroidir à température ambiante en remuant de temps en temps. Cela permet à la vanille de continuer d'infuser dans toute la casserole. Quand c'est refroidi mais encore liquide, moulez vos pannacotte dans les moules de votre choix (verres, petits bols en acier ou en silicone de préférence, si vous voulez les servir démoulées). Laissez-les prendre plusieurs heures au réfrigérateur avant dégustation.
        
      `,

        descriptionProduit: `   SBRISOLONA
        Mélangez rapidement sucre, farine, beurre et une bonne pincée de fleur de sel du bout des doigts pour obtenir des petits grains, comme pour une pâte à crumble. Déposez-la avec les pistaches grossièrement concassées sur la plaque de four recouverte de papier sulfurisé et enfournez 5 minutes à 180 °C. Surveillez bien pour éviter que ça ne brûle.`,

        imageUrl: "https://cdn.pixabay.com/photo/2016/07/13/13/38/panacotta-1514463_1280.jpg",
        CategorieId: 3,
        UserId: 1
    },
    // {

    //     title: "",
    //     servings: "4 ",
    //     tempsTotal: "",
    //     difficulty_level: "",
    //     preparation: ` `,

    //     descriptionProduit: ``,

    //     imageUrl: "",
    //     CategorieId: 1
    // },
    // {

    //     title: "",
    //     servings: "4 ",
    //     tempsTotal: "",
    //     difficulty_level: "",
    //     preparation: ` `,

    //     descriptionProduit: ``,

    //     imageUrl: "",
    //     CategorieId: 1
    // },

]

module.exports = recettes