
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
let questionValue = document.getElementById('question')

let questions = [
    {
        question: "Question 1 : George Harrison was member of which rock band?",
        choices: ["a. Led zeppelin", "b. Pink floyd", "c. The beatles", "d. Rolling stones "],
        correct: "c"
    },
    {
        question: "Question 2 : Who was the youngest member of Jackson 5?",
        choices: ["a. Michael Jackson", "b. Randy Jackson", "c. Jermaine Jackson", "d. Jackie Jackson"],
        correct: "a"
    },
];
console.log(questions)
startButton.addEventListener("click", function() {

  countdown();

} )
function countdown() {
    let timeLeft = 60;
    const timeInterval = setInterval(function () {
    if (timeLeft > 0) {

        timerEl.textContent = `Time: ${timeLeft}`;
        timeLeft--;
    
    } else {
        
        timerEl.textContent = 'Time: 0';
        clearInterval(timeInterval);
        quizfinish() //have to create
        
    }
    }, 1000);
}
