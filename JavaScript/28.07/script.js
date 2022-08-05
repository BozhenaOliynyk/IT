// const container = document.querySelector('.container');

// console.log(container);


// const firstChildContainer = container.firstElementChild;
// const lastChildContainer = container.lastElementChild;

// console.log(firstChildContainer);
// console.log(lastChildContainer);


// const previousSibling = lastChildContainer.previousElementSibling;
// const nextSibling = lastChildContainer.nextElementSibling;

// console.log(previousSibling);
// console.log(nextSibling);


// const cards = lastChildContainer;


// const parentElement = cards.parentElement;

// console.log(parentElement);


// const child = container.childNodes;
// const children= container.children;

// console.log(child);
// console.log(children);






// const box = document.querySelectorAll(".box");

// for (let i = 0; i < box.length; i++) {

//     box[i].addEventListener("click", function() {
//         // console.log(this)
//         this.style.background = "blue"
//     });

//     box[i].addEventListener("click", (e) => {
//         // console.log(e.target.style.background = 'blue')
//         e.target.style.background = 'blue'
//     })
// }














let entered = prompt("Введіть кольори");
console.log(entered);

let colors = entered.split(' ')
console.log(colors)




const box = document.querySelectorAll(".box")


colors.forEach(element => {
    console.log(element);
    box.style.background = element;    
})

box.addEventListener('click', function () {
    let boxId = box.getAttribute("data-box");
    console.log(boxId);

    box.remove(boxId)
}
)