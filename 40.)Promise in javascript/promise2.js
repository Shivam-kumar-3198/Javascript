new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyncing task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
},1000)