// let num = 5.23785216987856845368;

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// console.log(Math.trunc(num));         //забирає все після коми

// console.log(num.toFixed(2))           //nоказує введену кількість знаків після коми(останній знак розумно заокруглює)



// console.log(0.1 + 0.2 == 0.3);



// let num = '200.375837px';

// let result = parseInt(num);             //зчитує тільки число допоки не піде текст або щось інше шо не є числом і виводить то число
// let res = parseFloat(num);              //зчитує числа і після коми(крапки) зупиняється лише після букв
// console.log(result);
// console.log(res);


// console.log(Math.random().toFixed(2))


// console.log(Math.max(3, 5, 6, 1 , 43))
// console.log(Math.min(3, 5, 6, 1 , 0.5, 43))

// console.log(Math.pow(2, 3))           //перше число підноситься до вказаного степеня(друге число)



// let user = new Object();            //конструктор об'єктів
// let user = {};                      //літерал об'єктів (більш поширений)


// let user = {
//     name : 'Petro',
//     age: 20,
//     developer: true,
//     "web developer": true,
//     cats:{
//         name: "Murka",
//         age: 3,
//         color: "grey",
//         childs:{
//             name: "Ronney",
//             age: 0.5,
//             color: "white"
//         },
//     },
//     skills:["Good", "Carefull", "Clever", {
//         name: "Oleg",
//         age: 21,
//     }],
//     "20": 'asdsa',
//     "13":'DSSAFDF',
//     "45": 'qwewferces',
// }
// console.log(user)
// console.log(user.cats.childs.age)
// console.log(user.skills[3])

// user.developer = 'false'
// user.women = 'false';
// delete user.women;
// console.log(user);
// console.log(user.developer);
// console.log(user.women);
// console.log(user["web developer"])

// console.log("age" in user)

// for(key in user){
//     console.log(key);
//     console.log(user[key]);
// }





// let store = {
//     bar: {
//         name: "snickers",
//         id: 4572548743485458
//     }
// }

// console.log(store.bar);

// store.bar.price = "15грн";
// console.log(store.bar);

// store.bar.color = "brown";
// console.log(store.bar);

// store.bar.price = "20грн";
// console.log(store.bar);


// delete store.bar.color;
// console.log(store.bar);









let num1 = prompt("Введіть перше число");
let num2 = prompt("Введіть друге число");
let num01 = parseFloat(num1);
let num02 = parseFloat(num2);

function random(min, max) {
    let random = Math.random() * (max - min) + min;
    console.log(random)
}
random(num01, num02)