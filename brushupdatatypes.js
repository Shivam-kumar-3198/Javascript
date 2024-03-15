// Data have types primitive and non primitive

// primitive have 7 categories
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference or non primitive 3 categories
// Array, objects, functions

// integer datatypes are mentioned below
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol ("123")
console.log(id === anotherId);

const bigNumber = 4939050930934293n

// const score:number =100 we use this in typescript
const core = false

const heroes = ["krrish", "naagraj", "doga"]
let myobj ={
    name:"shivam",
    age:"22",
}

const myFunction = function(){
    console.log("Hello guys");

}
console.log(typeof bigNumber);