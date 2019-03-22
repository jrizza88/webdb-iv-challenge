
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl =>{
        tbl.increments();

        tbl.string('ingredient', 128).notNullable()

        tbl
        .integer('recipes_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
