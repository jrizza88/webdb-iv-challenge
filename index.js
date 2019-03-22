

const db = require('./data/dbHelpers');

db.getDishes()
.then(dishes => {
    console.log('dishes:' , dishes)
}).catch(err =>{
    console.log('issues with getting dishes', err)
});