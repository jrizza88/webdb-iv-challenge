
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe: 'pepperoni pizza', dish_id: 1},
        {recipe: 'mushroom pizza', dish_id: 1},
        {recipe: 'cheese pizza', dish_id: 1},
        {recipe: 'carnitas tacos', dish_id: 2},
        {recipe: 'steak tacos', dish_id: 2},
        {recipe: 'chocolate cake', dish_id: 3},
        {recipe: 'confetti cake', dish_id: 3},
      ]);
    });
};
