const promiseFour = new promiseFour(function(resolve,reject){
      setTimeout(function(){
        let error = true

        if(!error){
            resolve({username:"Lalu", password:"rabri@gmail.com"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
      },1000)
})

const username = promiseFour
.then((user) =>{
   console.log(user);
   return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})

