const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const resultElement = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Paris', correct: true },
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false },
      { text: 'Rome', correct: false }
    ]
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Mars', correct: true },
      { text: 'Jupiter', correct: false },
      { text: 'Mercury', correct: false }
    ]
  },
  {
    question: 'What is capital of india?',
    answers: [
      { text: 'punjab', correct: false },
      { text: 'Rajasthan', correct: false },
      { text: 'Delhi', correct: true },
      { text: 'Mumbai', correct: false }
    ]
  },
  // Add more questions here
];

function showQuestion(question) {
  questionElement.innerText = question.question;
  answerButtons.innerHTML = '';
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  } else {
    score = 0;
  }

  answerButtons.childNodes.forEach(button => {
    button.disabled = true;
  });

  if (currentQuestionIndex === questions.length - 1) {
    showResult();
  } else {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
  }
}

function showResult() {
  questionElement.innerText = '';
  answerButtons.innerHTML = '';
  resultElement.innerText = score === questions.length ? 'Congratulations! You won!' : 'Sorry, you lost.';
}

// Start the quiz
showQuestion(questions[currentQuestionIndex]);
