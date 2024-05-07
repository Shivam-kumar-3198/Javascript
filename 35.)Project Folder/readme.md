```Javascript

 console.log("Shivam")

 const buttons = document.querySelectorAll('.button');
// console.log(buttons);

const body = document.querySelector('body');
// console.log(body);

// You can use forEach with NodeLists.
buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function (hi) {
       // console.log(e.target);
       // console.log(e);
       if(hi.target.id === 'grey'){
        body.style.backgroundColor = "grey";
       }

       if (hi.target.id === 'white') {
        body.style.backgroundColor = "whitesmoke" 
       }

       if(hi.target.id === 'blue'){
        body.style.backgroundColor = "blue"
       }

       if(hi.target.id === 'yellow' ){
        body.style.backgroundColor = 'yellow'
       }
    });
});
```