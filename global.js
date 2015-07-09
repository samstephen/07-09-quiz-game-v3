/**
 * Created by Samuel Stephen and Nick Schetter on 7/9/15.
 */

var displayQuestion = document.getElementById('question');

var questionArray = [
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




for (var i = 0; i < questionArray.length; i++) {
    displayQuestion.innerText = questionArray[i].question;
}

