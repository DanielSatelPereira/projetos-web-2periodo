const taskInput = document.getElementById('taskInput');
const datetimeInput = document.getElementById('datetimeInput');
const locationInput = document.getElementById('locationInput');
const peopleInput = document.getElementById('peopleInput');

const taskList = document.getElementById('taskList');
const aviso = document.getElementById('aviso');

const btnAdd = document.getElementById('addButton');
const btnAgenda = document.getElementById('agendaButton');

btnAdd.addEventListener('click', () => {
  const task = taskInput.value.trim();
  const datetime = datetimeInput.value.trim();
  const location = locationInput.value.trim();
  const people = peopleInput.value.trim();

  if (!task || !datetime || !location || !people) {
    aviso.innerHTML = "⚠️ <strong>Preencha todos os campos obrigatórios!</strong>";
    aviso.classList.add("ativo");

    clearTimeout(aviso._timeout);
    aviso._timeout = setTimeout(() => {
      aviso.innerHTML = "";
      aviso.classList.remove("ativo");
    }, 1500);
    return;
  }

  const newTask = document.createElement('li');
  newTask.classList.add("item");
  newTask.innerHTML = `
  <div class="task-line"><span>✏️</span><span>${task}</span></div>
  <div class="task-line"><span>📅</span><span>${datetime}</span></div>
  <div class="task-line"><span>📍</span><span>${location}</span></div>
  <div class="task-line"><span>👥</span><span>${people}</span></div>
  `;

  taskList.appendChild(newTask);

  // limpar campos
  taskInput.value = "";
  datetimeInput.value = "";
  locationInput.value = "";
  peopleInput.value = "";
  aviso.textContent = "";
});

btnAgenda.addEventListener('click', () => {
  alert("📢 Integração com Google Agenda em construção!");
});
