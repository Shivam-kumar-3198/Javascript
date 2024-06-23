const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

/*
Output
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/