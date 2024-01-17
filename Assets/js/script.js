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
let check = document.getElementById('correct-wrong')
let scoresPage = document.getElementById('highscore-page')
let viewScores = document.getElementById('view-scores')
let questionIndex = 0
let points = 0
let submitScore = document.getElementById('submit-score')
let initials = document.getElementById('name')
let clear = document.getElementById('clearscores')
let back = document.getElementById('go-back')
let topList = document.getElementById('list')
//* object with arrays of questions answers and correct answers

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
        question: "Who composed soundtrack for movie Gladiator ?",
        choices: ["A. John Williams", "B. Hans Zimmer", "C. Elton John", "D. Danny Elfman "],
        correct: "B. Hans Zimmer"
    },
    {
        question: "Who was the lead singer of Queen ?",
        choices: ["A. John Stewart", "B. Freddie Mercury", "C. Elton John", "D. Ozzy Osbourne "],
        correct: "B. Freddie Mercury"
    }
];

//* event listener for start button

startButton.addEventListener("click", function () {
    //* setting main pages display to none to see only quiz page
    mainPage.style.display = "none"
    quizPage.style.display = "flex"
    countdown();
    showQuestion();
})

//* setting timer

let timeLeft = 40;
function countdown() {

    const timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timeInterval);
            timerEl.textContent = "Time: 0"
            scorePage()

        }
    }, 1000);
}


//* function to show each question

function showQuestion() {
    questionEl.textContent = questions[questionIndex].question
    answerBtn1.textContent = questions[questionIndex].choices[0];
    answerBtn2.textContent = questions[questionIndex].choices[1];
    answerBtn3.textContent = questions[questionIndex].choices[2];
    answerBtn4.textContent = questions[questionIndex].choices[3];
}

//* question one after each, adding points, reducing time and checking questions if correct

function checkAnswer(event) {

    if (event.target.matches("button")) {
        if (questions[questionIndex].correct === event.target.textContent) {
            check.textContent = "that's right!";
            points = points + 6;

        } else {
            timeLeft = timeLeft - 7;
            check.textContent = "Wrong! correct answer is " + questions[questionIndex].correct
        }


        showQuestion(questionIndex++);

        if (questionIndex + 1 == questions.length) {

            scorePage();
            timeLeft = 0
        }
    }
}

answerButtons.addEventListener("click", checkAnswer);


//* end-page

function scorePage() {


    mainPage.style.display = "none"
    quizPage.style.display = "none"
    quizEnd.style.display = "flex"
    quizEnd.children[0].textContent = 'Your final score is: ' + points
}



//* function for submit button

submitScore.addEventListener("click", function () {
    let highScores = []
    if (initials.value === "") {
        alert("please enter your name")
        return
    } else {
        highScores = JSON.parse(localStorage.getItem("highscores"))
        if (highScores !== null) {

            let newScore = {
                initials: initials.value,
                score: points
            }
            highScores.push(newScore)
        } else {
            highScores = [
                {
                    initials: initials.value,
                    score: points
                }
            ]
        }

    }

    //* saving information on local storage

    localStorage.setItem("highScores", JSON.stringify(highScores))
    topScoresPage()
}


)


function topScoresPage() {

    quizEnd.style.display = "none"
    scoresPage.style.display = "flex"
    //*grab information from local storage
    addList()


}


function addList() {

    let finalScore = JSON.parse(localStorage.getItem("highScores"))


    //* creating list to hold information and show on the page



    if (finalScore !== null) {
        for (let i = 0; i < finalScore.length; i++) {
            let list = document.createElement("li")
            list.textContent = finalScore[i].initials + " - " + finalScore[i].score + "points"
            //* adding to parent element
            topList.appendChild(list);
            console.log(finalScore)
            console.log(finalScore.length)
        }
    }
    else {
        topList.innerHTML = ""
    }
}



viewScores.addEventListener("click", function () {
    mainPage.style.display = "none"
    quizPage.style.display = "none"
    quizEnd.style.display = "none"
    scoresPage.style.display = "flex"
})

clear.addEventListener("click", function () {
    localStorage.clear();
    //* location.reload();
    topScoresPage()
});

back.addEventListener("click", function () {
    location.reload()
})


