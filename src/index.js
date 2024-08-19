import { renderTasks} from "./ui"
import { addTask, deleteTask, toggleTask} from "./task"

document.addEventListener("DOMContentLoaded", ()=>{
    renderTasks();

    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const taskInput = document.getElementById("task-input").value;

        if(taskInput !== ""){
            addTask(taskInput);
            renderTasks();
            // limpiar el valor del input
            document.getElementById("task-input").value = ""
        };
    });
}); 

document.getElementById("task-list").addEventListener("click", (e) =>{
    if(e.target.classList.contains("delete")){
        const taskId= e.target.parentElement.getAttribute("data-id");
        deleteTask(taskId);
        renderTasks();
    }

    if(e.target.classList.contains("toggle")){
        const taskId= e.target.parentElement.getAttribute("data-id");
        toggleTask(taskId);
        renderTasks();
    }
})