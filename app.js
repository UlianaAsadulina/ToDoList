const tasksList = document.querySelector(".tasks");
const addTask = document.getElementById ("addBtn");
const taskText = document.getElementById("addTxt");





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

addTask.addEventListener('click', createTask) ;