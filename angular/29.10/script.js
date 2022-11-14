// function hi(){
//     console.log('hi');
// }

// hi()
// hi.name = 'Amari'
// console.log(hi.name)

// hi()
// hi.field = 'Amari'
// console.log(hi.field)

// function hey(){
//     return'hey'
// }

// hey()

// let name = function(){

// }

// вгорі функції першого класу



// знизу функції вищого порядку; - --- це функції якф приймають в параметрах інші фенкції або повертіють функції

// addEventListener('click', function(){

// })


// function name(){
//     return function(){
//         console.log("name")
//     }
// }



// const fruits = ['apple', 'orange', 'banana', 'lime'];

// let newFruits = [];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);    // і в квадратних дужках виводить всі значення масиву
//     newFruits.push(fruits[i].length);
//     console.log(newFruits)
// }




// let newFruits2 = [];

// for (let i = 0; i < fruits.length; i++) {
//     newFruits2.push(fruits[i].toUpperCase());
// }
// console.log(newFruits2);








// const fruits = ['apple', 'orange', 'banana', 'lime'];

// function createArray(arr, fn, fnkt) {
//     let resArr = [];
//     let wordLengthResult = [];

//     for (let i = 0; i < arr.length; i++) {
//         resArr.push(fn(arr[i]));
//         wordLengthResult.push(fnkt(resArr[i]))
//     };
//     if (fn == nameLength || fnkt == nameLength) {
//         console.log(wordLengthResult);


//     //     // let start = 0 + wordLengthResult[0];
//     //     // for (let i = 1; i = wordLengthResult.length; i++) {
//     //     //     let sum = start + wordLengthResult[i]
//     //     //     console.log(sum)
//     //     // }

//     }
//     return resArr
// }



// function word(el) {
//     console.log(el);
//     return el
// }

// function nameLength(th) {
//     let wordLength = th.length;
//     console.log(wordLength);
//     return wordLength
// }


// function nameUpperCase(el) {
//     return el.toUpperCase()
// }


// let result = createArray(fruits, word, nameLength);
// console.log(result);


// console.log(' ');


// createArray(fruits, nameUpperCase, word);


// console.log(' ');


// const vegetables = ['potato', 'tomato', 'cucumber', 'onion'];
// createArray(vegetables, word, nameLength)
















// function greeting(firstName) {
//     return function (lastName) {
//         return `Hello, ${firstName} ${lastName}`;
//     };
// }

// // const testGreeting = greeting('Lukyan');
// // console.log(testGreeting);

// // const fullName = testGreeting('Beruna');
// // console.log(fullName);


// const fullName = greeting('Lukyan')('Beruna');
// console.log(fullName);







// let arr = ['Roman', 'Lukjan', function hi(h){
//     // return h
//     return function(){
//         return h
//     }
// }];

// // console.log(arr[2]('Hello'));
// console.log(arr[2]('Hello')());






// function question(job){
//     if(job == 'webDev'){
//         return function (name){
//             return `${name}, Що таке for?`;
//         }
//     }
//     else if (job == 'cook'){
//         return function (name){
//             return `${name}, Який рецепт лазаньї?`;
//         }
//     }
// }

// const developerQuestion = question('cook')('Anna');
// console.log(developerQuestion);

// const developerQuestion1 = question('webDev');
// console.log(developerQuestion1('Olga'));






// function question(job){
//     const jobSelect = {
//         developer:"Що таке for?",
//         cook: "Який рецепт лазаньї?",
//         doctor: "Які ліки пити при грипі?"
//     }

//     return function (name){
//         return `${name}, ${jobSelect[job]}`
//     }
// }

// const developerQuestion2 = question('doctor');
// console.log(developerQuestion2('Stefan'));

// const developerQuestion3 = question('developer');
// console.log(developerQuestion3('Olga'));

// console.log(question('cook')('Alex'));
// console.log(question('developer')('Maya'))








// function first() {
//     setTimeout(function () {
//         console.log('hi 1');
//     }, 1000);
// };

// function second() {
//     console.log('hi 2')
// };

// first();
// second();





// function hi(name, callback) {
//     console.log(`Привіт ${name}`);
//     callback(name)
// }

// hi('Reyna', function (name) {
//     console.log(`${name} Як справи?`)
// })





// function hi(name, callback) {
//     console.log(`Привіт ${name}`);
//     callback(name)
// }

// function how(name) {
//     console.log(`${name} Як справи?`)
// }

// hi(prompt("Write your name"), how)






// function hi(num, callback) {
//     let result = num*2;
//     callback(result)
// }

// function how(result) {
//     console.log(result + 5)
// }

// hi(prompt("num"), how)