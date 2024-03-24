const userEmail = "shuivgh.com"

if (userEmail) {
    console.log("got user email");
}
else{
    console.log("don't have user email");
}




//falsy values
/*
false, 0, -0, BigInt ,"", null, undefined,NaN
*/

// truthy values
/*
"0", 'false', "", [], {}, function(){}
*/

if(userEmail.length == 0){
    console.log("array is empty");
}