const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

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
    console.log(li);


    li.innerHTML = `<input type = "checkbox" class ="complete-checkbox">
    <span class= "task">${task.text}</span>
    <button class = "edit-btn">Edit</button>
    <button class ="delete-btn">Delete</button>
    `
    todoList.appendChild(li);

    //att


}

//attach fun

//handle delete 

//handle edit fun



function saveTaskToLocalStorage(task){

    const oldTasks = getTasksFromLocalSrorage()

    oldTasks.push(task);

    localStorage.setItem("tasks",JSON.stringify(oldTasks));

}

function getTasksFromLocalSrorage(){
 
    const oldTasks = JSON.parse (localStorage.getItem("tasks")) || [];
    return oldTasks;
    
}