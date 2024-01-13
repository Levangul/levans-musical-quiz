
//* GIVEN I am taking a code quiz
//* WHEN I click the start button
//* THEN a timer starts and I am presented with a question
//* WHEN I answer a question
//* THEN I am presented with another question
//* WHEN I answer a question incorrectly
//* THEN time is subtracted from the clock
//* WHEN all questions are answered or the timer reaches 0
//* THEN the game is over
//* WHEN the game is over
//* THEN I can save my initials and my score

let timerEl = document.getElementById('timeleft')
let startButton = document.getElementById('start-button')
let quizPage = document.getElementById('quiz-page')
let mainPage = document.getElementById('starter-page')
let answerButtons = document.getElementById('answer-buttons')
let quizEnd = document.getElementById('quizend-page')
let questionEl = document.getElementById('question')
let answerBtn1 = document.getElementById('answer1');
let answerBtn2 = document.getElementById('answer2');
let answerBtn3 = document.getElementById('answer3');
let answerBtn4 = document.getElementById('answer4');
let check =  document.getElementById('correct-wrong')
let questionIndex = 0
let points = 0


let questions = [
    {
        question: "George Harrison was member of which rock band?",
        choices: ["A. Led zeppelin", "B. Pink floyd", "C. The beatles", "D. Rolling stones "],
        correct: "C. The beatles"
    },
    {
        question: "Who was the youngest member of Jackson 5?",
        choices: ["A. Michael Jackson", "B. Randy Jackson", "C. Jermaine Jackson", "D. Jackie Jackson"],
        correct: "A. Michael Jackson"
    },
    {
        question: "What kind of instrument did Miles Davis play?",
        choices: ["A. Trumpet", "b. Piano", "c. Guitar", "d. Drum "],
        correct: "A. Trumpet"
    },
    {
        question: "Who was the lead singer of Queen ?",
        choices: ["A. John Stewart", "B. Freddie Mercury", "C. Elton John", "D. Ozzy Osbourne "],
        correct: "B. Freddie Mercury"
    },
    {
        question: "How many strings are on a standart guitar ?",
        choices: ["A. 3", "B. 4", "C. 5", "D. 6"],
        correct: "D. 6"
    },
    {
        question: "What genre of music is Herbie Hancock famous for ?",
        choices: ["A. Pop", "B. Soul", "C. Jazz-Funk", "D. Rock "],
        correct: "C. Jazz-Funk"
    },
    {
        question: "Who was the lead singer of Queen ?",
        choices: ["A. John Stewart", "B. Freddie Mercury", "C. Elton John", "D. Ozzy Osbourne "],
        correct: "B. Freddie Mercury"
    }
];


function showQuestion () {
    questionEl.textContent = questions[questionIndex].question
    answerBtn1.textContent = questions[questionIndex].choices[0];
    answerBtn2.textContent = questions[questionIndex].choices[1];
    answerBtn3.textContent = questions[questionIndex].choices[2];
    answerBtn4.textContent = questions[questionIndex].choices[3];
}
function checkAnswer(event) {
    
    if (event.target.matches("button") ) 
    
    {  
    if (questions[questionIndex].correct === event.target.textContent) {
        check.textContent = "that's right!";
        points = points +1;

    } else {timeLeft = timeLeft -5; 
        check.textContent = "Wrong! correct answer is " + questions[questionIndex].correct}
    
    
        showQuestion(questionIndex++); 
        
        if (questionIndex +1 == questions.length) {
            
            scorePage();
            //* saveScore();
            timeLeft = 0
        } 
        console.log(points)
}      
} 

answerButtons.addEventListener("click", checkAnswer);

startButton.addEventListener("click", function() {
    mainPage.style.display = "none"
    quizPage.style.display = "flex"
    countdown();
    showQuestion();
} )

function scorePage() {
    
    mainPage.style.display = "none"
    quizPage.style.display = "none"
    quizEnd.style.display = "flex"
    quizEnd.children[0].textContent = 'Your final score is: ' + points
    
    
    
}

let timeLeft = 40;
function countdown() {

    const timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;
        
    if (timeLeft <= 0) {
        
        clearInterval(timeInterval);
        timerEl.textContent = "Time: 0"
        scorePage()
        //* saveScore(); have to create
        
        
    }
    }, 1000);
}
