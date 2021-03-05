var currentLocation = 0; 
var theChoices = document.getElementById("available");

function start() {
    var h1 = document.querySelector(".container");
    var h2 = document.querySelector(".quiz-section");

    //need to block this section until quiz end 
    var h3 = document.querySelector(".end-quiz");
    if (h1) {
    if (h1.style.display === "none") {
        h1.style.display = "block";
        h2.style.display = "none";
        h3.style.display = "none";
    }
    else {
        h1.style.display = "none";
        h2.style.display = "block";
        h3.style.display = "none";
    }
  }
//   countDown(time);
  grabbing();
  
}

var codingQuestion = [ {
    question: "which does css stand for?",
    options: [
        "casacading style sheet",
        "cascading sheet style",
        "cresending style sheet",
        "cresting style sheet",
    ],
    answers: "cascading style sheet"
},
{
    question: "Which tag is commonly used first in an html?",
    options: [
        "footer",
        "header",
        "body",
        "html",
    ],
    answers: "html"
},
{
    question: "what is the closing tag for <h2>",
    options: [
        "<h2>",
        "</h2>",
        "<h1>",
        "</h1>",
    ],
    answers: "</h2>"
},
{
    question: "What does js stand for?",
    options: [
        "javascore",
        "javaships",
        "javascript",
        "javasyrup",
    ],
    answers: "javascript"
},
{
    question: "How do you attach an img in html?", 
    options: [
        "<img src=",
        "<img",
        "<img tag",
        "<src img",
    ],
    answers: "<img src="
}
];

console.log(codingQuestion)

var questionPool = 0;
var answerPool = 1;

// window.onload = function() {
//     show(0);
// }

function nextQuestion() {
    questionPool++;
    
    console.log(questionPool);

    countDown(time)
}
// need to check if answer gets selected
function selected(answer) {
    var userChoice = answer.textContent;
    console.log(userAnswer)
    var correctAnswer = codingQuestion[answerPool].answer;
    if(userChoice == correctAnswer) {
        answer.classList.add("correct");
        console.log('Correct Answer');
    }
    else {
        answer.classList.add("incorrect");
        console.log('Incorrect Answer');
    }
}

// function show(index) {
//     var quizQuestions = document.querySelector(".question-text")
//     var questionChoice = document.querySelector(".buttons-group")

//     quizChoices = '<h2>' + codingQuestion[index].question + '</h2>';

//     var quizOptions = 
//      '<ul class="buttons">' + codingQuestion[index].options[0] + '<li></li></ul>' +
//      '<ul class="buttons">' + codingQuestion[index].options[1] + '<li></li></ul>' +
//      '<ul class="buttons">' + codingQuestion[index].options[2] + '<li></li></ul>' +
//      '<ul class="buttons">' + codingQuestion[index].options[3] + '<li></li></ul>' ;

//      quizQuestions.innerHTML = quizOptions;
//      questionChoice.innerHTML = quizChoices; 

//      var userChoice = questionChoice.querySelectorAll(".buttons");
//      for(let i = 0; i < questionChoice.length; i++) {
//          questionChoice[i].setAttribute("onclick", "selected(this)")
//      }

// }

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
// need to change function to show name input option
function showResults() {
    var h3 = document.querySelector(".end-quiz");
    var h2 = document.querySelector(".quiz-section");
    if (h2) {
    if (h2.style.display === "none") {
        h2.style.display = "block";
        h3.style.display = "none";
    }
    else {
        h2.style.display = "none";
        h3.style.display = "block";
    }
  }
}



//grabbing the question (which will also lead to getting the next question )
function grabbing () {
    var questionAtTime = codingQuestion[currentLocation];

    //render the current question at that time title
    var questionTitle = document.getElementById("title")
    questionTitle.textContent = questionAtTime.question

    // double check to make sure there is not a question currently in the area
    theChoices.innerHTML = "";

    // loop through the choices in each questin (when rendered) and dispaly on the page
    questionAtTime.options.forEach(function(option, i)
    {
        var radioButtons = document.createElement("button");
        radioButtons.setAttribute("class", "option");
        radioButtons.setAttribute("value", option)

        // functinality to your radiobuttons
        radioButtons.textContent= i + 1 + " ." + option;
        // 1. Option1 
        // 2. Option2

        // attach event
        radioButtons.onclick = clickButton;


        // display ME
        theChoices.appendChild(radioButtons)
    })
}


// clicking the questions method will tell the code what to do after the user has clicked an answer 
function clickButton () {
    // comparing and contrasting the selected answer withthe coded answer 
    if (this.value !== codingQuestion[currentLocation].answers){
            // take away 
        timeLimit -= 15;
        if(timeLimit < 0 ){
            timeLimit = 0
        }
            // display new time
var timerTime = document.getElementById("timer")
;
timerTime.textContent = timeLimit;
            // go to next questin 
            currentLocation ++;

           
    }
     // assure there are questions remaining if not end the game
     if( currentLocation === codingQuestion.length){
        // end game
        endGame();
    }else {
        grabbing();
    }
}

// quiz end will execute different reason for ending the game
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

// // function/button for score board + store data/answers
//  var starbtn = document.getElementById("btn");
//  startbtn.onclick = grabbing;