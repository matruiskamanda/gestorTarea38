// Obtener la lista de Tareas del almacenamiento del navegador "Local Storage"
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Funcion para poder llevar las tareas de la lista
export const getTasks = () => tasks;
// Funcion para agregar una nueva lista de tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// funcion para eliminar una tarea de la lista 
export const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id))
    localStorage.setItem("tasks", JSON.stringify(tasks))
};

// funcion para actualizar una tarea de la lista 
export const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)){
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


