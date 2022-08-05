// let name = prompt ("Введи своє ім'я")
// if( name == null) {
//     console.log("Для того щоб сюди зайти потрібно ввести ім'я")
// }
// else if (name == " " || name == "") {
//     console.log("Пустого імені не існує")
// }
// else if (name == "Anna" || name == "Roma" || name ==  "Alex" ) {
//     console.log("Круто, ти є в списку, заходь")
// }
// else {
//     console.log("Сорі," , name , "тебе нема в списку, ти не зайдеш")
// }


// while(true){                            поки щось там виконується то буде виконуватись шось там (в даному випадку - без кінця)
//     alert('hello')
// }




// let i = 0;
// while(i <= 3){
//     console.log("Цикл першого рівня   " + i);
//     i++;
// }




// let i = 0;
// while(i <= 3){
//     console.log("Цикл першого рівня   " + i);
//     i++;

//     let j = 0;
//     while(j <= 3){
//         console.log("Другий цикл   " +j);
//         j++;
//     }
// }


// for (let i = 0; i < 12; i+=2) {
//     console.log(i)
// }


// let i = 0;
// do {
// console.log(i);
// i++
// }
// while (i < 3)



// let num = +prompt()
// for (let i = 0; i =< 15; i++) {
//     if(i > num){
//         break          //припиняє процес на заданому елементі
//     }
//     console.log(i)
// }


// for(let i = 0; i < 20; 1++) {
//     if (i ==5 || i == 10 || i == 15){
//         continue        //  пропускає заданий елемент і йде далі
//     }
//     console.log(i)
// }         





// while(true){
//     let i = prompt("Введіть секретний пароль")
//     if (i == "stop"){
//         break
//     }
// }


// for (let i = 2; i <= 20; i+=2){
//     console.log(i)
// }


// for (let num = +prompt("Введи число менше 20"); num <= 20; num++){             хз чи працює
//     for (let n = 1; n <= 20; n+=2){
//         console.log()
//     }
//     if (num == n) {
//         continue
//     }   
//     console.log(num) 
// } 


let num1 = +prompt("Введи перше число")
let num2 = +prompt("Введи друге число")
do{
    console.log(num1++)
}while(num1<=num2)