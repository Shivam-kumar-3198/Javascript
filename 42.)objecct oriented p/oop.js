const user = {
    username: "Shivam",
    loginCount:8,
    signedIn: true,


    getUserDetails: function(){
        console.log("Got user details from database");
    }
}



console.log(user.signedIn);
console.log(user.getUserDetails());