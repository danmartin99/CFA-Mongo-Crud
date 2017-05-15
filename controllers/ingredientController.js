// /controllers/ingredientController.js

const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

exports.getIngredients = (req, res) => {
	Ingredient.find()
		.then((ingredients) => {
			res.render('index', {
				title: 'Ingredients',
				ingredients: ingredients
			})
		})
};

exports.getIngredientsApi = (req, res) => {
	Ingredient.find()
		.then((ingredients) => {
			res.json(ingredients)
		})
};


exports.postIngredients = (req, res) => {
	console.log('req.body is:', req.body);
	const name = req.body.ingredient_name;
	let ingredient = new Ingredient();
	ingredient.name = name;
	ingredient.save()
		.then(() => {
			res.redirect('/')
		})
};

exports.postIngredientsApi = (req, res) => {
	console.log('req.query is:', req.body.ingredient_name); //req.body
	const name = req.body.ingredient_name;
	//const name = "req.body.ingredient_name";
	//const name = req.body.ingredient_name;
	//let ingredient = "Straw";
	let ingredient = new Ingredient();
	//let ingredient = {};
	ingredient.name = name;
	//ingredient.name = 'straw';
	ingredient.save()
		.then(() => {
				// res.redirect('/api')
				res.json(ingredient)
		})

	//res.send('ingredient created')
};

exports.getSingleIngredientsApi = (req, res) => {
	console.log('req.query is', req.params);
	ingredient.findOne({_id: req.params.id})
		.then(ingredient => {
		res.json(ingredient)
	})
};

// exports.deleteIngredients = (req, res) => {
// 	Ingredients.findOneAndRemove({_id: req.params.id})
// 	.then(() => )
// }