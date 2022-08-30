// map 
// filter
// reduce



// let arr = ['Oleg', 'Ivan', 'Anna'];             
// let arr2 = arr.map (item => item.length);       //item.length - показує довжину кожного зелементів (кількість букв)
// console.log(arr2);




// let arr = [1,2,3,4,5]
// let result = arr.reduce(function(accumlator,item){
// return accumlator + item
// },0)

// console.log(result)




const tasks = [

    {
        _id: '36hu4h6ubhbjhbgj65hk5t6kk5khk4k',
        completed: true,
        body: 'Зробити щось',
        tetle: "Заголовок для нашої задачі"
    },
    {
        _id: '34sdafsdfsd',
        completed: true,
        body: 'Зробити щось 2',
        tetle: "Заголовок для нашої задачі 2"
    },
    {
        _id: '36hu4h6ubhbjhbgj6f3rsf5hk5t6kk5khk4k',
        completed: true,
        body: 'Зробити щось 3',
        tetle: "Заголовок для нашої задачі 3"
    },
    {
        _id: 'gj6f3rsf5hk5t6kk5khk4k',
        completed: true,
        body: 'Зробити щось 4',
        tetle: "Заголовок для нашої задачі 4"
    }

];

(function (arrOfTasks) {
    const objOfTasks = arrOfTasks.reduce((acc, task) => {
        acc[task._id] = task;
        return acc;
    }, {});

    const tasksCards = document.querySelector(".tasks-cards");
    const form = document.forms['add-task'];
    const inputTitle = form.elements['title'];
    const inputBody = form.elements['body'];


    renderAllTasks(objOfTasks);
    
    form.addEventListener('submit', onFormSubmitHandler)

    function renderAllTasks(taskList) {
        // console.log(Object.values(taskList))
        if (!taskList) {
            console.log("Ви не заповнили список задач")
            return
        }

        const fragment = document.createDocumentFragment();
        Object.values(taskList).forEach(task => {
            const taskCard = listItemTemplate(task)
            console.log(taskCard)
            fragment.appendChild(taskCard)
        })
        tasksCards.appendChild(fragment);
    }


    function listItemTemplate({ _id, title, body } = {}) {
        //console.log(_id, title, body)

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

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger', 'delete-btn');
        deleteBtn.innerHTML = 'Видалити';

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        card.appendChild(deleteBtn);
        col.appendChild(card);

        return col
    }

    function onFormSubmitHandler(e) {
        e.preventDefault()
        const titleValue = inputTitle.value;
        const inputBodyValue = inputBody.value;
        if(!titleValue || !inputBodyValue){
            alert('Ви не заповнили завдання або опис')
            return
        }

        const task = createTask(titleValue, inputBodyValue)
        const taskItem = listItemTemplate(task)
        tasksCards.insertAdjacentElement('afterbegin', taskItem)
        form.reset()
    }

    function createTask(title, body){
        const newTask = {
            title, 
            body, 
            completed: false,
            _id: `task-${Math.random()}`
        };
        console.log(newTask);

        objOfTasks[newTask._id] = newTask;
        return{ ...newTask}
    }
})(tasks);