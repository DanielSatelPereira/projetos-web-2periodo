// Abriria uma conexão com o banco de dados
// Consulta os dados no banco de dados
// Pega o retorno e armazena na variável questions, no formato array

const questions = [
    {
        question: "Qual é a capital da frança?",
        options: ["Londres", "Berlim", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Júpiter", "Saturno", "Marte"],
        answer: "Júpiter"
    },
    {
        question: "Qual é a capital da França?",
        options: ["Berlim", "Madri", "Paris", "Lisboa"],
        answer: "Paris"
    },
    {
        question: "Qual é o elemento químico com símbolo 'O'?",
        options: ["Ouro", "Oxigênio", "Prata", "Carbono"],
        answer: "Oxigênio"
    },
    {
        question: "Qual é o maior oceano da Terra?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
        answer: "Oceano Pacífico"
    },
    {
        question: "Quem escreveu 'Dom Casmurro'?",
        options: ["Machado de Assis", "José de Alencar", "Graciliano Ramos", "Clarice Lispector"],
        answer: "Machado de Assis"
    },
    {
        question: "Qual é o sistema operacional mais utilizado no mundo?",
        options: ["Windows", "Linux", "macOS", "Android"],
        answer: "Windows"
    }    
];

let currentQuestionIndex = 0;

function ShowQuestion(question) {
    // Pegar o elemento da div vazia no html
    const questionContainer = document.getElementById("question-container")
    console.log(questionContainer)
    // Incluir a questão dentro da div vazia
    questionContainer.innerHTML = `
        <div>
            <h2>${question.question}</h2>
            ${question.options.map(
        (option, index) => `
                    <button class="option-btn" onclick="selectOption('${option}')">${option}</button>
                    `
    ).join('')
        }
            </div>
    `;
}

function selectOption(selectedOption) {
    console.log(selectedOption)
    const question = questions[currentQuestionIndex]
    console.log(question);
    if (selectedOption === question.answer) {
        alert("Correto");
    } else {
        alert("Errado! A resposta correta é: " + question.answer);
    }

    console.log(currentQuestionIndex);
    currentQuestionIndex++;
    console.log(currentQuestionIndex);

    if (currentQuestionIndex < questions.length) {
        ShowQuestion(questions[currentQuestionIndex]);
    } else {
        alert("Quiz Completo!");
    }
}

ShowQuestion(questions[currentQuestionIndex]);