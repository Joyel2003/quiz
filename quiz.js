const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: ["Shakespeare", "Dickens", "Austen", "Hemingway"],
      correct: 0
    },
    {
      question: "Which programming language is used for web development?",
      answers: ["Java", "C++", "JavaScript", "Ruby"],
      correct: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result");
  
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionContainer.textContent = question.question;
    
    answerButtons.forEach((btn, index) => {
      btn.textContent = question.answers[index];
    });
  }
  
  function checkAnswer(answerIndex) {
    const correctAnswerIndex = questions[currentQuestion].correct;
  
    if (answerIndex === correctAnswerIndex) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz").style.display = "none"; // Hide the quiz container
    resultContainer.style.display = "block"; // Show the result container
    resultText.textContent = `You scored ${score} out of ${questions.length}!`;
  }
  
  function restartQuiz() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("quiz").style.display = "block"; // Show the quiz again
    resultContainer.style.display = "none"; // Hide the result
    loadQuestion();
  }
  
  loadQuestion();

  