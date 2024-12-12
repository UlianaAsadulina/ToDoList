const tasksList = document.querySelector(".tasks");
const addTask = document.getElementById ("addBtn");
const taskText = document.getElementById("addTxt");
const delTask = document.querySelector(".delete");




//this function add one task to the tasks list
function createTask() {
    let newTask = document.createElement("li") ;
    let text = taskText.value;
    if (text==="") {
        window.alert("Your task is empty!");
    }
    else {
        newTask.textContent = text;
        tasksList.appendChild(newTask); 
        taskText.value="";
    } 
} 

//this function delete one task from the tasks list
function deleteTask(event) {
    console.log(event.target);
    let task = event.target.parentNode;
    console.log(task);
    tasksList.removeChild(task);
}

addTask.addEventListener('click', createTask);
delTask.addEventListener('click', deleteTask);