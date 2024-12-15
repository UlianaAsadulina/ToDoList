const tasksList = document.querySelector(".tasks");
const checkbox = document.getElementsByClassName("taskCheck");

const addTask = document.getElementById ("addBtn");
const taskText = document.getElementById("addTxt");

const editTask = document.querySelector(".edit");
const delTask = document.getElementsByClassName("delete");
const keyTask = document.getElementsByClassName("important");

let isChecked = [];
for (let i=0; i<tasksList.length; i++) {
    isChecked[i]=false;
}


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

// create checkbox and label for it
function createCheckBox (newTask, text) {

    let newLabel = document.createElement ("label");
    newLabel.innerText = text;
    newTask.appendChild(newLabel);

    let newCheckBox = document.createElement("input");
    newCheckBox.setAttribute("type", "checkbox");
    newCheckBox.setAttribute("class", "taskCheck");
    newLabel.prepend(newCheckBox);    

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
        
    }          
}


// edit task
function editTaskText (event) {   
    let task = event.target.parentNode; // list element 
    let child = task.childNodes; //all list children
    console.log(child);
    let text = child[1].innerText;
  
    
    
    // child[1].style.display="none";
    console.log(child[1].style);
    child[3].style.display="inline";
    child[3].value = text;  
    child[5].style.display='inline';
    child[7].style.display="none";
    child[9].style.display="none";
    child[11].style.display="none";
    // editSubmit(child);
        
}


function editSubmit (event) {
    let task = event.target.parentNode; // list element 
    let child = task.childNodes; //all list children
    console.log('after edit');
    console.log(child);
    let text = child[3].value; //edited value of input
    child[1].innerText = child[3].value;
    console.log(child[1].innerText);
    child[1].style.display="inline";
    child[1].childNodes.display = 'inline';
    child[3].style.display="none";
   
    child[5].style.display='none';
    child[7].style.display="inline";
    child[9].style.display="inline";
    child[11].style.display="inline";
}

addTask.addEventListener('click', createTask);
taskText.addEventListener('keydown', enterPressed);
addListenerToDeleteButtons ();
addListenerToCheck();
addListenerToImportantButtons();