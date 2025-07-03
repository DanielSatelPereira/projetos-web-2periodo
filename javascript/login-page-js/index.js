const email = document.getElementById('email');

const nome = document.getElementById('nome');

const addButton = document.getElementById('addButton');

function alerta() {
    const valorNome = nome.value;
    const valorEmail = email.value;

    if (valorNome == "" || valorEmail == "") {

        alert('Digite em todos os campos!')

    } else {
        alert("Concluído")
    }
}

addButton.setAttribute('onclick', 'alerta()')
