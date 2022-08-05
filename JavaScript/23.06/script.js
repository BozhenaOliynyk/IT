// let num = 1;

//num += 1;          те саме що і   num = num + 1

//num++             інкремент(постфіксна форма)          додає 1 і виводить старе значення
//++num             інкремент(префіксна форма)           зразу додає 1 і виводить нове значення

//num--             декремент


// console.log(num++);
// console.log(++num);


// console.log(6 > 2);
// console.log(6 < 2);
// console.log(3 + 3 / 5 + 4 -1 > 6)

// console.log("a" < "c")        // по номері в алфавіті
// console.log("ac" > "ca")
// console.log("a" > "ac")
//console.log("ac" > "abdfrhervagvws")

// console.log("6" > 08)

// let num = 5;
// let num2 = 8;
// console.log(num == num2)              //прирівнює
// console.log(num = num2)               //надає   змінній num значення змінної num2
// console.log(num >= num2)
// console.log(num <= num2)

// let num = "8";
// let num2 = 8;
// console.log(num === num2)                //'строге' порівняння типів (без перетворень типів)


// console.log(0 == false)
// console.log("" = false)
// console.log(null == undefined)

// console.log(null == 0)
// console.log(null > 0)
// console.log(null >= 0)


// if (5 > 2) {
//     console.log("yep, 5 is bigger then 2")
// }

// let a = 5;
// let b = 8;
// if (a > b) {
//      console.log("yep, a is bigger then b")
// }
// else if (a < b) {
//     console.log("yep, a is smaller then b")
// }
// else if (a == b) {
//     console.log("yep, a is similar to b")
// }
// else if (a == 5) {
//     console.log("yep, a is similar to 5")
// }

// let pers = 100
// if (true) {
//     if (нога) {
//         if(броня){
//             console.log("-5хп")
//         }
//         else{ console.log("-15хп")}
//     }
//     if(голова) {
//         console.log(-100хп)
//     }
// }

// let a = 6;
// let b = 6;
// if (a > b) {
//     console.log("yep, a is bigger then b")
// }
// else if (a < b) {
//     console.log("yep, a is smaller then b")
// }
//  else  {
//     console.log("yep, a is similar to b")
// }


// let age = +prompt ("Введи свій вік")
// if (age < 18) {
//     console.log("Сорі, ти ще замалий")
// }
// else if (age == 18) {
//     console.log("Круто, з повноліттям!")
// }
// else {
//     console.log("Ти вже старий, але заходь")
// }

// let a = 5 > 3 ? console.log("yep"): console.log("nope")





// let age = +prompt ("Введи свій вік");
// age < 18  console.log("Сорі, ти ще замалий"): console.log();
// age == 18  console.log("Круто, з повноліттям!"): console.log();
// age > 18  console.log("Ти вже старий, але заходь"): console.log();


// let age = +prompt ("Введи свій вік");
// let result = age < 18 ? "Сорі, ти ще замалий" : age == 18 ? "Круто, з повноліттям!" : "Ти вже старий, але заходь";
// console.log(result)


//  || або
// console.log(true || false) //true
// console.log(false || false)  //false
// console.log(null || 0 || 1)  //1
// console.log(0 || 2 || 1)  //2
// console.log(null || undefined || 0)  //0

//  && і 
// console.log(true && true) //true
// console.log(true && false) //false
// console.log(1 && 0) //0
// console.log(null && 0 && undefined)

// != не дорівнює
// let num = 5;
// console.log(num !=6)


let age = +prompt("Введи свій вік")
if (age >= 1 && age <= 10) {
    console.log("Ти ще малий (тобі від 1 до 10)")
}
else if (age > 10 && age < 20) {
    console.log("Ти - підліток (тобі від 10 до 20)")
}
else if (age >= 20 && age <= 50) {
    console.log("Ти - людина середнього віку (тобі від 20 до 50)")
}
else {
    console.log("Ти вже старий (тобі більше 50)")
}