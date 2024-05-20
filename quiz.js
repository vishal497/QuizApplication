// const quizData = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Madrid", "Paris", "Rome"],
//         answer: "Paris"
//     },
//     {
//         question: "Who wrote 'Romeo and Juliet'?",
//         options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"],
//         answer: "William Shakespeare"

//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Jupiter", "Venus"],
//         answer: "Mars"
//     }
// ]



const questions = [
    {
        question: "Which of the following is not a JavaScript framework?",
        answers: [
            { text: "React", correct: false },
            { text: "Angular", correct: false },
            { text: "Vue", correct: false },
            { text: "Bootstrap", correct: true },
        ]
    },
    {
        question: "What does the 'DOM' stand for in frontend development? ",
        answers: [
            { text: "Document Object Model", correct: true },
            { text: "Data Oriented Model", correct: false },
            { text: "Dynamic Object Model", correct: false },
            { text: "Document Oriented Model", correct: false },
        ]
    },
    {
        question: "Which of the following is used to create responsive designs in CSS?",
        answers: [
            { text: "Grid", correct: false },
            { text: "Media queries", correct: false },
            { text: "Flexbox", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "What is the purpose of using 'async' and 'await' in JavaScript? ",
        answers: [
            { text: "To handle synchronous operations  ", correct: false },
            { text: "To handel asynchronous operation", correct: true },
            { text: "To handel errors", correct: false },
            { text: "To handle loops", correct: false },
        ]
    },
    {
        question: "Which of the following is used to center an element horizontally and vertically in CSS? ",
        answers: [
            { text: "display: flex; justify-content: center; align-items: center;", correct: true },
            { text: "display: grid; justify-content: center; align-content: center;", correct: false },
            { text: "display: table; margin: auto;", correct: false },
            { text: "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);", correct: false },
        ]
    },
    {
        question: "Which of the following is used to add interactivity to HTML elements using JavaScript?",
        answers: [
            { text: "event listeners", correct: true },
            { text: "variables", correct: false },
            { text: "functions", correct: false },
            { text: "loops", correct: false },
        ]
    },
    {
        question: "Which of the following is used to make HTTP requests in JavaScript? ",
        answers: [
            { text: "XMLHttpRequest", correct: false },
            { text: "fetch()", correct: false },
            { text: "axios", correct: false },
            { text: " All of the above", correct: true },
        ]
    },
    {
        question: " Which of the following is used to create reusable components in React? ",
        answers: [
            { text: "Class components", correct: false },
            { text: "Function components", correct: false },
            { text: "Both A and B", correct: true },
            { text: "Neither A nor B", correct: false },
        ]
    },
    {
        question: "Which of the following is used to manage state in a React application? ",
        answers: [
            { text: "useState hook ", correct: false },
            { text: "useEffect hook", correct: false },
            { text: "Redux", correct: false },
            { text: "All of the above", correct: true },
        ]
    },
    {
        question: "Which of the following is a method to create a new HTML element in JavaScript?",
        answers: [
            { text: "createElement('div')`", correct: false },
            { text: "new HTMLDivElement()", correct: false },
            { text: "document.createElement('div')", correct: false },
            { text: "document.create('div')", correct: true },
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    nextButton.style.display= "none";
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild)
        answerButtons.removeChild(answerButtons.firstChild);
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
        score++;

    }
    else {
        selectedBtn.classList.add("incorrect");
        nextButton.style.display ="block";
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";


}
function showScore() {
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }

}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

startQuiz();


