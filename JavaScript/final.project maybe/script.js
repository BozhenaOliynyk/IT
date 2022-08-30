const btnOpenTabs = document.querySelectorAll(".btn-tabs-open");
const tabsItem = document.querySelectorAll(".tabs-item");
const btnTabs = document.querySelector(".tabs__btn");
const tabsInput = document.querySelector(".tabs__input");
const popupDel = document.querySelector('.popup-del');
const popup = document.querySelector('.popup');
const popupBg = document.querySelector('.popup__bg');
const popupClose = document.querySelector('.popup__close');
const popupBtn = document.querySelector('.popup__btn');
const btnYes = document.querySelector('.btn-yes');
const btnNo = document.querySelector('.btn-no');


let deadline = '09-01-2022';
let inner = prompt("Write today date (mm-dd-yyyy)");
function getTime(endtime) {
    let newTime = new Date(2022, 1, 1);
    console.log(newTime)

    let time = Date.parse(deadline) - Date.parse(new Date());
    // console.log(time)

    let seconds = Math.round((time / 1000) % 60);
    let minutes = Math.round((time / 1000 / 60) % 60);
    let hours = Math.round((time / (1000 * 60 * 60) % 24));
    let days = Math.round(time / (1000 * 60 * 60 * 24))
    // console.log(seconds + ' seconds');
    // console.log(minutes + ' minutes');
    // console.log(hours + ' hours');
    // console.log(days + ' days');

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
}


function setTime(id, endTime) {
    let timer1 = document.getElementById(id)
    let seconds = timer1.querySelector('.seconds')
    let minutes = timer1.querySelector('.minutes')
    let hours = timer1.querySelector('.hours')
    let days = timer1.querySelector('.days')
    let myInterval = setInterval(updateTime, 1000)
    // console.log(timer1)

    function updateTime() {
        let t = getTime(endTime);
        console.log(t);
        seconds.textContent = `${t.seconds} seconds`;
        minutes.textContent = `${t.minutes} minutes`;
        hours.textContent = `${t.hours} hours`;
        days.textContent = `${t.days} days`;
    }

    // if (time.total = 0) {
    //     clearInterval(myInterval)

    //     popup.classList.add("active")
    //     popupBg.classList.add("active")
    //     popupClose.addEventListener('click', function () {
    //         popupBg.classList.remove("active")
    //         popup.classList.remove("active")
    //     })

    //     document.addEventListener('click', (event) => {
    //         if (event.target === popupBg) {
    //             popupBg.classList.remove("active")
    //             popup.classList.remove("active")
    //         }
    //     })
    // }

    updateTime()
}

setTime('timer1', inner)





btnOpenTabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let activeBtn = btn;
        // console.log(activeBtn);

        let tabId = activeBtn.getAttribute("data-tab");
        // console.log(tabId);

        let activeTab = document.querySelector(tabId);

        btnOpenTabs.forEach(function (btn) {
            btn.classList.remove('active');
        })

        tabsItem.forEach(function (item) {
            item.classList.remove('active');
        })

        activeBtn.classList.add('active');
        activeTab.classList.add('active');


        btnTabs.addEventListener('click', function () {
            const tabsInputValue = tabsInput.value;
            if (!tabsInputValue) {
                alert("You didn't write your answer")
            }

            const inputId = tabsInput.getAttribute('id');
            console.log(inputId)

            const tabsWrite = document.querySelector('.tabs-write');

            let answer = document.createElement('p');
            answer.classList.add('answer');
            tabsWrite.appendChild(answer);
            console.log(answer)
            btnTabs.addEventListener('click', function () {
                answer.textContent = ''
            })
            if (inputId == 'input_easy') {
                if (tabsInputValue.includes('Pumpkin')) {
                    answer.textContent = 'Your answer is correct!'
                }
                else {
                    answer.textContent = 'You answer is incorrect. Try again'
                }
            };
            if (inputId == 'input_middle') {
                if (tabsInputValue.includes('Its cover' || 'Cover')) {
                    answer.textContent = 'Your answer is correct!'
                }
                else {
                    answer.textContent = 'You answer is incorrect. Try again'
                }
            };
            if (inputId == 'input_hard') {
                if (tabsInputValue.includes('1 hrn and 2 hrn' || '2 hrn and 1 hrn')) {
                    answer.textContent = 'Your answer is correct!'
                }
                else {
                    answer.textContent = 'You answer is incorrect. Try again'
                }
            }

        })
    })
})





