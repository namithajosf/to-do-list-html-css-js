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

function completeTask(event){
    const task = event.target;
    task.classList.toggle('completed');
}
li.addEventListener('click', completeTask);

function deleteTask(event){
    const task=event.target.parentElement;
    taskList.removeChild(task);
}

const deleteBtn=document.createElement('button');
deleteBtn.textContent='Delete';
deleteBtn.addEventListener('click', deleteTask);
li.appendChild(deleteBtn);