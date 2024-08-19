import { getTasks } from "./task";

// funcion para mostrar al usuario las tareas
export const renderTasks = () =>{
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
    const tasks = getTasks();
    console.log("tasks, ", tasks)

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        // añadir clase si la tarea esta completada 
        if(task.completed === true) {
            li.classList.add("completed")
        }

        li.innerHTML = `
            ${task.text}
            <button class = "delete"> Eliminar </button>
            <button class ="toggle">${ task.completed === false ? "Completar" : "Deshacer"}</button>
        `;

        taskList.appendChild(li);
    });
};

