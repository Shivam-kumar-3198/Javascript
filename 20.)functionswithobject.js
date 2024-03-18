/*
function calculateCarPrice(...num1){ //...is a rest and spread operator
    return num1
}

console.log(calculateCarPrice(200, 400, 500, 2000));

output = [ 200, 400, 500 ]
*/
//Now Learning about Object

const user ={
    username:"Shivam",
    price:1999999
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price of his book is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399,
})

const myNewArray = [200, 400, 600, 800]
