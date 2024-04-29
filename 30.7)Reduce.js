const myNums = [1,2,3,4,5,6,7,8,10]

const myTotal = myNums.reduce(function (accumulator, currentValue){
    //whenever we use scope we have to use return 
     console.log(`acc:${accumulator} and currValue:${currentValue}`);
     return accumulator + currentValue
},0)

console.log(myTotal);