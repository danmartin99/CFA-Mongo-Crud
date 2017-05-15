const mongoose = require('mongoose');
// destructuring
const { Schema } = mongoose;

const ingredientSchema = new Schema({
	name: {
		type: String, 
		trim: true // name="    Sugar "
	},
	created_at: {
		type: Date,
		default: Date.now
	}
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;













