// const marvel_heroes =["thor,", "Ironman", "spiderman"]
// const dc = ["spiderman", "flash", "batman"]

// marvel_heroes.push(dc);
// console.log(marvel_heroes[3][1]);

//--------------Concat---------------
/*
const allheroes = marvel_heroes.concat(dc);
console.log(allheroes);
*/


//------------Spread-------------------
// const merged_heroes = [...dc,...marvel_heroes];// spread is used like this  ...dc
// console.log(merged_heroes);


//------------flat property ------------
// const another_array =[1,2,[3,4,5],[6,7,8],[9,10]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

//-------------Array.of------------------

let a = 53;
let b = 67;
let c = 99;

console.log(Array.of(a,b,c));