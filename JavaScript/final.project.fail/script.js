const tasks = [];


(function (arrOfTasks) {
    const objOfTasks = arrOfTasks.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
    }, {});

    const tasksCards = document.querySelector(".tasks-cards");
    const form = document.forms['add-task'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];
    const inputDate = form.elements['timer'];



    renderAllTasks(objOfTasks);

    form.addEventListener('submit', onFormSubmitHandler)

    function renderAllTasks(taskList) {

        const fragment = document.createDocumentFragment();
        Object.values(taskList).forEach(task => {
            const taskCard = listItemTemplate(task)
            console.log(taskCard)
            fragment.appendChild(taskCard)
        })
        tasksCards.appendChild(fragment);
    }


    function listItemTemplate({ _id, title, body } = {}) {
        const col = document.createElement('div');
        col.classList.add('col-lg-4');

        const card = document.createElement('div');
        card.classList.add('card', 'text-light', 'bg-dark', 'm-3', 'p-3');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = title;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = body;

        // let cardTimer = function startTimer() {
        //     let deadline = inputDateValue;
        //     let inner = prompt("Введіть сьогоднішнє число (мм-дд-рррр)");
        //     console.log(inner)
        //     function getTime(endtime) {
        //         let newTime = new Date(2022, 1, 1);
        //         console.log(newTime)

        //         let time = Date.parse(deadline) - Date.parse(new Date());
        //         console.log(time)

        //         let seconds = Math.round((time / 1000) % 60);
        //         let minutes = Math.round((time / 1000 / 60) % 60);
        //         let hours = Math.round((time / (1000 * 60 * 60) % 24));
        //         let days = Math.round(time / (1000 * 60 * 60 * 24))
        //         console.log(seconds + ' seconds');
        //         console.log(minutes + ' minutes');
        //         console.log(hours + ' hours');
        //         console.log(days + ' days');

        //         return {
        //             'total': time,
        //             'days': days,
        //             'hours': hours,
        //             'minutes': minutes,
        //             'seconds': seconds,
        //         };
        //     }


        //     function setTime(id, endTime) {
        //         let timer1 = document.querySelector('.timer-container');
        //         let seconds = document.querySelector('.seconds');
        //         let minutes = document.querySelector('.minutes');
        //         let hours = document.querySelector('.hours');
        //         let days = document.querySelector('.days');
        //         let myInterval = setInterval(updateTime, 1000)
        //         console.log(timer1)
        //         function updateTime() {
        //             let t = getTime(endTime);
        //             console.log(t);
        //             seconds.textContent = `${t.seconds} seconds`;
        //             minutes.textContent = `${t.minutes} minutes`;
        //             hours.textContent = `${t.hours} hours`;
        //             days.textContent = `${t.days} days`;
        //         }

        //         if (time.total <= 0) {
        //             clearInterval(myInterval)
        //         }

        //         updateTime()
        //     }

        //     setTime('timer1', inner);
        // };


        // const btnBox = document.createElement('div')
        // btnBox.classList.add('btn-box')

        // const doneBtn = document.createElement('button');
        // doneBtn.classList.add('btn', 'done-btn');
        // doneBtn.textContent = 'Виконано';



        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn');
        deleteBtn.textContent = 'Видалити';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardTimer);
        card.appendChild(cardBody);
        // card.appendChild(btnBox);
        // btnBox.appendChild(doneBtn);
        card.appendChild(deleteBtn)
        col.appendChild(card);

        return col
    }

    function onFormSubmitHandler(e) {
        e.preventDefault()
        const inputTitleValue = inputTitle.value;
        const inputBodyValue = inputBody.value;
        // const inputDateValue = inputDate.value;
        if (!inputTitleValue || !inputBodyValue) {
            alert('Ви не заповнили завдання або опис')
            return
        }

        const task = createTask(inputTitleValue, inputBodyValue)
        const taskItem = listItemTemplate(task)
        tasksCards.insertAdjacentElement('afterbegin', taskItem)
        form.reset()
    }

    function createTask(title, body) {
        const newTask = {
            title,
            body,
            completed: false,
            _id: `task-${Math.random()}`
        };
        deleteBtn.addEventListener('click', function(){
            let taskId = newTask.getAttribute('_id');
            console.log(taskId);

            newTask.remove(taskId)
        })
        console.log(newTask);

        // startTimer()
        // timer1.classList.add('active');
        // seconds.classList.add('active');
        // minutes.classList.add('active');
        // hours.classList.add('active');
        // days.classList.add('active');

        objOfTasks[newTask._id] = newTask;
        return { ...newTask }
    }

})(tasks);