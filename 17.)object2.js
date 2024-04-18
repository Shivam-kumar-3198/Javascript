// const course = {
//     coursename: "Js in hindi",
//     price: 99,
//     courseInstructor: "Shivam"
// }

// //course.courseInstructor It is only syntax

// const {courseInstructor} = course

// console.log(courseInstructor);

// next code

//const tinderUser = new Object()
// learning object
// const meShivam = {}
// meShivam.Roll = "11222809"
// meShivam.name = "Shivam kumar"
// meShivam.isLoggedIn = false

// console.log(meShivam);

// object ke andar object
/*
const mySpace ={
    email: "abc@gmail.com",
    fullname: {
        userfullname :{
            firstname:"Shivam",
            lastname: "singh"
        }
    }
} 
console.log(userfullfullname.name.firstname);
*/


//singleton

// object literals
const mySym = Symbol("key1")

const Shivam = {
    name: "Don",
    age: "18",
    [mySym]: "key1",
    location: "jaipur",
    email: "123@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"],

    "full name" : "Shivam Kumar Singh"
}

//then how to access above objects

//this is another way of accessing  console.log(Shivam.lastLoginDays)

/*
console.log(Shivam["isLoggedIn"])
console.log(Shivam["full name"]);
console.log(Shivam[mySym]);

Shivam.email = "hayabusa@123"
Object.freeze(Shivam) //Add values
Shivam.email = "dukati@321"
console.log(Shivam);
*/
//output
/*
{
  name: 'Don',
  age: '18',
  location: 'jaipur',
  email: 'hayabusa@123',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  'full name': 'Shivam Kumar Singh',
  [Symbol(key1)]: 'key1'
}
*/

Shivam.greeting = function(){
    console.log("Hello Shivam");
}

Shivam.greetingTwo = function(){
    console.log(`Hello Shivam, ${this.name}`); //String Iinterpolation
}

console.log(Shivam.greeting());
console.log(Shivam.greetingTwo());
