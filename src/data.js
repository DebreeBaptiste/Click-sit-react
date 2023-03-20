const startersData = [
	{
		id: 0,
		price: '6€',
		image: 'image/Velouté.webp',
		alt: 'picture of celery velvety',
		french: {
			title: 'Velouté d’automne',
			ingredients:
				'Velouté de celeri, maïs sauté, sommités de brocolis et croutons au beurre.',
			allergens: 'Céleri, Produit à base de lait',
		},
		english: {
			title: 'Autumn velvety',
			ingredients:
				'Celery velvety, sautéed corn, end of broccoli and butter crust bread.',
			allergens: 'Celery, Product based milk',
		},
	},
	{
		id: 1,
		price: '6€',
		image: 'image/Poirreaux.webp',
		alt: 'picture of snacked leeks',
		french: {
			title: 'Poireaux vinaigrette',
			ingredients:
				'Poireaux snackés, croutons au beurre de baratte, noisettes torréfiées et vinaigrette maison.',
			allergens: 'Produit à base de lait, Fruits à coques',
		},
		english: {
			title: 'Salad dressing leeks',
			ingredients:
				'Snacked leeks, churned butter crust bread, roasted nuts and homemade salad dressing.',
			allergens: 'Product based milk, Tree nuts',
		},
	},
	{
		id: 2,
		price: '7€',
		image: 'image/Salade.webp',
		alt: 'picture of beets salad',
		french: {
			title: 'Petite Salade de saison',
			ingredients:
				'Bettraves, mousse de chèvre frais, sarrasin torréfié et figue de solliès.',
			allergens: 'Produit à base de lait',
		},
		english: {
			title: 'Small season salad',
			ingredients:
				'Beets, fresh goat cheese moss, roasted buckwheat and local fig from Solliès.',
			allergens: 'Product based milk',
		},
	},
];

const mainCourseData = [
	{
		id: 3,
		price: '15€',
		image: 'image/Boeuf.webp',
		alt: 'picture of Grilled beef skirt',
		french: {
			title: 'Hampe de boeuf grillée',
			ingredients:
				'Boeuf tradition, frites allumettes, sauce béarnaise ou beurre maître d’hotel.',
			allergens: "Sauces : Produit à base de lait et d'oeufs",
		},
		english: {
			title: 'Grilled beef skirt',
			ingredients:
				'Traditional beef, skin fries, with bearnaise sauce or  « matter d’hotel » butter.',
			allergens: 'Sauces : Product based milk and eggs',
		},
	},
	{
		id: 4,
		price: '10€',
		image: 'image/Croque-monsieur.webp',
		alt: 'picture of Toasted ham & cheese sandwich',
		french: {
			title: 'Croque-Monsieur',
			ingredients:
				'Chiffonnade de jambon fermier d’Auvergne, double gratiné de vieux Comté.',
			allergens: 'Produit à base de lait',
		},
		english: {
			title: 'Toasted ham & cheese sandwich',
			ingredients: 'Farmer chiffonnade Ham, double gratin of old comté cheese.',
			allergens: 'Product based milk',
		},
	},
	{
		id: 5,
		price: '15€',
		image: 'image/Burger.webp',
		alt: 'picture of The Vegan Burger',
		french: {
			title: 'Le Burger Veggie',
			ingredients:
				'Tofu aux herbes, paté de champignons, galette de pommes de terres, oignon caramélisé et sauce sriracha.',
			allergens: "Pas d'allergènes",
		},
		english: {
			title: 'The Vegan Burger',
			ingredients:
				'Aromatic herbs tofu, mushrooms dough, potatoes patties, caramelized onions and sriracha sauce.',
			allergens: 'No allergens',
		},
	},
];

const dessertData = [
	{
		id: 6,
		price: '7€',
		image: 'image/Chocolat.webp',
		alt: 'picture of Chocolate Cake',
		french: {
			title: 'Gateau au chocolat',
			ingredients:
				'Pâte à brownie, coeur fondant, crème anglaise vanille et chantilly.',
			allergens: "Produit à base d'oeufs",
		},
		english: {
			title: 'Chocolate Cake',
			ingredients:
				'Brownie’s dough, creamy heart , vanilla custard sauce and Sweet whipped cream.',
			allergens: 'Product based eggs.',
		},
	},
	{
		id: 7,
		price: '8€',
		image: 'image/Mille-feuille.webp',
		alt: 'picture of Millefeuille',
		french: {
			title: 'Mille-Feuille',
			ingredients:
				'Feuilletage croustillant et crème à la vanille Bourbon de Madagascar.',
			allergens: "Produit à base d'oeufs",
		},
		english: {
			title: 'Millefeuille',
			ingredients: 'Crispy puff pastry and Madagascar bourbon vanilla cream.',
			allergens: 'Product based eggs.',
		},
	},
	{
		id: 8,
		price: '8€',
		image: 'image/Baba.webp',
		alt: 'picture of Rum Baba',
		french: {
			title: 'Baba au Rhum',
			ingredients: 'Baba de Baptiste, rhum ambré, chantilly vanille.',
			allergens: "Produit à base d'oeufs",
		},
		english: {
			title: 'Rum Baba',
			ingredients: 'Baptiste’s baba, amber rum, vanilla sweet whipped cream.',
			allergens: 'Product based eggs.',
		},
	},
	{
		id: 9,
		price: '3,50€',
		image: 'image/Glaces.webp',
		alt: 'picture of iced cups',
		french: {
			title: 'Les coupes glaçées',
			ingredients:
				'Vanille, chocolat, fraise, framboise, mangue, café, citron, pêche, pistache.',
			allergens: "Produit à base d'oeufs, en fonction du parfum",
		},
		english: {
			title: 'The iced cups',
			ingredients:
				'Vanilla, chocolate, strawberry, raspberry, mango, coffee, lemon, peach, pistachio.',
			allergens: 'Product based eggs, depend of flavor.',
		},
	},

];

export { startersData, mainCourseData, dessertData };