// const tasks = [];


// (function (arrOfTasks) {
//     const objOfTasks = arrOfTasks.reduce((acc, task) => {
//         acc[task._id] = task;
//         return acc;
//     }, {});

//     const tasksCards = document.querySelector(".tasks-cards");
//     const form = document.forms['add-task'];
//     const inputTitle = form.elements['title'];
//     const inputBody = form.elements['body'];

//     renderAllTasks(objOfTasks);

//     form.addEventListener('submit', onFormSubmitHandler)

//     function renderAllTasks(taskList) {
//         const fragment = document.createDocumentFragment();
//         Object.values(taskList).forEach(task => {
//             const taskCard = listItemTemplate(task)
//             console.log(taskCard)
//             fragment.appendChild(taskCard)
//         })
//         tasksCards.appendChild(fragment);
//     }


//     function listItemTemplate({ _id, title, body } = {}) {
//         const col = document.createElement('div');
//         col.classList.add('col-lg-4');

//         const card = document.createElement('div');
//         card.classList.add('card', 'text-light', 'bg-dark', 'm-3', 'p-3');

//         const cardBody = document.createElement('div');
//         cardBody.classList.add('card-body');

//         const cardTitle = document.createElement('h5');
//         cardTitle.classList.add('card-title');
//         cardTitle.textContent = title;

//         const cardText = document.createElement('p');
//         cardText.classList.add('card-text');
//         cardText.textContent = body;

//         const deleteBtn = document.createElement('button');
//         deleteBtn.classList.add('delete-btn');
//         deleteBtn.textContent = 'Delete';
//         const doneBtn = document.createElement('button');
//         doneBtn.classList.add('done-btn');
//         doneBtn.textContent = 'Done';

//         cardBody.appendChild(cardTitle);
//         cardBody.appendChild(cardText);
//         card.appendChild(cardBody);
//         card.appendChild(deleteBtn);
//         card.appendChild(doneBtn);
//         col.appendChild(card);

//         return col
//     }

//     function onFormSubmitHandler(e) {
//         e.preventDefault()
//         const inputTitleValue = inputTitle.value;
//         const inputBodyValue = inputBody.value;
//         if (!inputTitleValue || !inputBodyValue) {
//             alert("You didn't write riddle or answer")
//             return
//         }

//         const task = createTask(inputTitleValue, inputBodyValue)
//         const taskItem = listItemTemplate(task)
//         tasksCards.insertAdjacentElement('afterbegin', taskItem)
//         form.reset()
//     }

//     function createTask(title, body) {
//         const newTask = {
//             title,
//             body,
//             completed: false,
//             _id: `task-${Math.random()}`
//         };
//         console.log(newTask);

//         deleteBtn.addEventListener('click', function () {
//             popupDel.classList.add("active");
//             popupBg.classList.add("active");

//             btnNo.addEventListener('click', function () {
//                 popupDel.classList.remove("active");
//                 popupBg.classList.remove("active")
//             });

//             btnYes.addEventListener('click', function () {
//                 let taskId = newTask.getAttribute('_id');
//                 console.log(taskId);

//                 newTask.remove(taskId)
//             })
//         });

//         doneBtn.addEventListener('click', function () {
//             let taskId = newTask.getAttribute('_id');
//             console.log(taskId);

//             newTask.remove(taskId)
//         })

//         objOfTasks[newTask._id] = newTask;
//         return { ...newTask }
//     }

// })(tasks)