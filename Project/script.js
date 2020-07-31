const tasksList = getDataFromStorage('tasksList') || [];
let globalId;

class Task {
    constructor(id, title, description, type, taskImgUrl, datetime) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
        this.taskImgUrl = taskImgUrl;
        this.datetime = datetime;
    }
}

function addTaskFormSubmit() {
    const title = document.querySelector("#taskTitle").value;
    const description = document.querySelector("#taskDescription").value;
    const type = document.querySelector("#taskType").value;
    let taskImgUrl = document.querySelector("#taskImgUrl").value;
    taskImgUrl = taskImgUrl ? taskImgUrl : 'images/noimage.jpg';
    createNewTask(title, description, type, taskImgUrl);
}

function createNewTask(title, description, type, taskImgUrl) {
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    let id = Math.ceil(Math.random() * 1000000);

    const newTask = new Task(id, title, description, type, taskImgUrl, datetime);
    tasksList.push(newTask);
    saveDataToLocalStorage('tasksList', tasksList);
    hideFormFromScreen();
    // render Tasks on screen
    renderTasks();
}

function renderTasks() {
    // clean task list before render new
    const taskContainer = document.querySelector("#task-container");

    let taskHTMLToInsert = '';
    tasksList.forEach((task) => {
        taskHTMLToInsert += `<div class="col-3 mt-3">
                             <div class="card">
                              <img src="${task.taskImgUrl}" class="card-img-top" alt="tak type">
                              <div class="card-body">
                                <h5 class="card-title">${task.title}</h5>
                                <p>${task.datetime}</p>
                                <div class="tag" style="background-color: ${task.type === '1' ? 'red' : task.type === '2' ? 'yellow' : 'green'}"></div>
                                <p class="card-text">${task.description}</p>
                                <span class="edit-button" onclick="editTask(${task.id})">Редактировать</span>
                                <span class="delete-button" onclick="deleteTask(${task.id})">Удалить</span>
                              </div>
                             </div>
                             </div>`;
    })

    if (tasksList && tasksList.length) {
        taskContainer.innerHTML = taskHTMLToInsert;
    } else {
        taskContainer.innerHTML = `<div class="col-12 mt-5 text-center">
                                    <p>Список задач пуст</p>
                                  </div>`;
    }
}

function showFormOnScreen(edit) {
    const addTaskForm = document.querySelector("#taskForm");
    addTaskForm.style.display = "block";
    if (edit) {
        const action_container = document.querySelector("#action-button-container");
        action_container.innerHTML = `<button type="button" class="btn btn-primary" onclick="editTaskFormSubmit()">Сохранить изменения</button>
                                      <button type="button" class="btn btn-danger" onclick="hideFormFromScreen()">Отменить</button>`;
    }
}

function hideFormFromScreen() {
    const addTaskForm = document.querySelector("#taskForm");
    addTaskForm.style.display = "none";
}

function saveDataToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getDataFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function deleteTask(id) {
    const index = tasksList.findIndex((task) => {
        return task.id === id;
    });

    tasksList.splice(index, 1);
    saveDataToLocalStorage('tasksList', tasksList);
    renderTasks();
}

function editTask(id) {
    showFormOnScreen(true);
    globalId = id;
    const itemToEdit = tasksList.find((task) => {
        return task.id === id;
    });

    document.querySelector("#taskTitle").value = itemToEdit.title;
    document.querySelector("#taskDescription").value = itemToEdit.description;
    document.querySelector("#taskType").value = itemToEdit.type;
    document.querySelector("#taskImgUrl").value = itemToEdit.taskImgUrl;
}

function editTaskFormSubmit() {
    let itemToEdit = tasksList.find((task) => {
        return task.id === globalId;
    });

    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    itemToEdit.title = document.querySelector("#taskTitle").value;
    itemToEdit.description = document.querySelector("#taskDescription").value;
    itemToEdit.type = document.querySelector("#taskType").value;
    itemToEdit.taskImgUrl = document.querySelector("#taskImgUrl").value || 'images/noimage.jpg';
    itemToEdit.datetime = datetime;

    hideFormFromScreen();

    saveDataToLocalStorage('tasksList', tasksList);
    renderTasks();
}

renderTasks();