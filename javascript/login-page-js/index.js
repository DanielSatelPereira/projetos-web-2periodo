const email = document.getElementById('email');
const nome = document.getElementById('nome');
const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

  const valorNome = nome.value.trim();
  const valorEmail = email.value.trim();

  const confirmacao = confirm(
    `Confirma envio das informações?\n\nNome: ${valorNome}\nEmail: ${valorEmail}`
  );

  if (confirmacao) {
    alert('Concluído!');
    form.reset();
    nome.focus();
  }
});
