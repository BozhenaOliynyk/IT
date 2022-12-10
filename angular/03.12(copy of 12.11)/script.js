const popup = document.querySelector(".pop-up");
const popupBg = document.querySelector(".pop-up-bg");
// const btnOpenPopup = document.querySelector(".open-pop-up");
const btnClosePopup = document.querySelector(".bi");
const inputTitle = document.getElementById("title");
const inputText = document.getElementById("text");
const btnGetPosts = document.querySelector(".get-posts");
const btnAddPosts = document.querySelector(".add-posts");
const postBox = document.querySelector(".posts-box");
const popUp = document.querySelector(".pop-up");


const form = document.querySelector("form-add-post");





// function popupMove(e) {
//     popUp.style.left = e.pageX - popUp.offsetWidth / 2 + 'px';        //style.left - місце розташування по осі х ; offsetWidth - зміна місця розташування по щсф х; pageX - показує де я клацаю по осі х; /2+'px' - щоб знайти його центр
//     popUp.style.top = e.pageY - popUp.offsetHeight / 2 + 'px';
// }

// // popUp.addEventListener('mousedown',popupMove);
// document.addEventListener('mousedown', popupMove);
// // document.addEventListener('mousemove',popupMove);

// document.addEventListener('mouseup', function () {
//     document.removeEventListener('mousemove', popupMove);
// })




let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

document.addEventListener( 'touchstart', dragStart, false );
document.addEventListener( 'touchend', dragEnd, false );
document.addEventListener( 'touchmove', drag, false );

document.addEventListener( 'mousedown', dragStart, false );
document.addEventListener( 'mouseup', dragEnd, false );
document.addEventListener( 'mousemove', drag, false );


function dragStart(e) {
    if (e.type === 'touchstart') {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === popup) {
        active = true;
        addActiveClass()
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    active = false;
    addActiveClass()
}

function addActiveClass() {
    popup.classList.toggle('popup-move');
}

function drag(e) {
    if (active) {
        e.preventDefault();

        if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, popup)
    }
}


function setTranslate(currentX, currentY, el) {
    el.style.transform = 'translate3d' + currentX + 'px, ' + currentY + 'px, 0'
}








btnClosePopup.addEventListener('click', function (e) {
    e.preventDefault();
    popup.hidden = true;
    popupBg.hidden = true;
    
});


function getPosts(callback) {
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', function () {
        console.log('Everything is ok');
        const response = JSON.parse(xhr.response);
        console.log(response);
        callback(response)     //дозволяє вийняти змінну з цієї функції, тобто дозволяє використовувати її за межами функції в якій її створили
    });

    xhr.addEventListener('error', function () {
        console.log('Everything is not ok');
    });

    xhr.send();
};


// function pageReload() {
//     btnGetPosts.textContent = 'Сховати пости';
//     btnGetPosts.addEventListener("click", function () {
//         location.reload()
//     })
// }


btnGetPosts.addEventListener('click', () => {
    // pageReload();
    getPosts((response) => {
        renderPosts(response)
    })
})

function cardTemplate(post) {
    const card = document.createElement("div");
    // card.className = 'card';
    card.classList.add('card');      //то саме, але рахується потужнішим

    const id = document.createElement('div');
    id.classList.add('card__id');
    id.textContent = post.id;

    const cardBody = document.createElement("div");
    cardBody.classList.add('card-body');

    const title = document.createElement('h3');
    title.classList.add('card__title');
    title.textContent = post.title;

    const article = document.createElement('p');
    article.classList.add('card__text');
    article.textContent = post.body;

    card.appendChild(cardBody);
    cardBody.appendChild(id);
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    return (card)
}



function renderPosts(response) {
    const fragment = document = document.createDocumentFragment();
    response.forEach(post => {
        const card = cardTemplate(post);
        fragment.appendChild(card)
    })
    postBox.appendChild(fragment);
}


function createPosts(body, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        cb(response);
    });

    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8')

    xhr.addEventListener('error', () => {
        console.log('Помилка');
    });

    xhr.send(JSON.stringify(body))


}





// btnAddPosts.addEventListener('click', function () {
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const text = formData.get('text');
    console.log(title);

    let newPost = {
        title: title,
        body: text,
        id: 1,
    };


    createPosts(newPost, response => {
        const card = cardTemplate(response);
        postBox.insertAdjacentElement('afterbegin', card)
    })
    form.reset()
});
    // pageReload();
// })