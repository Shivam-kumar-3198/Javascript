//array
// const hiShiv = [0,1,2,3,4,5,true,6]; // It can store multiole values no, strings an more

// console.log(hiShiv[5]); // shallow copy and deep copy more



const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[1]);


// Array Methods
// myArr2.push(8,9,0) // push adds value in an array
// myArr2.pop(1)// removes thelast value
// console.log(myArr2);

// myArr2.unshift(5) // adds value in start
// myArr2.shift()
// console.log(myArr2);

const newArr2 = myArr2.join()

console.log(myArr2);
console.log( newArr2);
console.log(typeof newArr2);

// slice, splice

console.log("A", myArr2);
const myn1 =myArr2.slice(1,3)

console.log(myn1);