
var hello = "How are you buddy"

var savedStr = hello.split("").map(function(word){
return word.split("").reverse().join("")
})
console.log(savedStr.reverse().join());