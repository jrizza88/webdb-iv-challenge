
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl =>{
        tbl.increments();

        tbl.string('ingredient', 128).notNullable().unique('ingredient_name');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
