const tasksList = document.querySelector(".tasks");
const addTask = document.getElementById ("addBtn");
const taskText = document.getElementById("addTxt");

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
        
        tasksList.appendChild(newTask); 
        createCheckBox(newTask, text);
        createButton (newTask, "important");
        createButton (newTask, "edit"); 
        createButton (newTask, "delete");     
        addListenerToDeleteButtons ();  
        clearInput();
    } 
} 

// reset empty input after task creation
function clearInput() {
    taskText.value="";
}

// create checkbox asnd label for it
function createCheckBox (newTask, text) {

    let newLabel = document.createElement ("label");
    newLabel.innerText = text;
    newTask.appendChild(newLabel);

    let newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("type", "checkbox");
    newLabel.prepend(newCheckBox);    

}

// this function adds one button to the new task
function createButton(newTask, newBtnText) {
    let newButton = document.createElement("button");
    newButton.textContent = newBtnText;
    newTask.appendChild(newButton);
    newButton.setAttribute("class", newBtnText);   
}

//this function deletes one task from the tasks list
function deleteTask(event) {
    let task = event.target.parentNode;    
    tasksList.removeChild(task);
}

// this function adds listener for every delete button
function addListenerToDeleteButtons () {    
    for (let i=0;i<delTask.length;i++){
            delTask[i].addEventListener('click',deleteTask);            
    }
}

addTask.addEventListener('click', createTask);
addListenerToDeleteButtons ();