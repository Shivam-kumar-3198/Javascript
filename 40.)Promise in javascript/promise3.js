const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"Chai", email:"keoooo2gmail.com"})
    },1000)
})

promiseThree.then(function(user){
     console.log(user);
})