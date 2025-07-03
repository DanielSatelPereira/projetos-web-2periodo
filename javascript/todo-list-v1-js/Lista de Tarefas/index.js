const btnAdicionarTask = document.getElementById('addButton');

function addTask() {
    // Pegar o valor digitado no campo de adicionar tarefa.
    const taskInput = document.getElementById('taskInput')
    const taskText = taskInput.value; // (string)

    // Pegar o elemento ul do HTML.
    const taskList = document.getElementById('taskList');

    // Criar o elemento li para a nossa ul.
    const newTask = document.createElement('li');
    const taskTextNode = document.createTextNode(taskText);
    newTask.appendChild(taskTextNode);

    //Adicionar o li dentro da ul
    if (taskText == "" ) {
        
       const aviso = document.getElementById('aviso');
       aviso.innerHTML = "DIgite uma tarefa";

    } else {
      
        taskList.appendChild(newTask);
        newTask.classList.add("item")
        aviso.innerHTML = "";
       
    }
}

btnAdicionarTask.setAttribute('onclick', 'addTask()')
