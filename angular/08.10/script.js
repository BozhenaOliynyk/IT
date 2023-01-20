// "use strict"


// function calc(a,b){
//     return a + b
// }

// console.log(calc(2,5))
// console.log(calc(12,10))




// function User(name,id) {                        //трох старіший варіант конструктора
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hi ' + this.name)
//     } 
// }

// let oleg = new User('Oleg', 30);               // функція крнструктор, сама створює об'єкт   
// let petro = new User('Petro', 40);

// console.log(oleg);
// console.log(petro);

// petro.hello()
// oleg.hello()



// class User {                   //нова версія конструктора
//     constructor(name,id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }

//     hello(){
//         console.log(`"Hi" ${this.name}`)
//     }

// }


// function show(num, num2) {
//     console.log(this)

//     function sum() {
//         console.log(this)

//         // return this.num + this.num2
//         return num + num2
//     }

//     console.log(sum())

// }
// show(2, 3)


// let user = {
//     name:'Oleg',
//     age:24,
//     sayHi(){
//         console.log('Hello ' + this.name)
//         console.log(this),
//         function test(){
//             console.log(this)
//         }
//     },

//     // sayhi: function (){        //то саме

//     // }
// }

// console.log(user)
// user.sayHi()



// class Rectangle {
//     constructor(height, width, color) {
//         this.height = height;
//         this.width = width;
//         this.color= color
//     }

//     calcArea(){
//         return this.height * this.width + this.color
//     }
// }

// const square = new Rectangle(5,5, ' red');
// console.log(square.calcArea())

// const square2 = new Rectangle(15,15, ' blue');
// console.log(square2.calcArea())



// let fruits = ['apple', 'orange', 'tomato'];
// let users = ['Ivan','Petr', 'Oleg'];
// let colors = ['red', 'blue','green'];

// let result = [...fruits, ...users, ...colors, 55, 'square'];       //... - spread operator - розгортає масив і стає видно його значення
// console.log(result)

// localStorage.setItem("name",'petro');    //історія сайту
// console.log(localStorage.getItem("name"));
// localStorage.removeItem('name');     //видаляє конкретну штуку
// localStorage.clear();        //чистить весь локал сторадж



// window.addEventListener("DOMContentLoaded", function (){
//     const checkbox = document.getElementById('checkBox');
//     if(this.localStorage.getItem("isChecked") === "true"){
//         checkbox.checked = true;
//     }
//     console.log(checkbox);
//     checkbox.addEventListener("click", function (){
//         console.log('ok');
//         localStorage.setItem("isChecked", true);
//     })
//     if(checkbox.checked == true){
//         document.body.style.background = 'red'
//     }
// })





// let options = {
//     width: 1200,
//     height: 600,
//     background:'blue',
//     font: {
//         size: '22px',
//         fontWeight: 'bold'
//     }
// }

// //JSON - java script object notation
// // ajax - ansynchronous java script and xml
// // html xhtml css xml

// console.log(options)
// // console.log(JSON.stringify(options))

// let json = JSON.stringify(options);     //переводить скрипт в джейсон, об'єкт в строку(на сервер)
// let resultJson = JSON.parse(json);      //переводить джейсон в скрипт, строку в обє'кт(з сервера)
// console.log(json);
// csole.log(resultJson);

//get - отримує дані з сервера
//post - надсилає дані на сервер (дані приховані від користувача)
//put - для оновлення вже існуюсих на сервері даний
//delete - видаляє певні дани на сервері
//head - відсутнє тіло коли приходять дані з сервера, схоже на гетб перевіряє метадані і зчитує їх

//status server - 1) інформаційні 100-199 
// 2) успішні 200-299 
// 3)перенаправлення або редирект 300-399
// 4)клієнські помилки 400-499
// 5)Серверні помилки 500-599

// 200 Успішно здійснений запит, знайдено по запиту

//response - відповідає з сервера даючи дані (щоб вивести їх)
//responseText - то саме

//readyState - перевіряє чи всі викликані штуки виконалися
//readyState 0 - метод open ще не викликаний
//readyState 1 - метод open вже0 викликаний
//readyState 2 - метод send викликаний
//readyState 3 - метод responseTextчасткові дані
//readyState 4 - все виконано успішно


const inputGrn = document.getElementById("hrn");
const inputUsd = document.getElementById("usd");

inputGrn.addEventListener('input', () => {
    let request = new XMLHttpRequest();
    // console.log(request)

    // request.open(method,url, asynchronic, login, passwors)
    request.open('GET', 'currency.json');
    request.setRequestHeader('Content-type', 'application/json; charset-utf-8');
    request.send();

    // responseText   
    //response

    //readyState

    request.addEventListener('readystatechange', function () {
        if (request.readyState === 4 && request.status === 200) {

            let data = JSON.parse(request.response)
            console.log(data);
            
            inputUsd.value = inputGrn.value / data.usd

        }
    })
})

