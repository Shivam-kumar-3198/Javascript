//for
/*
for (let index = 5; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}
//curly braces is block scope
//let index = 0; declared variable with index 0
//index < array.length;  condition check
console.log();
*/
/*
for (let j = 5; j < 10; j++) {
    const element = j;
    console.log(element);
}
*/
/*
for (let i = 0; i < 9; i++) {
    const shivam = i;
    if (shivam ==7) {
        console.log("on 7 shivam targeted you");
    }
    console.log(shivam);
    
}
*/
/*
console.log(Element);//we cannot access element outside the loop
*/




for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop is ${i}`);
        const element = j;
        
    }
    const element = i;
    
}

/*
output will be
[Running] node "d:\Javascript\27.)Loops.js"
Outer loop value 0
Inner loop value 0 and inner loop is 0
Inner loop value 1 and inner loop is 0
Inner loop value 2 and inner loop is 0
Inner loop value 3 and inner loop is 0
Inner loop value 4 and inner loop is 0
Inner loop value 5 and inner loop is 0
Inner loop value 6 and inner loop is 0
Inner loop value 7 and inner loop is 0
Inner loop value 8 and inner loop is 0
Inner loop value 9 and inner loop is 0
Inner loop value 10 and inner loop is 0
Outer loop value 1
Inner loop value 0 and inner loop is 1
Inner loop value 1 and inner loop is 1
Inner loop value 2 and inner loop is 1
Inner loop value 3 and inner loop is 1
Inner loop value 4 and inner loop is 1
Inner loop value 5 and inner loop is 1
Inner loop value 6 and inner loop is 1
Inner loop value 7 and inner loop is 1
Inner loop value 8 and inner loop is 1
Inner loop value 9 and inner loop is 1
Inner loop value 10 and inner loop is 1
Outer loop value 2
Inner loop value 0 and inner loop is 2
Inner loop value 1 and inner loop is 2
Inner loop value 2 and inner loop is 2
Inner loop value 3 and inner loop is 2
Inner loop value 4 and inner loop is 2
Inner loop value 5 and inner loop is 2
Inner loop value 6 and inner loop is 2
Inner loop value 7 and inner loop is 2
Inner loop value 8 and inner loop is 2
Inner loop value 9 and inner loop is 2
Inner loop value 10 and inner loop is 2
Outer loop value 3
Inner loop value 0 and inner loop is 3
Inner loop value 1 and inner loop is 3
Inner loop value 2 and inner loop is 3
Inner loop value 3 and inner loop is 3
Inner loop value 4 and inner loop is 3
Inner loop value 5 and inner loop is 3
Inner loop value 6 and inner loop is 3
Inner loop value 7 and inner loop is 3
Inner loop value 8 and inner loop is 3
Inner loop value 9 and inner loop is 3
Inner loop value 10 and inner loop is 3
Outer loop value 4
Inner loop value 0 and inner loop is 4
Inner loop value 1 and inner loop is 4
Inner loop value 2 and inner loop is 4
Inner loop value 3 and inner loop is 4
Inner loop value 4 and inner loop is 4
Inner loop value 5 and inner loop is 4
Inner loop value 6 and inner loop is 4
Inner loop value 7 and inner loop is 4
Inner loop value 8 and inner loop is 4
Inner loop value 9 and inner loop is 4
Inner loop value 10 and inner loop is 4
Outer loop value 5
Inner loop value 0 and inner loop is 5
Inner loop value 1 and inner loop is 5
Inner loop value 2 and inner loop is 5
Inner loop value 3 and inner loop is 5
Inner loop value 4 and inner loop is 5
Inner loop value 5 and inner loop is 5
Inner loop value 6 and inner loop is 5
Inner loop value 7 and inner loop is 5
Inner loop value 8 and inner loop is 5
Inner loop value 9 and inner loop is 5
Inner loop value 10 and inner loop is 5
Outer loop value 6
Inner loop value 0 and inner loop is 6
Inner loop value 1 and inner loop is 6
Inner loop value 2 and inner loop is 6
Inner loop value 3 and inner loop is 6
Inner loop value 4 and inner loop is 6
Inner loop value 5 and inner loop is 6
Inner loop value 6 and inner loop is 6
Inner loop value 7 and inner loop is 6
Inner loop value 8 and inner loop is 6
Inner loop value 9 and inner loop is 6
Inner loop value 10 and inner loop is 6
Outer loop value 7
Inner loop value 0 and inner loop is 7
Inner loop value 1 and inner loop is 7
Inner loop value 2 and inner loop is 7
Inner loop value 3 and inner loop is 7
Inner loop value 4 and inner loop is 7
Inner loop value 5 and inner loop is 7
Inner loop value 6 and inner loop is 7
Inner loop value 7 and inner loop is 7
Inner loop value 8 and inner loop is 7
Inner loop value 9 and inner loop is 7
Inner loop value 10 and inner loop is 7
Outer loop value 8
Inner loop value 0 and inner loop is 8
Inner loop value 1 and inner loop is 8
Inner loop value 2 and inner loop is 8
Inner loop value 3 and inner loop is 8
Inner loop value 4 and inner loop is 8
Inner loop value 5 and inner loop is 8
Inner loop value 6 and inner loop is 8
Inner loop value 7 and inner loop is 8
Inner loop value 8 and inner loop is 8
Inner loop value 9 and inner loop is 8
Inner loop value 10 and inner loop is 8
Outer loop value 9
Inner loop value 0 and inner loop is 9
Inner loop value 1 and inner loop is 9
Inner loop value 2 and inner loop is 9
Inner loop value 3 and inner loop is 9
Inner loop value 4 and inner loop is 9
Inner loop value 5 and inner loop is 9
Inner loop value 6 and inner loop is 9
Inner loop value 7 and inner loop is 9
Inner loop value 8 and inner loop is 9
Inner loop value 9 and inner loop is 9
Inner loop value 10 and inner loop is 9
Outer loop value 10
Inner loop value 0 and inner loop is 10
Inner loop value 1 and inner loop is 10
Inner loop value 2 and inner loop is 10
Inner loop value 3 and inner loop is 10
Inner loop value 4 and inner loop is 10
Inner loop value 5 and inner loop is 10
Inner loop value 6 and inner loop is 10
Inner loop value 7 and inner loop is 10
Inner loop value 8 and inner loop is 10
Inner loop value 9 and inner loop is 10
Inner loop value 10 and inner loop is 10
*/