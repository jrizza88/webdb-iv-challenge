
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'mushrooms'},
        {ingredient: 'pepperoni'},
        {ingredient: 'mozzarella'},
        {ingredient: 'dough'},
        {ingredient: 'basic seasoning'},
        {ingredient: 'basil'},
        {ingredient: 'tomato sauce'},
        {ingredient: 'pork'},
        {ingredient: 'beef'},
        {ingredient: 'salsa'},
        {ingredient: 'guacomole'},
        {ingredient: 'oaxaca cheese'},
        {ingredient: 'corn tortillas'},
        {ingredient: 'taco shells'},
        {ingredient: 'chocolate'},
        {ingredient: 'vanilla extract'},
        {ingredient: 'flour'},
        {ingredient: 'egg'}
      ]);
    });
};
