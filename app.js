const tasksList = document.querySelector(".tasks");
const addTask = document.getElementById ("addBtn");
const taskText = document.getElementById("addTxt");
// const delTask = document.querySelector(".delete");
const delTask = document.getElementsByClassName("delete");


// this function updates the date and time
function updateDateTime() {
    let now = new Date();
    let currentDateTime = now.toLocaleString();
    document.getElementById('dateTime').textContent = currentDateTime;
}

// update time on the screen every second
setInterval(updateDateTime, 1000);



//this function adds one task to the tasks list
function createTask() {
    let newTask = document.createElement("li") ;
    let text = taskText.value;
    if (text==="") {
        window.alert("Your task is empty!");
    }
    else {
        newTask.textContent = text;
        tasksList.appendChild(newTask); 
        createButton (newTask, "important");
        createButton (newTask, "edit"); 
        createButton (newTask, "delete");       
        clearInput();
    } 
} 

// reset empty input after task creation
function clearInput() {
    taskText.value="";
}

// this function adds one button to the new task
function createButton(newTask, newBtnText) {
    console.log(newBtnText);
    let newButton = document.createElement("button");
    newButton.textContent = newBtnText;
    console.log(newButton.textContent);
    newTask.appendChild(newButton);
    newButton.setAttribute("class", newBtnText);
    console.log(newTask);



}

//this function deletes one task from the tasks list
function deleteTask(event) {
    console.log(event.target);
    let task = event.target.parentNode;
    console.log(task);
    tasksList.removeChild(task);
}

// this function adds listener for every delete button
function addListenerToDeleteButtons () {    
    for (let i=0;i<delTask.length;i++){
            delTask[i].addEventListener('click',deleteTask);
            console.log(delTask[i]);
    }
}

addTask.addEventListener('click', createTask);
addListenerToDeleteButtons ();

