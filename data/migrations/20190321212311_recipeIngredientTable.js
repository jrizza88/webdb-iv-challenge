
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipeIngredients', tbl=>{
        tbl.increments();

        tbl
        .integer('recipe_id')
        .unsigned()
        .references()
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');


        tbl
        .integer('ingredient_id')
        .unsigned()
        .references()
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });

};

exports.down = function(knex, Promise) {
  
};
