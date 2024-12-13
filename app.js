const tasksList = document.querySelector(".tasks");
const checkbox = document.getElementsByClassName("taskCheck");
const addTask = document.getElementById ("addBtn");
const taskText = document.getElementById("addTxt");

const delTask = document.getElementsByClassName("delete");

console.log(checkbox);

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


// prevent starover if Enter key preesed during new task creation
function enterPressed (event) {
    if (event. key === 'Enter') {
        window.alert('Enter key pressed! Use button "+" to add new task');
        event.preventDefault();
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
    newCheckBox.setAttribute("class", "taskCheck");
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

// striketrough text then box checked
function finishTask(event) {
    let box = event.target;
    // If checked strikethrough
                if (this.checked) {
                    
                    box.parentNode.setAttribute ("class", "boxChecked");
                }

                // If unchecked, remove the strikethrough
                else {
                    box.parentNode.classList.replace ("boxChecked", "boxUnchecked");
                }
}

// add listener for every checkbox
function addListenerToCheck() {        
    for (let i=0;i<checkbox.length;i++){
        checkbox[i].addEventListener('change',finishTask);   
        console.log(checkbox[i]);
    }          
}



addTask.addEventListener('click', createTask);
taskText.addEventListener('keydown', enterPressed);
addListenerToDeleteButtons ();
addListenerToCheck();