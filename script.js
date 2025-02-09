document.addEventListener('DOMContentLoaded', ()=> {
    const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

let tasks =JSON.parse( localStorage.getItem('tasks')) || [];

tasks.forEach((task) => renderTask(task));


todoBtn.addEventListener("click", () => {
    const tasktext = todoInput.value.trim();
    
    
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
    li.addEventListener('click',(e) =>{
        if (e.target.tagName ==="BUTTON") return;
        task.completed = !task.compeleted
        li.classList.toggle('compeleted')
        savetasks()
    })

    li.querySelector('button').addEventListener('click',(e)=>{
        e.stopPropagation
        task=tasks.filter(t=>t.id !=task.id)
        li.remove();
        li.savetasks();
    })
    todoList.appendChild(li);
 }

function savetasks( ){
    localStorage.setItem("tasks",JSON.stringify(tasks));

}

})