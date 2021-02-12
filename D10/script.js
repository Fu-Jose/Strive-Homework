const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answersButtonsElement = document.getElementById("answer-buttons")
let score = 0
let randomQuestion, currentQuestionIndex




startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    nextQuestion()
})



function startGame() {
    startButton.classList.add("hide")
    randomQuestion = questions.sort(()=>Math.random()-.5)
    currentQuestionIndex = 0
    questionContainer.classList.remove("hide")
    nextQuestion()
}

function nextQuestion() {
    reset()
    showQuestion(randomQuestion[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", checkAnswer)
        answersButtonsElement.appendChild(button)
    })
}


function checkAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (correct==="true") {
        console.log(correct)
        score = score + 1 }
    
    setStatusClass(document.body, correct)
    Array.from(answersButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestion.length > currentQuestionIndex + 1){
    nextButton.classList.remove("hide")
    } else {
        reset()
        results = document.getElementById("question").innerText = `Your final score is ${score} out of 10`

        startButton.innerText = "Restart"
        if (startButton.innerText === "Restart"){
            score = 0
        }
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function reset() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answersButtonsElement.firstChild){
        answersButtonsElement.removeChild(answersButtonsElement.firstChild)
    }
}

//**********Array of questions*************
const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            {text: "4", correct: true},
            {text: "5", correct: false},
            {text: "6", correct: false},
            {text: "7", correct: false},
        ]
    },
    {
        question: "What is NOT a real drink?",
        answers: [
            {text: "Coca-Cola", correct: false},
            {text: "Fanta", correct: false},
            {text: "Tantrum", correct:true},
            {text: "7-Up", correct: false},
        ]
    },
    {
        question: "In which continent is Ecuador located?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Europe", correct: false},
            {text: "Africa", correct:false},
            {text: "South America", correct:true},
        ]
    },
    {
        question: "Who was the first King of Rome?",
        answers: [
            {text: "Cesare", correct: false},
            {text: "Romulus", correct: true},
            {text: "Augustus", correct:false},
            {text: "Francesco Totti", correct: false},
        ]
    },
    {
        question: "What was the name of John Wick first dog?",
        answers: [
            {text: "Edward", correct: false},
            {text: "Bobby", correct: false},
            {text: "Daisy", correct:true},
            {text: "Cookie", correct: false},
        ]
    },
    {
        question: "How many stars did the first US flag have?",
        answers: [
            {text: "50", correct: false},
            {text: "13", correct: true},
            {text: "17", correct:false},
            {text: "48", correct: false},
        ]
    },
    {
        question: "What is the capital of Spain?",
        answers: [
            {text: "Sevilla", correct: false},
            {text: "Valencia", correct: false},
            {text: "Barcelona", correct: false},
            {text: "Madrid", correct: true},
        ]
    },
    {
        question: "What is the name of Pink Floyd's debut album?",
        answers: [
            {text: "The Wall", correct: false},
            {text: "The Darkside of the Moon", correct: false},
            {text: "The Piper at the Gates of Dawn", correct:true},
            {text: "Animals", correct: false},
        ]
    },
    {
        question: "How many centimeters in an inch?",
        answers: [
            {text: "6cm", correct: false},
            {text: "2.54cm", correct: true},
            {text: "13cm", correct: false},
            {text: "2.2cm", correct: false},
        ]
    },
    {
        question: "What is the seventh planet from the sun?",
        answers: [
            {text: "Uranus", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Moon", correct: false},
            {text: "Mercury", correct: false},
        ]
    }
]