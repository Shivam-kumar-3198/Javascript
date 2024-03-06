// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>answer</h1>
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//         <li>4</li>
//         <li>5</li>
//         <li class="aa">item 1</li>
//         </ul>
//         <img src="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA" alt="">
//         <button> upload </button>

//         <h2>TODO list </h2>
//         <button>ADD TODO</button>
//         <ol>

//         </ol>
// </body>
// <script>
//     // let li = document.getElementsByTagName('li') // selection through tag name
//     // console.log(li[0])
//     // let li2 = document.getElementsByClassName('aa')
//     // console.log(li2);
//     // let li = document.querySelectorAll('.aa')
//     // li[0].style.color = "red"
//     // li[0].innerHTML = "english"

//     let img = document.getElementsByTagName('img')[0]
//     let button = document.getElementsByTagName('button')[0]
//     button.addEventListener('click', (e)=>{
//         let value = prompt('enter you link')
//         console.log('====================================');
//         console.log(value);
//         console.log('====================================');
//         img.src = String(value)
//     })

//     let h1 = document.getElementsByTagName('h1')[0]
//     // let ans = prompt("enter your operation")
//     // h1.innerHTML = eval(ans)

    let ol =  document.getElementsByTagName('ol')[0]
    let add = document.getElementsByTagName('button')[1]
    add.addEventListener('click',(e)=>{
        let value = prompt('enter you todo!')
        console.log(value);
        let li = document.createElement('li')
        ol.appendChild(li)
        li.innerHTML = value
    })








// </script>
// </html>