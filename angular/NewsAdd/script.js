const searchControls = document.querySelector('.search-controls');
const searchBtn = document.querySelector('search-btn');
const searchInput = document.querySelector('search-input')




function customHttp() {
    return {
        get(url, cb) {

            // const xhr = new XMLHttpRequest();
            // xhr.open('GET', url);
            // xhr.send();

            // xhr.addEventListener('load',()=>{
            //     const response = JSON.parse(xhr.responseText);
            //     cb(response);
            // });

        }
    }
}


const http = customHttp();

const newService = (function () {
    const apiKey = '640d12fab4b74ad7976109bf08a8e1ec';
    const apiUrl = 'https://newsapi.org/v2';

    return {
        topHeadlines(country = 'ua', cb) {
            http.get(`${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`);
        },
        everything(query, cb) {
            http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`);
        }
    }
})();



// base news function

function loadNews() {
    newService.topHeadlines('ua', onGetResponse)
}


//get response function

function onGetResponse(err, res) {
    console.log(res);
}


//dom loaded

document.addEventListener('DOMContentLoaded', function () {
    loadNews()
})


// render new function

function renderNews(news) {
    const newsContainer = document.querySelector('.news-section__container')

    news.forEach(newsItem => {
        const el = newsTemplate(newsItem)
    })
}


function newsTemplate(news){
    
}