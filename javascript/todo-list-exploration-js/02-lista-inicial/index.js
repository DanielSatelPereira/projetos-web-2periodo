const btnAdicionarTask = document.getElementById('addButton');

function addTask()
{
    const taskInput = document.getElementById("taskInput")
    const taskText = taskInput.value;
    console.log(taskText);
}

btnAdicionarTask.setAttribute('onclick', 'addTask()')
