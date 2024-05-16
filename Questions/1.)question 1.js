
var hello = "How are you buddy"

var charArray = hello.split("").reverse().join("");

charArray.forEach(function(c){
    console.log(c);
})