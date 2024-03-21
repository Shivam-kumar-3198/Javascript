//if = a control flow
// = is a assignment operator

/*
const isuserLogggedIn = true
const temperature = 41

if ( 2 == "3") {
    console.log("executed");
}
*/
/*
const isuserLogggedIn = true
const temperature = 41

if ( temperature === 55) {
    console.log("less than 50");
}

else{
    console.log("temperature is greater than 50");
}
*/

//+++++++++++++++Scope+++++++++++++++++

/*
const score = 200

if (score > 100){
    var power = "fly"
    console.log(`user power : ${power}`);
    //that,s why var is not used 
}

console.log(`user power : ${power}`);
*/
/*
const score = 200

if (score > 100){
    let power = "fly"
    console.log(`user power : ${power}`);
    //that,s why let is blocked scope
}

console.log(`user power : ${power}`);
*/

//+++++++++++++Short hand notation+++++++++++++++++++
/*
const balance = 1000

if(balance <1200){
    console.log("shi hai tera bank balance");
}
else{
    console.log("kar kya rha hai tu");
}
*/

const balance = 1000

if(balance<500){
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}
else if(balance < 900){
    console.log("less than 1200");
}
else{
    console.log("less than 1200");
}
