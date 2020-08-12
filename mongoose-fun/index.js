'use strict'
const mongoose = require('mongoose');
// console.log(mongoose);
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})

const Cat = mongoose.model('Cat', {name: String});
// console.log(Cat);

async function createCat(name){
const kitty = new Cat({
    name: 'good times galore'

});
console.log(kitty)
await kitty.save();

console.log('meow');
}
// console.log('hello')
// // console.log(kitty);
// await kitty.save();
// // console.log(kitty);
// console.log('maybe')
// // const rv = kitty.save();
// console.log(rv)
// const retreivedCat = Cat.findById(kitty._id);
// console.log(retreivedCat)
// // kitty.save().then( () => console.log('meeeyooo'));
// }

createCat('zzildjian');