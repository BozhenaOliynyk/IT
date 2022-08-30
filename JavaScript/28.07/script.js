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













const inputColor = document.querySelector('#color-input');
const btnColorAdd = document.querySelector('#btn-color');


btnColorAdd.addEventListener('click', function () {
    let colors = inputColor.value.split(' ');
    console.log(colors);

    colors.forEach(element => {
        let box = document.createElement('div')
        box.className = "box";
        box.style.background = element;
        document.body.append(box)
        box.addEventListener('click', function () {
            let boxId = box.getAttribute("data-box");
            console.log(boxId);
        
            box.remove(boxId)
        })
    })
})
