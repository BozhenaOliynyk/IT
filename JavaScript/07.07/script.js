// if(){}
// for (){}
//function hey (){}     є назва перед дужками


// function hey (a, b){
//     console.log('Hello');
//     console.log(a+b);
// }
// hey(5, 6);


// function hello (a, b){
//     console.log(a, b);
// }
// hello ('Hell', 'Petro');

// let im = prompt("Введи ім'я")
// let pr = prompt("Введи прізвище")
// function hello (a, b){
//     alert(a, b);
// }
// hello ("Раді тебе бачити," + " " + im + " " + pr);



// let num = 5

// function sum(){
//     let num = 15
//     console.log(num)
// }
// console.log(num)
// sum()
// console.log(num)



// function sum (a, b){
//     return a + b
// }

// console.log(sum(5, 8))





// function checkAge (){
//     if(age >= 20 ){
//         return true;
//     }
//     else {
//         return confirm("Тобі точно можна?")
//     }
// }

// let age = +prompt ('Введи свій вік');
// if (chekAge(age)){
//     console.log("Заходь")
// }
// else {
//     console.log("Заходь через парк років")
// }



//function declaration             можна викликати функцію перед її написанням (више за неї в коді)
// function calc (){
//     console.log(22 + 5);
// }
// calc()


//function expression         або функціональний вираз             викликати лише після написання функції
// let calc = function () {
// console.log(22 + 5);
// }
// calc()

// function calc() {
//     console.log("Hello")
// }
// let hello = calc
// let hi = hello
// calc()
// hello()
// hi()


// function sum (a, b){
//     console.log(a + b)
// }
// sum(5, 5)
// sum(6, 6)


// let hi = () => console.log("Hello");           //то саме шо функція
// hi()

// let hi = () => {                              для більшої кількості функцій
//     console.log("Hello");
//     return 5 + 5
// }        
// hi()



// let names = ["Ivan", "Petro", "Oleg"]             //масив

//let names = new Array()                            //теж мaсuв

// console.log(names)




let food = ["apple", "potato", "orange", "carrot", "tomato", "cucumber", "pineapple"]
let a = 0
do {
    console.log(food[a])
    a++
} while (a <= food.length)