 
// quiz.js
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// Fetch questions from the server
async function fetchQuestions() {
    const response = await fetch('/api/questions');
    if (response.ok) {
        questions = await response.json();
        displayQuestion();
    } else {
        alert('Failed to load questions');
    }
}

// Display current question
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');

    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        optionsElement.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.innerText = option;
            optionButton.onclick = () => selectOption(index);
            optionsElement.appendChild(optionButton);
        });
    } else {
        showScore();
    }
}

// Handle option selection
function selectOption(index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.options[index] === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

// Show score at the end
function showScore() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;
}

// Fetch questions when the page loads
window.onload = fetchQuestions;
