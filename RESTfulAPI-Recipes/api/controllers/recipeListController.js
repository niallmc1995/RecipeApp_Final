'use strict';

var mongoose = require('mongoose'),
    Recipe = mongoose.model('Recipes');


exports.list_all_recipes = function(req, res) {
    Recipe.find({}, function(err, recipe){
        if (err)
        res.send(err);
        res.json(recipe);
    });
};


exports.create_a_recipe = function(req, res) {
    
    var new_recipe = new Recipe(req.body);
    
    new_recipe.save(function(err, recipe) {
        if(err)
       res.send(err)
       res.json(recipe);
    });
    console.log("New Recipe: "+ new_recipe);
};

exports.read_a_recipe = function(req, res) {
    var recipeId = req.query.recipeId;

    Recipe.findbyId(mongoose.Types.ObjectId(recipeId), function(err, recipe) {
        if(err)
       res.send(err)
       res.json(recipe);
    });
};

exports.update_a_recipe = function(req, res) {

    var id = mongoose.Types.ObjectId(req.query.recipeId);

    Recipe.findOneAndUpdate({_id:id},req.body,
    {new:true},function(err, recipe) {
        if(err)
       res.send(err)
       res.json(recipe);
    });
};

exports.delete_a_recipe = function(req, res) {
    var id = mongoose.Types.ObjectId(req.query.recipeId);

    Recipe.remove({ _Id:id}, 
        function(err, recipe) {
        if(err)
       res.send(err)
       res.json({ message: 'Recipe successfully deleted' });
    });
};
