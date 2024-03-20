/*
const user = {
    username: "Shivam",
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website `);
        
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
*/
/*
const user = {
    username: "Shivam",
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website `);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
*/
/*Function ke andar function nhi bna sakte hain
function chai(){
    let username = "Shivam"
    console.log(this.username);
}
chai()
*/

//+++++++++++++++++++++Functions ko aur kaise declare kr sakte hai specially arrow function ko
/*
const me = () => {
   let value = "Shivam"
   console.log(this);
}
me()
*/

//arrow function
/*
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))
*/
/*
const addTwo = (num1, num2) => 

     num1 + num2


console.log(addTwo(3,4))
*/
const addTwo = (num1, num2) => ({myname:"Shivam"})
console.log(addTwo (3,4));