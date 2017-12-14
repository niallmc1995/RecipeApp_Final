// David - schema used for RESTful api from MongoDB
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    
    
    recipeName: {
        type: String,
        Required: 'Recipe Name cannot be left blank.'
    },
    recipeIngredients: {
        type: String,
        Required: 'Ingredients cannot be left blank.'
    },
    recipeInstructions: {
        type: String,
        Required: 'Instructions cannot be left blank.'
    },
    recipePrice: {
        type: Number,
        default: 0
    },
    starRating: {
        type: Number,
        default: 0
    }, 
    imageUrl: {
        type: String,
        Required: 'Image URL cannot be left blank.'
    }
});
    
module.exports = mongoose.model('Recipes', recipeSchema);
    