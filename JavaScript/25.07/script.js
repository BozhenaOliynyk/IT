// const box = document.querySelector('.box');
// box.onclick = function clickBox(){
//     console.log('Ви клацнули на квадрат');
//     box.style.width = '300px';
//     box.style.background = 'red'
// };


// box.addEventListener('click', function () {                     //click - коли клікати на елемент  
//     console.log('Ви клацнули на квадрат');
// })

// box.addEventListener('click', () =>  {                         //на ній не працює зис
//     console.log('Ви клацнули на квадрат');
// })



// box.addEventListener('mouseout', function () {                    //mouseout - коли наводити на елемент
//     console.log('Ви навели на квадрат');
// })

// box.addEventListener('dblclick', function () {                     //dblclick - коли двічі клікати на елемент  
//     console.log('Ви двічі клацнули на квадрат');
// })
// box.addEventListener('mousedown', function () {                    //mousedown - поки нажав і тримаєш на елемент  
//     console.log('Ви навели на квадрат');
// })

// box.addEventListener('mouseup', function () {                    //mouseup - коли відпустив елемент 
//     console.log('Ви навели на квадрат');
// })

// box.addEventListener('keydown', function () {                    //keydown - поки нажав і тримаєш на кнопку 
//     console.log('Ви навели на квадрат');
// })

// box.addEventListener('keyup', function () {                    //keyup - поки нажимаєш на кнопку  
//     console.log('Ви навели на квадрат');
// })


// box.addEventListener('click', function (event) {                     
//     console.log('event');                                              //event - все розписує(шо зробила, де, скільки разів.....)
//     console.log('event.type');                                        //event.type - вказує тип евенту
// })


// const box = document.querySelector('.box');
// box.addEventListener('click', function(event){
//     // console.log(event.currentTarget)                         //розуміє на який конкретно елемент я натисла
//     console.log(event.target)                                  //показує на який елемент було натиснуто
//     box.innerHTML += 'text'                                   //вписує в канкретниц елемент вказаниц текст
// })


// const list = document.querySelector('.list');
// const box =  document.querySelector('.box');
// let i = 0;
// box.addEventListener('click', function(){
//     list.innerHTML += ++i
// })


// const box =  document.querySelector('.box');
// box.addEventListener('mouseover', function(){
//     box.classList.add("big-box");
// })
// box.addEventListener('mouseout', function(){
//     box.classList.remove("big-box");
// })




// const box =  document.querySelector('.box');
// box.addEventListener('mouseover', function(){
//     box.classList.toggle("big-box");
//     if( box.classList.contains("big-box")){
//         console.log("Ваш блок зараз світло зелений")
//     }
//     else{
//         console.log("Ваш блок зараз темно червоний")
//     }
// })




// let box = document.createElement('div');                   //створюється дівка 
// box.className = "box-blue";                               //додємо їй клас
// document.body.append(box)                                //додає бокс на кінець 
// document.body.prepend(box)                              //додає бокс на початок
// h1.before(box)                                         //додає елемент перед вказаним боксом
// h1.after(box)                                         //додає елемент після вказаного боксу
// console.log(box)



const text = document.querySelector('.text');
text.addEventListener('click', function () {
    let box = document.createElement('div');                    
    box.className = "box-blue";                                 
    document.body.prepend(box)
    box.addEventListener('click', function () { 
        box.remove(box)
    }
    )
})
