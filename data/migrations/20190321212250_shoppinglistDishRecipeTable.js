
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoppinglist', tbl=>{
        tbl.increments();

        tbl
        .integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');


        tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shoppinglist');
};
