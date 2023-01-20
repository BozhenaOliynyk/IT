// const searchControls = document.querySelector('.search-controls');
// const searchBtn = document.querySelector('search-btn');
// const searchInput = document.querySelector('search-input')




// // function customHttp() {
// //     return {
// //         get(url, cb) {

// //             const xhr = new XMLHttpRequest();
// //             xhr.open('GET', url);
// //             xhr.send();

// //             xhr.addEventListener('load',()=>{
// //                 const response = JSON.parse(xhr.responseText);
// //                 cb(response);
// //             });

// //         }
// //     }
// // }



// // function myHttpRequest({ method, url } = {}, cb) {        //коли ми написали = {}, то це означає, шо по замовчуванню цей параметр пустий, але якшо його ввели, то цей параметр = введеному значенню

// //     try {
// //         const xhr = new XMLHttpRequest();
// //         xhr.open(method, url)
// //         xhr.addEventListener('load', () => {
// //             if (Math.floor(xhr.status / 100) !== 2) {
// //                 cb(`Error. status code : ${xhr.status}`, xhr)
// //                 return
// //             }
// //             const response = JSON.parse(xhr.responseText);
// //             cb(null, response)
// //         })
// //         xhr.addEventListener('error', () => {
// //             console.log('error')
// //         })
// //     } catch (error) {
// //         cb(error)
// //     }


// //     xhr.send();
// // }



// // myHttpRequest(
// //     {
// //         method: 'GET',
// //         url: 'https://jsonplaceholder.typicode.com/posts',
// //     },
// //     (err, res) => {
// //         if (err) {
// //             console.log(err)
// //         }
// //         console.log(res);
// //     }
// // )


// function http() {
//     return {
//         get(url,cb) {
//             try {
//                 const xhr = new XMLHttpRequest();
//                 xhr.open("GET", url);
//                 xhr.addEventListener('load', () => {
//                     if (Math.floor(xhr.status / 100) !== 2) {
//                         cb(`Error. status code : ${xhr.status}`, xhr)
//                         return
//                     }
//                     const response = JSON.parse(xhr.responseText);
//                     cb(null, response)
//                 })
//                 xhr.addEventListener('error', () => {
//                     console.log('error')
//                 })

//                 xhr.send();
//             } catch (error) {
//                 cb(error)
//             }


//         },

//     }
// }

// const myHttp = http();
// console.log(myHttp);
// myHttp.get('https://jsonplaceholder.typicode.com/posts',(error,resp)=>{
//     console.log(resp)
// })


// const http = customHttp();































const searchControls = document.querySelector('.search-controls');
const searchBtn = document.querySelector('.search-btn');
// const searchInput = document.querySelector('.search-input');
// const countryInput = document.querySelector('#country');

// const form = document.form['search-form'];
// const countrySelect = form.elements('');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     loadNews()
// })

function customHttp() {
    return {
        get(url, cb) {
            try {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.addEventListener('load', () => {
                    if (Math.floor(xhr.status / 100) !== 2) {
                        cb(`Error. status code : ${xhr.status}`, xhr)
                        return
                    }
                    const response = JSON.parse(xhr.responseText);
                    cb(null, response);
                })
                xhr.addEventListener('error', () => {
                    console.log('error')
                })

                xhr.send();
            } catch (error) {
                cb(error)
            }


        },

    }
}



const http = customHttp();



const newService = (function () {
    const apiKey = '640d12fab4b74ad7976109bf08a8e1ec';
    const apiUrl = 'https://newsapi.org/v2';

    return {
        topHeadlines(country, category, cb) {
            http.get(`${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, cb);
        },
        everything(query, cb) {
            http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
        }
    }
})();







// const country = countryInput.value;
// const theme = searchInput.value;
// console.log(theme);
function loadNews() {
        newService.topHeadlines('ua','war', onGetResponse);
}



document.addEventListener('DOMContentLoaded', function () {
    loadNews();
})


// searchBtn.addEventListener('click', function () {
//     countryInput.value = '';
//     searchInput.value = '';
// })



function onGetResponse(res) {
    console.log(res);
    renderNews(res);
}



function renderNews(news) {
    console.log(news)
    const newsContainer = document.querySelector('.news-section__container')
    let fragment = '';
    news.articles.forEach(newsItem => {
        const el = newsTemplate(newsItem)
        fragment += el
    });
    newsContainer.insertAdjacentHTML('afterbegin', fragment)
}


function newsTemplate({ urlToImage, title, url, description }) {

    if (urlToImage == undefined) {
        urlToImage = 'https://images8.alphacoders.com/563/thumb-1920-563155.jpg'
    }

    return `<div class="card-news">
    <img class="card-news__img" src="${urlToImage}" alt="">
    <div class="card-information">
    <div class="card-news__title">${title || ''}</div>
    <div class="card-news__content">${description || ''}</div>
    <a href="${url}" class="card-news__btn">View</a>
    </div>
</div>`
}








// function loadNews() {
//     const country = countryInput.value;
//     const theme = searchInput.value;


//     if(!searchInput){
//     newService.topHeadlines(country, onGetResponse);
//     }
//     else {
//         newService.everything(theme, onGetResponse);
//     }
// };




// searchBtn.addEventListener('click', function(){
//     document.addEventListener('DOMContentLoaded', function () {
//         loadNews()
//     })
//     console.log(loadNews)
// })