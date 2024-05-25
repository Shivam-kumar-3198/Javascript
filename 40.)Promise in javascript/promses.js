const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task Your time is coming please wait for a while");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

