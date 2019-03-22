

const db = require('./data/dbHelpers');

// db.getDishes()
// .then(dishes => {
//     console.log('dishes:' , dishes)
// }).catch(err =>{
//     console.log('issues with getting dishes', err)
// });


db.getDish(2)
.then(dishes => {
    console.log('dishes:' , dishes)
}).catch(err =>{
    console.log('issues with getting dishes', err)
});

// db.getRecipes() 
//     .then(recipes => {
//         console.log('recipes with dishes', recipes)
//     }).catch(err => {
//         console.log('issues with getting recipes', err)
//     });


// db.addDish('Churros')
// .then(function (dish){
//     console.log('new dish: ', dish)
//     res.json(dish)
// }).catch(err =>{
//     console.log('issues with getting dishes', err)
// });

// db.addDish('Ice Cream')
// .then(response => {
//     console.log(response)
//    })
//    .catch(err => {console.log(err)});