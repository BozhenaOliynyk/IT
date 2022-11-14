const popup = document.querySelector(".pop-up");
const popupBg = document.querySelector(".pop-up-bg");
const btnOpenPopup = document.querySelector(".open-pop-up");
const btnClosePopup = document.querySelector(".bi");
const inputTitle = document.getElementById("title");
const inputText = document.getElementById("text");
const btnGetPosts = document.querySelector(".get-posts");
const btnAddPosts = document.querySelector(".add-posts");
const postBox = document.querySelector(".posts-box");

btnOpenPopup.addEventListener('click', function () {
    popup.classList.add('active');
    popupBg.classList.add('active');
    btnClosePopup.addEventListener('click', function () {
        popup.classList.remove('active');
        popupBg.classList.remove('active');
    });
    document.addEventListener('click', (event) => {
        if (event.target === popupBg) {
            popupBg.classList.remove("active")
            popup.classList.remove("active")
        }
    })
})
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

btnGetPosts.addEventListener('click', () => {
    btnGetPosts.textContent = 'Сховати пости';
    btnGetPosts.addEventListener("click", function () {
        location.reload()
    })
    getPosts((response) => {
        renderPosts(response)
    })
})

function cardTemplate(post) {
    const card = document.createElement("div");
    // card.className = 'card';
    card.classList.add('card');      //то саме, але рахується потужнішим

    const cardBody = document.createElement("div");
    cardBody.classList.add('card-body');

    const cardNum = document.createElement('div');
    cardNum.classList.add('card__num');
    cardNum.textContent = post.id

    const title = document.createElement('h3');
    title.classList.add('card__title');
    title.textContent = post.title;

    const article = document.createElement('p');
    article.classList.add('card__text');
    article.textContent = post.body;

    card.appendChild(cardBody);
    cardBody.appendChild(cardNum);
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    return (card)
}



function renderPosts(response) {
    const fragment = document = document.createDocumentFragment();
    // let i = 101
    // i=i++
    response.forEach(post => {
        // response.id = i;
        const card = cardTemplate(post);
        fragment.appendChild(card)
    })
    postBox.appendChild(fragment);
}



// let i = 101
btnAddPosts.addEventListener('click', (e) => {
    const newPost = {
        title: 'title post',
        body: 'body text post',
        id: 1,
    };



    // newPost.id=i

    newPost.title = inputTitle.value;
    newPost.body = inputText.value;
    console.log(newPost);

    createPosts(newPost, response => {
        // console.log(response);
        const card = cardTemplate(response)
        postBox.insertAdjacentElement('afterbegin', card)
        console.log(card);
    })
    inputTitle.value = null;
    inputText.value = null;
    //  i=i+1
})


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


