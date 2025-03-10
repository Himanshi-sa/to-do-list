// Wait for DOM to Load
document.addEventListener('DOMContentLoaded', ()=> {
    // Selecting Elements
const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

// Retrieve Saved Tasks from localStorage
let tasks =JSON.parse( localStorage.getItem('tasks')) || [];

// Render Saved Tasks

tasks.forEach((task) => renderTask(task));

// Event Listener for Adding a Task
todoBtn.addEventListener("click", () => {
    const tasktext = todoInput.value.trim();
    
    // Prevents adding empty tasks.

    if (tasktext === "") return;

    const newTask = {
        id: Date.now(),
        text: tasktext,      
        completed: false      
    };

    tasks.push(newTask);
    savetasks();
    renderTask(newTask)
    todoInput.value = ""; 

    console.log(tasks);
});

function renderTask(task){
    
    const li= document.createElement('li');
    li.setAttribute('data-id',task.id);
    if(task.completed) li.classList.add("compeleted");
    li.innerHTML=`
    <span>${task.text}</span>
    <button>delete</button>
    `;
    // Mark Task as Completed
    li.addEventListener('click',(e) =>{
        if (e.target.tagName ==="BUTTON") return;
        task.completed = !task.completed;
        li.classList.toggle('completed')
        savetasks()
    })

    // Delete Task

    li.querySelector('button').addEventListener('click',(e)=>{
        e.stopPropagation();
        tasks=tasks.filter(t=>t.id !=task.id)
        li.remove();
        savetasks();
    })
    todoList.appendChild(li);
 }
//  Save Tasks to localStorage

function savetasks( ){
    localStorage.setItem("tasks",JSON.stringify(tasks));

}

})