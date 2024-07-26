let taskInput = document.getElementById('add-new-task');
let taskList = document.getElementById('task-list');

function addTask(){
    let taskText = taskInput.value.trim();
    if(taskText != ''){
        const li = document.createElement('li');
        li.textContent=taskText;
        taskList.appendChild(li);
        taskInput.value='';
    }

}