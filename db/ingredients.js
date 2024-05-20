const ingredients = [
    {
        id: 1,
        nom: "Mozzarella di bufala",
    },
    {
        id: 2,
        nom: "pain de mie",
    },
    {
        id: 3,
        nom: "Filets d'anchois",
    },
    {
        id: 4,
        nom: "basilic",
    },
    {
        id: 5,
        nom: "poivre",
    },
    {
        id: 6,
        nom: "panko",
    },
    {
        id: 7,
        nom: "œufs",
    },
    {
        id: 8,
        nom: "Huile de friture",
    },
    {
        id: 9,
        nom: "Mélange de pousses",
    },
    {
        id: 10,
        nom: "Figues fraîches",
    },
    {
        id: 11,
        nom: "Pecorino",
    },
    {
        id: 12,
        nom: "Stracciatella",
    },
    {
        id: 13,
        nom: "Fèves fraîches",
    },
    {
        id: 14,
        nom: "poignées Amandes",
    },
    {
        id: 15,
        nom: "Piment d'Espelette",
    },
    {
        id: 16,
        nom: "Miel",
    },
    {
        id: 17,
        nom: "Vinaigre balsamique",
    },
    {
        id: 18,
        nom: "Huile d'olive",
    },
    {
        id: 19,
        nom: "Tomates cerises",
    },
    {
        id: 20,
        nom: "Tomates oranges",
    },
    {
        id: 21,
        nom: "Tomates confites",
    },
    {
        id: 22,
        nom: "Radis",
    },
    {
        id: 23,
        nom: "Parmesan",
    },
    {
        id: 24,
        nom: "Jambon de Parme",
    },
    {
        id: 25,
        nom: "Aiguillettes de poulet",
    },
    {
        id: 26,
        nom: "Pain carasau",
    },
    {
        id: 27,
        nom: "Orange",
    },
    {
        id: 28,
        nom: "Citron vert",
    },
    {
        id: 29,
        nom: "Yaourt",
    },
    {
        id: 30,
        nom: "Mayonnaise",
    },
    {
        id: 31,
        nom: "Câpres",
    },
    {
        id: 32,
        nom: "Sauce Worcestershire",
    },
    {
        id: 33,
        nom: "Sucrine",
    },
    {

        id: 34,
        nom: "Anchois",
    },
    {

        id: 35,
        nom: "Pommes de terre",
    },
    {

        id: 36,
        nom: "Sauce tomate",
    },
    {

        id: 37,
        nom: "Farine de blé T45",
    },
    {

        id: 38,
        nom: "Beurre",
    },
    {

        id: 39,
        nom: "Provola affumicata",
    },
    {
        id: 40,
        nom: "Pâtes à lasagne",
    },
    {

        id: 41,
        nom: "Bœuf haché",
    },
    {

        id: 42,
        nom: "Veau haché",
    },
    {

        id: 43,
        nom: "Chair à saucisse",
    },
    {

        id: 44,
        nom: "Carottes",
    },
    {
        id: 45,
        nom: "Oignons jaunes",
    },
    {
        id: 46,
        nom: "romarin",
    },
    {
        id: 47,
        nom: "thym",
    },
    {
        id: 48,
        nom: "Vin rouge",
    },
    {
        id: 49,
        nom: "Concentré de tomates",
    },

    {
        id: 50,
        nom: "Mozzarella",
    },
    {
        id: 51,
        nom: "Béchamel",
    },
    {
        id: 52,
        nom: "Céleri-branche",
    },
    {
        id: 53,
        nom: "Pâtes longues",
    },
    {
        id: 54,
        nom: "Guanciale",
    },

    {
        id: 55,
        nom: "Vin blanc",
    },
    {
        id: 56,
        nom: "Mafaldine",
    },
    {
        id: 57,
        nom: "Aubergines",
    },
    {
        id: 58,
        nom: "Ricotta",
    },
    {
        id: 59,
        nom: "sel",
    },
    {
        id: 60,
        nom: "Paccheri",
    },
    {
        id: 61,
        nom: "Graines de fenouil",
    },

    {
        id: 62,
        nom: "Tomates",
    },
    {
        id: 63,
        nom: "Farine intégrale",
    },
    {
        id: 64,
        nom: "Levure fraîche de boulanger",
    },
    {
        id: 65,
        nom: "Thon",
    },
    {
        id: 66,
        nom: "Olives",
    },
    {
        id: 67,
        nom: "Persil",
    },
    {
        id: 68,
        nom: "Oignon rouge",
    },
    {
        id: 69,
        nom: "Vinaigre de vin blanc",
    },
    {
        id: 70,
        nom: "Caciocavallo",
    },
    {
        id: 71,
        nom: "Gorgonzola",
    },
    {
        id: 73,
        nom: "Châtaignes cuites",
    },
    {
        id: 74,
        nom: "Pâte à pizza",
    },
    {
        id: 75,
        nom: "Chocolat noir 70%",
    },
    {
        id: 76,
        nom: "Sucre",
    },
    {
        id: 77,
        nom: "Sucre glace",
    },
    {
        id: 78,
        nom: "Crème liquide",
    },
    {
        id: 79,
        nom: "Menthe",
    },
    {
        id: 80,
        nom: "Mascarpone",
    },
    {
        id: 81,
        nom: "Crème fleurette",
    },
    {
        id: 82,
        nom: "Café",
    },
    {
        id: 83,
        nom: "Biscuits à la cuiller",
    },
    {
        id: 84,
        nom: "Cacao en poudre",
    },
    {
        id: 85,
        nom: "Jaunes d'œufs",
    },
    {
        id: 86,
        nom: "Gousse de vanille",
    },
    {
        id: 87,
        nom: "Gélatine",
    },
    {
        id: 88,
        nom: "Marmelade d'agrumes",
    },
    {
        id: 89,
        nom: "Pistaches",
    },
    {
        id: 90,
        nom: "Eau",
    },
]
module.exports = ingredients