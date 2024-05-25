const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"shivam", password:"#212"})
        }
        else{
            reject('Error: Something in js went wrong')
        }
    },100)
})

async function consumerPromiseFive(){
    const response = await promiseFive
}

consumerPromiseFive()
