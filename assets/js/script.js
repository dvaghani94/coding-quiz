var startBtn = document.querySelector(".btn-start");
var quiz = document.querySelector("#quiz-section");
var quizStarter = document.querySelector(".container");

// //   countDown(time);
//   grabbing();
  

var codingQuestion = [ {
    question: "which does css stand for?",
    options: [
        {option: "casacading style sheet", answer: true},
        {option: "cascading sheet style", answer: false},
        {option: "cresending style sheet", answer: false},
        {option: "cresting style sheet", answer: false},
    ],
},
{
    question: "Which tag is commonly used first in an html?",
    options: [
        {option: "footer", answer: false},
        {option: "header", answer: false},
        {option: "body", answer: false},
        {option: "html", answer: true},
    ],
},
{
    question: "what is the closing tag for <h2>",
    options: [
        {option: "<h2>", answer: false},
        {option: "</h2>", answer: true},
        {option: "<h1>", answer: false},
        {option: "</h1>", answer: false},
    ],
},
{
    question: "What does js stand for?",
    options: [
        {option: "javascore", answer: false},
        {option: "javaships", answer: false},
        {option: "javascript", answer: true},
        {option: "javasyrup", answer: false},
    ],
},
{
    question: "How do you attach an img in html?", 
    options: [
        {option: "<img src=", answer: true},
        {option: "<img", answer: false},
        {option: "<img tag", answer: false},
        {option: "<src img", answer: false},
    ],
}
];



startBtn.addEventListener("click", startQuiz);

var quizQuestions = document.querySelector("#question-text");
var answerChoice = document.querySelector("#buttons-group");


function startQuiz() {
    console.log(startBtn);
   startBtn.classList.add("hide");
   quizStarter.classList.add("hide");
   randomQuestions = codingQuestion.sort()
   currentQuestion = 0;
   quiz.classList.remove("hide");
   setNext()
}

var nextBtn = document.querySelector(".btn-next")
nextBtn.addEventListener("click", () => {
    currentQuestion++
    setNext();
    // grabbing();
})

function setNext() {
    questionList(randomQuestions[currentQuestion]);
}

function questionList(question) {
    //if (currentQuestion >= quizQuestions.length) {
      //  showScore()
    //}

    quizQuestions.innerText = question.question;

    answerChoice.innerHTML = "";

    question.options.forEach(option => {

        console.log(option.option);
        console.log(option.answer);

        var optionBtn = document.createElement("button");
        optionBtn.innerText = option.option;
        optionBtn.classList.add("btn");
        if (option.answer) {
            optionBtn.dataset.answer = option.answer;
        }
        optionBtn.addEventListener("click", checkAnswer);
        answerChoice.appendChild(optionBtn)

    })
}

function checkAnswer(e) {
    var userChoice = e.target
    var correctAnswer = userChoice.dataset.answer;
    setCorrectAnswer(document.body, correctAnswer);
    Array.from(answerChoice.children).forEach(button => {
        setCorrectAnswer(button, button.dataset.answer)
    })
    if(randomQuestions.length > currentQuestion + 1) {
        nextBtn.classList.remove("hide");
    } 
    else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove("hide")
    }
}

function setCorrectAnswer(element, correctAnswer) {
    clearChoice(element);
    if (correctAnswer) {
        element.classList.add("true");
    }
    else {
        element.classList.add("false");
    }
}

function clearChoice(element) {
    element.classList.remove("true");
    element.classList.remove("false");
}

var time = document.querySelector(".timer");
var timeCount;
var timeLimit = codingQuestion.length * 15;

// need to have time start when start btn clicked
function countDown() {
    if (timeLimit == 0) {
        document.getElementById('btn').innerHTML
        }  
        else {
            document.getElementById('btn').innerHTML = timelimit;
            timeLimit = timeLimit -1;
            setTimeout(countDown,1000);
            }
}


// // clicking the questions method will tell the code what to do after the user has clicked an answer 
// function clickButton () {
//     // comparing and contrasting the selected answer withthe coded answer 
//     if (this.value !== codingQuestion[currentLocation].options){
//             // take away 
//         timeLimit -= 15;
//         if(timeLimit < 0 ){
//             timeLimit = 0
//         }
//             // display new time
// var timerTime = document.getElementById("timer")
// ;
// timerTime.textContent = timeLimit;
//             // go to next questin 
//             currentLocation ++;

           
//     }
//      // assure there are questions remaining if not end the game
//      if( currentLocation === codingQuestion.length){
//         // end game
//         endGame();
//     }else {
//         grabbing();
//     }
// }

function endGame () {
    // clearTimer to equal 0 

    var finalPage = document.getElementById("end-quiz");
    finalPage.removeAttribute("class");

    // showcase the final score!!! 
    var finalScore = document.getElementById("final_score");
    finalScore.textContent = timeCount;


    // hide your questions from the rest of the page 
    var page = document.getElementById("quiz-section");
    page.setAttribute("class", "quiz-section")
}

// function/button for score board + store data/answers
 var starbtn = document.getElementById("btn");
 startbtn.onclick = grabbing;