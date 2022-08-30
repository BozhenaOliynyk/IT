const popupBg = document.querySelector(".popup__bg");
const popup = document.querySelector(".popup");
const popupOpen = document.querySelector(".open-btn");
const popupClose = document.querySelector(".close-popup");

popupOpen.addEventListener('click', function () {
    popupBg.classList.add("active")
    popup.classList.add("active")
})
popupOpen.addEventListener('mousedown', function () {
    popupOpen.style.backgroundColor = "#ffff"
    popupOpen.style.color = "black"
})

popupClose.addEventListener('click', function () {
    popupOpen.style.backgroundColor = "black"
    popupOpen.style.color = "#ffff"
    popupBg.classList.remove("active")
    popup.classList.remove("active")
})

document.addEventListener('click', (event) => {
    if (event.target === popupBg) {
        popupBg.classList.remove("active")
        popup.classList.remove("active")
    }
})






// function hi(){
//     console.log(hi)
// }
// setTimeout(hi,1500)     //робить щось за певний час(1 - що саме станеться, 2 - на скільки(в мілі секундах))
// setTimeout("console.log('hey')",3500)
// setTimeout(() => console.log("whats up?"),5000)


// clearTimeout(time)       //очищає таймаут


// let i = 0;
// let a = setInterval(function(){           //спамить щоразу як проходить вказаний проміжок часу
//     console.log("hello")
//     i++

//     if (i==5){
//         clearInterval(a)
//     }
// }, 2000)


// const progress = document.querySelector('#progress')
// let i = 0;
// let width = 0;
// let a = setInterval(function(){  
//     width+= 1
//     i++
//     console.log("hello")
//     progress.style.width = width + '%'
//     if (width == 100){
//         clearInterval(a)
//     }
// }, 200)