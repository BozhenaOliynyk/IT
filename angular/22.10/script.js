const btnGetPosts = document.querySelector(".get-posts")
const postBox = document.querySelector(".posts-box")

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
}


btnGetPosts.addEventListener("click", function () {
    btnGetPosts.textContent = 'Сховати пости'; 
    btnGetPosts.addEventListener("click", function () {
        location.reload()
    })
    getPosts((response) => {

        const fragment = document.createDocumentFragment();

        response.forEach(post => {
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
            console.log(card);
            fragment.appendChild(card);
        });
        postBox.appendChild(fragment);
    });
}) 