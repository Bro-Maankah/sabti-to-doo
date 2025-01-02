const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');


// Pomodoro Timer Variables
let pomodoroTimer;
let timerRunning = false;
let remainingSeconds = 25 * 60; // 25 minutes

// Timer Elements
const timerMinutes = document.querySelector('#timer-minutes');
const timerSeconds = document.querySelector('#timer-seconds');
const startButton = document.querySelector('#start-timer');
const pauseButton = document.querySelector('#pause-timer');
const resetButton = document.querySelector('#reset-timer');

document.addEventListener("DOMContentLoaded",loadTasks);

function loadTasks(){

    //getting all tasks from local strage 

    const tasks = getTasksFromLocalSrorage();

    tasks.forEach(task => {
        addTaskToDOM(task)
    })

}


todoForm.addEventListener('submit',addTask);

function addTask(e){
    //waxa ay ka ilaalinaysaa default action ee formka
    e.preventDefault();


    const taskText = todoInput.value.trim();

    // TEST TASK 
    // console.log(taskText);

    if (taskText !==''){

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        }
        // adding to the dom
        addTaskToDOM(task);
        saveTaskToLocalStorage(task);
        //faaruji check bokeska kadib mar ka aad dirto 
        todoInput.value = ""
    }

}


function addTaskToDOM(task){ 

    // shaqada koobaad waa inaan samayno li

    const li = document.createElement("li")

    li.className = `todo-item ${task.completed ? "completed":""}`;
    li.dataset.id = task.id;

    //test li
    //console.log(li);


    li.innerHTML = `<input type = "checkbox" class ="complete-checkbox" ${task.completed ? "checked" : ""}>
    <span class= "task">${task.text}</span>
    <button class = "edit-btn">Edit</button>
    <button class ="delete-btn">Delete</button>
    `
    todoList.appendChild(li);

    attachEventListeners(li,task)



}

function attachEventListeners(li,task){
    const deleteBtn = li.querySelector(".delete-btn")
    const editBtn = li.querySelector(".edit-btn")
    const checkbox = li.querySelector(".complete-checkbox")


    deleteBtn.addEventListener("click",function(){
        //testing the deete event
        //console.log("delete btn clicked",task)
    
        handleDelete(task.id, li)
    })

    //edit button event listener
    editBtn.addEventListener("click",function(){
       

        // testing the edit event
        // console.log("edit btn clicked",task)

        handleEdit(task.id,li)
    })


    checkbox.addEventListener("change",function(){
        
        //test checkbox
        //console.log("checked",checkbox.checked)
        
        toggleTaskCompletion(task.id, li,checkbox.checked)
        
    })


}

function handleDelete(id, li){

    let tasks = getTasksFromLocalSrorage();
    tasks = tasks.filter(task=> task.id !=id);

    //test this function
    //console.log(tasks)

    //updating local storage
    localStorage.setItem('tasks',JSON.stringify(tasks));
    li.remove();

}

function handleEdit (id,li){
    const taskSpan = li.querySelector(".task");
    //console.log(taskSpan.textContent)
    const newTaskText = prompt("Edit Your Task:", taskSpan.textContent)

    if (newTaskText !== null && newTaskText.trim() !== "" ){
        
        //UPDATE THE Local Storage
        updateTask(id, newTaskText); 
        //update the DOM
        taskSpan.textContent = newTaskText;
    }

}

function updateTask(id, newTaskText ){

    const tasks = getTasksFromLocalSrorage();
    const task = tasks.find(task => task.id == id );

    if (task){
        task.text = newTaskText;
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

}

function toggleTaskCompletion(id,li,isCompleted){

    const tasks = getTasksFromLocalSrorage();
    const task = tasks.find(task => task.id == id)

    if (task){
        task.completed = isCompleted;
        localStorage.setItem("tasks",JSON.stringify(tasks))
        li.classList.toggle("completed", isCompleted);
    }

}



function saveTaskToLocalStorage(task){

    const oldTasks = getTasksFromLocalSrorage()

    oldTasks.push(task);

    localStorage.setItem("tasks",JSON.stringify(oldTasks));

}

function getTasksFromLocalSrorage(){
 
    const oldTasks = JSON.parse (localStorage.getItem("tasks")) || [];
    return oldTasks;
    
}



// Timer Functions
function updateTimerDisplay() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    timerMinutes.textContent = String(minutes).padStart(2, '0');
    timerSeconds.textContent = String(seconds).padStart(2, '0');
}

function startPomodoro() {
    if (timerRunning) return;
    timerRunning = true;

    pomodoroTimer = setInterval(() => {
        if (remainingSeconds > 0) {
            remainingSeconds--;
            updateTimerDisplay();
        } else {
            clearInterval(pomodoroTimer);
            timerRunning = false;
            alert("Pomodoro session completed!");
        }
    }, 1000);
}

function pausePomodoro() {
    clearInterval(pomodoroTimer);
    timerRunning = false;
}

function resetPomodoro() {
    clearInterval(pomodoroTimer);
    timerRunning = false;
    remainingSeconds = 25 * 60; // Reset to 25 minutes
    updateTimerDisplay();
}

// Event Listeners for Timer Controls
startButton.addEventListener('click', startPomodoro);
pauseButton.addEventListener('click', pausePomodoro);
resetButton.addEventListener('click', resetPomodoro);

// Initial Timer Display Update
updateTimerDisplay();
