// Create a Faulty Calculator Using Java Script
// It takes two number from User
// It performs wrong operations as follows
// + ---> -
// * ---> +
// - ---> /
// / ---> **

let random = Math.random()
let a=28;
let b=56;
let c=a+b;
if(random>0.1){
    // let a = 28;
    // let b = 56;
    // let c = a+b;
    
    let obj = {
        "+": "-",
        "*": "+",
        "-": "/",
        "/": "**",
        }
}

if (random>0.1){
    console.log(`The result is ${a} ${c} ${b}`);
    windows.alert(`The result is ${eval ( `${a} ${c} ${b}`)}`)
}