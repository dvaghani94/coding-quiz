var quizQuestions = document.getElementById('.quiz');
var scoreResults = document.getElementById('.score');
var quizButton = document.getElementById('.start');


var codingQuestion = [ {
    questions: "which letter is correctly matched?",
    answers: {
        a: "e",
        b: "f",
        c: "g",
        d: "d",
    },
    correctAnswer: "d"
},
{
    question: "which letter is correctly matched?",
    answers: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    correctAnswer: "c"
},
{
    question: "which letter is correctly matched?",
    answers: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    correctAnswer: "c"
},
{
    question: "which letter is correctly matched?",
    answers: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    correctAnswer: "c"
},
{
    question: "which letter is correctly matched?",
    answers: {
        a: "f",
        b: "g",
        c: "c",
        d: "h",
    },
    correctAnswer: "c"
}
];

function questions() {
    var output = [];
    codingQuestion.forEach((currentQuestion, questionNumber))
        var userAnswer = [];
        for(letter in currentQuestion.answers) {
            answers.push((letter, currentQuestion.answer[letter])
            )
        };
    userAnswer.push((currentQuestion, answers.join(''))
    )
    };

  quizQuestions.value = userAnswer.join('')

  codingQuestion.forEach((currentQuestion))



function results() {
    var trackResults = quizQuestions.querySelectorAll('.answers');

    var numCorrect = 0;

    codingQuestion.forEach((currentQuestion, questionNumber))
    var endResult = trackResults[questionNumber];
    var totalSelected = 'input[name=questions $(questionNumber)] : checked';
    var endScore = (trackResults.querySelector(totalSelected) || [] ).value;

    if(endScore === currentQuestion.correctAnswer) {
        numCorrect++;

        trackResults[questionNumber].getElementsByClassName.color = 'violet';
    }
    else {
        trackResults[questionNumber].getElementsByClassName.color = 'grey';
    }

    scoreResults.value = '$([numCorrect]) out of $[codingQuestion.length])';
};


quizButton.addEventListener('click', results);