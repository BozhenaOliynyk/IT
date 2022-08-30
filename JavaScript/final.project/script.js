const btnEasy = document.querySelector('.btn-easy');
const btnMiddle = document.querySelector('.btn-middle');
const btnHard = document.querySelector('.btn-hard');

const tabEasy = document.querySelector('tab-easy');
const tabMiddle = document.querySelector('tab-middle');
const tabHard = document.querySelector('tab-hard');

const tabEasyInput = document.querySelector('tab-easy__input');
const tabMiddleInput = document.querySelector('tab-middle__input');
const tabHardInput = document.querySelector('tab-hard__input');

const tabEasyBtn = document.querySelector('tab-easy__btn');
const tabMiddleBtn = document.querySelector('tab-middle__btn');
const tabHardBtn = document.querySelector('tab-hard__btn');

const popup = document.querySelector('.popup');
const popupBg = document.querySelector('.popup__bg');
const popupClose = document.querySelector('.popup__close');
const popupBtn = document.querySelector('.popup__btn');





btnEasy.addEventListener('click', function () {
    btnEasy.classList.add("active");
    tabEasy.classList.add("active");
    btnMiddle.classList.remove("active");
    btnHard.classList.remove("active");
    tabMiddle.classList.remove("active");
    tabHard.classList.remove("active");
    let tabEasyInputValue = tabEasyInput.value;
    if (!tabEasyInputValue) {
        alert('Ви не записали відповідь')
        return
    }
    tabEasyBtn.addEventListener('click', function () {
        let answer = tabEasy.createElement('p');
        answer.classList.add('answer');
        if (tabEasyInputValue.contains('')) {
            answer.textContent = 'Your answer is correct!'
            btnEasy.classList.remove("active");
            tabEasy.classList.remove("active");
        }
        else {
            answer.textContent = 'You answer is incorrect. Try again'
        }
    })
})
btnMiddle.addEventListener('click', function () {
    btnMiddle.classList.add("active");
    tabMiddle.classList.add("active");
    btnEasy.classList.remove("active");
    btnHard.classList.remove("active");
    tabEasy.classList.remove("active");
    tabHard.classList.remove("active");
    let tabMiddleInputValue = tabMiddleInput.value;
    if (!tabMiddleInputValue) {
        alert('Ви не записали відповідь')
        return
    }
    tabMiddleBtn.addEventListener('click', function () {
        let answer = tabMiddle.createElement('p');
        answer.classList.add('answer');
        if (tabEasyInputValue.contains('')) {
            answer.textContent = 'Your answer is correct!';
            btnMiddle.classList.remove("active");
            tabMiddle.classList.remove("active")
        }
        else {
            answer.textContent = 'You answer is incorrect. Try again'
        }
    })
})
btnHard.addEventListener('click', function () {
    btnHard.classList.add("active");
    tabHard.classList.add("active");
    btnMiddle.classList.remove("active");
    btnEasy.classList.remove("active");
    tabMiddle.classList.remove("active");
    tabEasy.classList.remove("active");
    let tabHardInputValue = tabHardInput.value;
    if (!tabHardInputValue) {
        alert('Ви не записали відповідь')
        return
    }
    tabHardBtn.addEventListener('click', function () {
        let answer = tabHard.createElement('p');
        answer.classList.add('answer');
        if (tabEasyInputValue.contains('')) {
            answer.textContent = 'Your answer is correct!';
            btnHard.classList.remove("active");
            tabHard.classList.remove("active")
        }
        else {
            answer.textContent = 'You answer is incorrect. Try again'
        }
    })
})







// let deadline = '09-01-2022';
// let inner = prompt("Write today date (mm-dd-yyyy)");
// function getTime(endtime) {
//     let newTime = new Date(2022, 1, 1);
//     console.log(newTime)

//     let time = Date.parse(deadline) - Date.parse(new Date());
//     console.log(time)

//     let seconds = Math.round((time / 1000) % 60);
//     let minutes = Math.round((time / 1000 / 60) % 60);
//     let hours = Math.round((time / (1000 * 60 * 60) % 24));
//     let days = Math.round(time / (1000 * 60 * 60 * 24))
//     console.log(seconds + ' seconds');
//     console.log(minutes + ' minutes');
//     console.log(hours + ' hours');
//     console.log(days + ' days');

//     return {
//         'total': time,
//         'days': days,
//         'hours': hours,
//         'minutes': minutes,
//         'seconds': seconds,
//     };
// }


// function setTime(id, endTime) {
//     let timer1 = document.getElementById(id)
//     let seconds = timer1.querySelector('.seconds')
//     let minutes = timer1.querySelector('.minutes')
//     let hours = timer1.querySelector('.hours')
//     let days = timer1.querySelector('.days')
//     let myInterval = setInterval(updateTime, 1000)
//     console.log(timer1)

//     function updateTime() {
//         let t = getTime(endTime);
//         console.log(t);
//         seconds.textContent = `${t.seconds} seconds`;
//         minutes.textContent = `${t.minutes} minutes`;
//         hours.textContent = `${t.hours} hours`;
//         days.textContent = `${t.days} days`;
//     }

//     // if (time.total <= 0) {
//     //     clearInterval(myInterval)

//     //     popup.classList.add("active")
//     //     popupBg.classList.add("active")
//     //     popupClose.addEventListener('click', function () {
//     //         popupBg.classList.remove("active")
//     //         popup.classList.remove("active")
//     //     })

//     //     document.addEventListener('click', (event) => {
//     //         if (event.target === popupBg) {
//     //             popupBg.classList.remove("active")
//     //             popup.classList.remove("active")
//     //         }
//     //     })
//     // }

//     updateTime()
// }

// setTime('timer1', inner)