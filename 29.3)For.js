const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "rby",
    swift: "swift by apple"
    
}
/*
for (const key in myObject) {
   // console.log(key ); for key value only
}

for (const key in myObject){
    //console.log(myObject[key]); for inner data
}
*/

for(const key in myObject){   //here in is used in place of "of"
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}

