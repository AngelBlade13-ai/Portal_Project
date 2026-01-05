const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById('question')
const answerButtonElement= document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame (){
startButton.classList.add('hide')
shuffledQuestions = questions.sort(()=> Math.random() - .5)
currentQuestionIndex=0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion (){
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText= question.question
question.answers.forEach(answer =>{
    const button = document.createElement('button')
    button.innerText =answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
})
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
} else{ 
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
}
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
        
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
        element.classList.remove('correct')
        element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            { text: '4', correct: true },
            { text: '22', correct: false }
        ]
    },
    {
        question: 'What color is the sky on a clear day?',
        answers: [
            { text: 'Blue', correct: true },
            { text: 'Green', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Mars', correct: true },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: 'How many days are in a week?',
        answers: [
            { text: '7', correct: true },
            { text: '10', correct: false }
        ]
    },
    {
        question: 'Which language runs in a web browser?',
        answers: [
            { text: 'JavaScript', correct: true },
            { text: 'Python', correct: false }
        ]
    }
];