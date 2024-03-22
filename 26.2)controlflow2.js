const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("okay");
}
if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("user looged in");
    
}