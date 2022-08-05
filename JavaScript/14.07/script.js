// let names = ['Elijah', 'Nicklaus', 'Rebekah'];

// // + push      додає елемент  вкінець масиву
// // shift       видаляє елемент з початку масиву
// // + pop       видаляє останній елемент масиву
// // unshift     додає елемент на початок


// console.log(names);
// names.push("Kol");
// console.log(names);

// names.shift();
// console.log(names);

// names.unshift("Finn");
// console.log(names);

// names.pop();
// console.log(names);

// console.log(names.pop());
// console.log(names.pop());

// names.unshift('Mikael', 'Ester', 'Frea');
// console.log(names);

// names.push('Elijah', 'Nicklaus', 'Kol', 'Rebekah');
// console.log(names);


// let matrix = [
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15]
// ]
// console.log(matrix [1][0]);

// let names = [ 'Mikael', 'Ester', 'Frea', 'Finn', 'Elijah', 'Nicklaus', 'Kol','Rebekah'];

// delete names[1];
// console.log(names);
// console.log(names[1]);


// names.splice(2, 2);                     видаляє заданий діапазон
// console.log(names);

      
// console.log(names);
// console.log(names.slice(0,3));          виводить задану частину масиву
// console.log(names.slice(2));
// console.log(names.slice(-2));



// let colors = ['red', 'blue', 'black'];

// let result = names.concat(colors);                    //додає шось до масиву

// console.log(result);


// result = result.concat([1,5]);
// console.log(result);

// result = result.concat(names);
// console.log(result);


// console.log(result.indexOf('Rebekah'));

// result[0] = 'Kol'
// console.log(result);


// console.log(result.lastIndexOf("Ester"));


// console.log(result.includes("Ester"));                  //первіряє чи масив містить певний елемент


// console.log(result.sort());                             //сортує по алфавіту


// let numbers = [1,2,123, 7, 1, 3,4,5]

// function fix (a,b){
//     if (a>b) return 1; 
//     if (a===b) return 0;
//     if (a<b) return -1;
// }

// console.log(numbers.sort(fix));


// let a = 'ivan';
// console.log(a);
// console.log(a.toUpperCase());                   //збільшує всі букви


// let b = 'ReNa';
// console.log(b);
// console.log(b.toLowerCase());                   //зменшує всі букви


// let colors = 'red, blue, black';
// let a = colors.split(',', 2);                         //розбиває стpоку на задані параметри (букви, слова(виходить масив))      цифра вказує скільки перших елементів виводити
// console.log(a)




// let names = ['Mikael', 'Ester', 'Freja', 'Finn', 'Elijah', 'Nicklaus', 'Kol', 'Rebekah'];

// let str = names.join(',');                             //перетворює масив на строку
// console.log(str);

// document.write(`<h1> ${str} </h1>`);                       //виводить на сторінку але сповільнює сайт

// let num = [1, 2, 3, 4, 5];
// num.reverse();
// console.log(num);

// names.forEach(function(item, i, names){                        //виеонує функцію для кожного елемента
//     console.log(`${item} має індекс ${i} і виводится з масиву ${names}`)
// })



// let num = 5.75;
// console.log(Math.round(num))           //заокруглює до найближчого    
// console.log(Math.floor(num))           //заокруглює до меншого
// console.log(Math.ceil(num))            //заокруглює до більшого



let names = ['Mikael', 'Ester', 'Freja', 'Finn', 'Elijah', 'Nicklaus', 'Kol', 'Rebekah'];
console.log(names)
if (names.includes("Ester")){
   let ind = names.indexOf('Ester')
    names.splice(ind, 1, 'Слово "Ester" було видалено')
}
console.log(names)


console.log(" ")


function del(i) {
    let names = ['Mikael', 'Ester', 'Freja', 'Finn', 'Elijah', 'Nicklaus', 'Kol', 'Rebekah'];
    console.log(names)
    let ind = names.indexOf(i);
    names.splice(ind, 1, 'Слово "' + i + '" було видалено')
    console.log(names)
}
del("Mikael")