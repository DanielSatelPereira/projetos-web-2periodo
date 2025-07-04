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
let score = 0;


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
  const question = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");

  if (selectedOption === question.answer) {
    feedback.textContent = "✅ Correto!";
    feedback.style.color = "green";
    score++;
  } else {
    feedback.textContent = `❌ Errado! A resposta correta era: ${question.answer}`;
    feedback.style.color = "red";
  }

  currentQuestionIndex++;

  setTimeout(() => {
    feedback.textContent = "";

    if (currentQuestionIndex < questions.length) {
      ShowQuestion(questions[currentQuestionIndex]);
    } else {
      showFinalScore(); // nova função abaixo
    }
  }, 1000);
}

function showFinalScore() {
  const questionContainer = document.getElementById("question-container");
  const feedback = document.getElementById("feedback");

  questionContainer.innerHTML = `
    <h2>Fim do Quiz!</h2>
    <p>Sua pontuação: ${score} de ${questions.length}</p>
    <button onclick="restartQuiz()">Reiniciar</button>
  `;

  feedback.textContent = "";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  ShowQuestion(questions[currentQuestionIndex]);
}

ShowQuestion(questions[currentQuestionIndex]);
