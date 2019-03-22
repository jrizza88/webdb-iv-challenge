const knex = require('knex');

const dbConfig = require('../knexfile');

const db = knex(dbConfig.development);

module.exports = {
getDishes,
getDish,
addDish,
getRecipes,
addRecipe
};
    
   function getDishes() {
        return db('dishes');
    }

    function getDish(id){
        // return db('dishes').where({id: Number(id)});
        return db('dishes')
        .where({'dishes.id': Number(id)})
        .first()
        .then(dish => {
            return db
            .select('recipe')
            .from('recipes')
            .where({'dish_id': dish.id})
            // .joinRaw(dish)
            .then(recipes => ({dish: dish, recipes:recipes}))
            
        })
  
    }

   function addDish (dish) {
        return db('dishes')
        .insert(dish)
        .then(ids => ({ id: ids[0]}))
    }



    function getRecipes() {
        return db('recipes')
    }

    function addRecipe(recipe){
        return db('recipes').insert(recipe).into('recipes')
    }
