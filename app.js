const tasksList = document.querySelector(".tasks");
const checkbox = document.getElementsByClassName("boxUnchecked");

const addTask = document.getElementById ("addBtn");
const taskText = document.getElementById("addTxt");

const delTask = document.getElementsByClassName("delete");
const keyTask = document.getElementsByClassName("important");




// set date and time
function updateDateTime() {
    let now = new Date();
    let currentDateTime = now.toLocaleString();
    document.getElementById('dateTime').textContent = currentDateTime;
}

// update time on the screen every second
setInterval(updateDateTime, 1000);



//add one task to the tasks list
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
        createButton (newTask, "delete");     
        addListenerToDeleteButtons (); 
        addListenerToCheck ();
        addListenerToImportantButtons () ;
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

// create checkbox and label for it
function createCheckBox (newTask, text) {

    let newLabel = document.createElement ("label");
    newLabel.innerText = text;
    newTask.appendChild(newLabel);

    let newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("type", "checkbox");
    newCheckBox.setAttribute("class", "boxUnchecked");
    newTask.prepend(newCheckBox);    

}

// add one button to the new task
function createButton(newTask, newBtnText) {
    let newButton = document.createElement("button");
    newButton.textContent = newBtnText;
    newTask.appendChild(newButton);
    newButton.setAttribute("class", newBtnText);   
}

//make text red if task important
function importantTask (event) {
    let task = event.target.parentNode;   
    
    task.classList.toggle("taskImportant");
    // task.style.color = 'red';
}

// add listener for every delete button
function addListenerToImportantButtons () {    
    for (let i=0;i<keyTask.length;i++){
        keyTask[i].addEventListener('click',importantTask); 
    }
}


//delete one task from the tasks list
function deleteTask(event) {
    let task = event.target.parentNode;    
    tasksList.removeChild(task);
}



// add listener for every delete button
function addListenerToDeleteButtons () {    
    for (let i=0;i<delTask.length;i++){
        delTask[i].addEventListener('click',deleteTask); 
    }
}

// striketrough text then box checked
function finishTask(boxEvent){
    
    if (boxEvent.target.checked) {
        boxEvent.target.nextElementSibling.setAttribute("class", "boxChecked");
    }  else {
        if( boxEvent.target.nextElementSibling 
            && boxEvent.target.nextElementSibling.classList)
            boxEvent.target.nextElementSibling.classList.replace ("boxChecked", "boxUnchecked");
    }
}

// add listener for every checkbox
function addListenerToCheck() {        
    for (let i=0;i<checkbox.length;i++){
        checkbox[i].addEventListener('change',finishTask);   
        
    }          
}



addTask.addEventListener('click', createTask);
taskText.addEventListener('keydown', enterPressed);
addListenerToDeleteButtons ();
addListenerToCheck();
addListenerToImportantButtons();