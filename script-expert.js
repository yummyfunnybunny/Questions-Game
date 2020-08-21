//==============================================
// CODING CHALLENGE 7: QUIZ GAME
//==============================================
//-----------------------
// MY VERSION
//-----------------------
/*
(function() {
        // 1. build a function constructor:
        function Question(question, answers, correctAnswer) {
                this.question = question;
                this.answers = answers;
                this.correctAnswer = correctAnswer;
        }

        // create the method for console.logging the chosen question
        Question.prototype.askQuestion = function() {
                console.log(this.question);
                for (i = 0; i < this.answers.length; i++) {
                        console.log(i + ': ' + this.answers[i]);
                }
        }

        // Create the method for checking the input answer:
        Question.prototype.checkAnswer = function(inputAnswer) {
                if (inputAnswer == this.correctAnswer) {
                        // Answer is correct
                        console.log('CORRECT!');
                        //console.log('your answer: ' + inputAnswer);
                        //console.log('correct answer: ' + this.correctAnswer);
                        //nextQuestion();
                }else if (inputAnswer != this.correctAnswer) {
                        // Answer is incorrect
                        console.log('WRONG!');
                        //nextQuestion();
                        //console.log('your answer: ' + inputAnswer);
                        //console.log('correct answer: ' + this.correctAnswer);
                }else if (inputAnswer === 'exit') {
                        // Exit the question prompt
                        return;
                }
        }

        // 2. create some questions using the constructor:
        var question0 = new Question(
                'Who is my current favorite player for the Celtics?',
                ['Gordon Hayward', 'Jason Tatum', 'Kemba Walker'],
                1);
        var question1 = new Question(
                'What is the velocity of a flying Swallow?',
                ['I don\'t know that!', '25!', 'What do you mean, an African Swallow or a European?'],
                2);

        var question2 = new Question(
                'What is the name of my pet snake?',
                ['Squishy', 'Squatter', 'Squeaky'],
                0);
        var questionPool = [question0, question1, question2];
                function nextQuestion() {
                        // 3. Store them all inside of an array:
                        

                        // 4. Sellect a random question and log it on the console
                        var randomQuestion = questionPool[Math.floor(Math.random()*3)];
                        randomQuestion.askQuestion();

                        // 5: use the prompt function to ask the user to input the correct answer
                        var inputAnswer = prompt(randomQuestion.question);

                        // 6: check if the input answer is correct
                        randomQuestion.checkAnswer(inputAnswer);

                        nextQuestion();
                }

                nextQuestion();
        // 7: apply the IMMEDIATELY INVOKED FUNCTION EXPRESSION to this code for data privacy purposes
})();

// 8: continue the game after the first question is completed
*/
//-----------------------
// JONA'S VERSION
//-----------------------

(function() {
        function Question(question, answers, correct) {
                this.question = question;
                this.answers = answers;
                this.correct = correct;
        }

        Question.prototype.displayQuestion = function() {
                console.log(this.question);

                for (i = 0; i < this.answers.length; i++){
                        console.log(i + ': ' + this.answers[i]);
                }
        }

        Question.prototype.checkAnswer = function(ans, callback) {
                var sc;

                if (ans === this.correct) {
                        console.log('Correct answer!');
                        sc = callback(true);
                }else {
                        console.log('Wrong answer. Try again!');
                        sc = callback(false);
                }

                this.displayScore(sc);
        }

        Question.prototype.displayScore = function(score) {
                console.log('Your current score: ' + score);
                console.log('----------------------------------');
        }

        var q1 = new Question(
                'Is JavaScript the coolest programming language in the world?',
                ['Yes','No'],
                0);
        var q2 = new Question(
                'What is the name of this course\'s teacher?',
                ['John', 'Michael', 'Jonas'],
                2);
        var q3 = new Question(
                'What best describes coding?',
                ['Boring', 'Hard', 'Fun', 'Tedious'],
                2);

        var questions = [q1, q2, q3];

        function score() {
                var sc = 0;
                return function(correct) {
                        if (correct) {
                                sc++;
                        }
                        return sc;
                }
        }
        var keepScore = score();

        function nextQuestion() {
                
                var n = Math.floor(Math.random() * questions.length);

                questions[n].displayQuestion();

                // 'parsInt' will convert a string into a number
                var answer = prompt('Please select the correct answer.');

                if (answer !== 'exit') {
                        questions[n].checkAnswer(parseInt(answer), keepScore);
                        nextQuestion();
                }
        }
        nextQuestion();
})();


