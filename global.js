/**
 * Created by Samuel Stephen and Nick Schetter on 7/9/15.
 */

var quizArray = [
    {   question: "What is the name of Ned Stark's youngest daughter?",
        choices: ["(a) Yari", "(b) Arya", "(c) Darya", "(d) Catelyn"],
        rightAnswer: "b"
    },

    {   question: "What is the name of the country 'Game of Thrones' takes place in?",
        choices: ["(a) Westeros", "(b) Westrose", "(c) Braavos", "(d) King's Landing"],
        rightAnswer: "a"
    },

    {   question: "Who wields 'Longclaw' out of these characters?",
        choices: ["(a) Jaime Lannister", "(b) The Mountain", "(c) Sandor Clegane", "(d) Jon Snow"],
        rightAnswer: "d"
    },

    {   question: "What is the name of Jon Snow's dire wolf?",
        choices: ["(a) Ghost", "(b) Summer", "(c) Shaggy Dog", "(d) Nymeria"],
        rightAnswer: "a"
    }   ];

var displayQuestion = document.getElementById('question');
displayQuestion.innerText = quizArray[0].question;

var displayChoices = document.getElementById('choices');
displayChoices.innerText = quizArray[0].choices.join(', ');

var userInput = document.getElementById('answer');

var displayQuestionResult = document.getElementById("question_result");

var currentQuestion = 0;

var correctAnswer = quizArray[0].rightAnswer;

var buttonSubmitter = document.getElementById('submitter');
buttonSubmitter.addEventListener('click', process_answer_submission);

var buttonNext = document.getElementById('next');
buttonNext.addEventListener('click', clearAll);

var score = 0;
var displayResult = document.getElementById('total_result');

// returns text in input#answer field
function given_answer() {
    return userInput.value;
}

// returns true if input matches rightAnswer of the respective question
function is_correct_answer(answer_text){
    if (answer_text == correctAnswer) {
        return true;
    }
    return false;
}

// returns text in question_result
function update_question_result(correct) {
    if (correct == true) {
        score++;
        return displayQuestionResult.innerText = "Success!";
    } else {
        return displayQuestionResult.innerText = "Incorrect!";
    }
}

function process_answer_submission() {
    var user_answer = given_answer();
    update_question_result(is_correct_answer(user_answer));
    buttonSubmitter.style.display = 'none';
}

function clearAll(){
    // Advance to the next question.
    currentQuestion++;

    // If doing so means the current question is beyond the last question...
    if (currentQuestion == quizArray.length){
        displayResult.innerText =
            "You answered " + score + " of " + quizArray.length + " questions correctly, good for " + (score/quizArray.length*100) + "%";
        buttonSubmitter.style.display = 'none';
        buttonNext.style.display = 'none';
    }
    // Otherwise, we still have questions left:
    else {
        //Clear the #answer field and #question_result
        userInput.value = '';
        displayQuestionResult.innerText = '';

        // Set text of #question to next question
        // Set text of #choices to next choice

        displayQuestion.innerText = quizArray[currentQuestion].question;
        displayChoices.innerText = quizArray[currentQuestion].choices.join(', ');

        correctAnswer = quizArray[currentQuestion].rightAnswer;

        buttonSubmitter.style.display = 'inline-block';
    }
}
