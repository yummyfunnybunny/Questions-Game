// ======================================
// FUNCTION CONSTRUCTOR
// ======================================
/*
// This is how we've been creating objects:
var john = {
        name: 'John',
        yearOfBrith: '1990',
        job: 'teacher'
};

// Now we will use a function constructor to create the job object...

// we ALWAYS write function constructors capitalized (like below)
var Person = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
}

Person.prototype.calculateAge = function() {
        console.log(2016-this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

// Now we will use the function constructor to create an instance of John
var john = new Person('John',1990,'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// ======================================
// OBJECT.CREATE METHOD
// ======================================
// this method inherits from a prototype
/*
var personProto = {
        calculateAge: function() {
                console.log(2016-this.yearOfBirth);
        }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
        {
                name: { value: 'Jane'},
                yearOfBirth: { value: 1969},
                job: { value: 'designer'}
        });

// NOTE: FUNCTION CONSTRUCTORS ARE MORE WIDELY USED THAN OBJECT.CREATE,
// SO WE WILL BE USING FUNCTION CONSTRUCTORS FOR THE MAJORITY OF THE COURSE...
*/

// ======================================
// PRIMITIVES VS OBJECTS
// ======================================
/*
// primitives
var a = 23;
var b = a;
a = 46;
console.log(a,b);
// in the case above, variables a and b are separate, so once a has been changed to 46, they will console.log as a = 46, b = 23

var obj1 = {
        name: 'John',
        age: 26
};

// objects
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);
// in this case, we did not actually create a separate object of obj2, we only created a variable that
// references obj1, so when you console.log obj1 and obj2 after making the age change, the age for both 
// will read 30 (INTERESTINGGGGGG)

// functions
var age = 27;
var obj = {
        name: 'Jonas',
        city: 'Lisbon'
};

function change(a,b){
        a = 30;
        b.city = 'San Francisco';
}

change(age, obj);

console.log(age,obj.city);
*/
// ======================================
// PASSING FUNCTIONS AS ARGUMENTS
// ======================================
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
        var arrRes = [];
        for (i = 0; i < arr.length; i++){
                arrRes.push(fn(arr[i]));
        }
        return arrRes;
}

function calculateAge(el) {
        return 2016 - el;
}

function isFullAge(el) {
        return el >= 18;
}

function maxHeartRate(el) {
        if (el >= 18 && el <= 81){
                return Math.round(206.9-(0.67*el));
        }else{
        return -1;
}}

var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/
// ======================================
// FUNCTIONS RETURNING FUNCTIONS
// ======================================
/*
function interviewQuestion(job) {
        if (job === 'designer'){
                return function(name) {
                        console.log(name + ', can you please explain what UX design is?');
                }
        }else if (job === 'teacher') {
                return function(name) {
                        console.log('What subject do you teach, '+name+'?');
                }
        }else {
                return function(name) {
                        console.log('Hello '+name+', what do you do?');
                }
        }
};

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');

// We can call the function above like so!
interviewQuestion('construction worker')('Mark');
*/
// ======================================
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// ======================================
// use IIFE's to obtain data privacy and also will not interfere with other variables in the global execution context
// not for re-use!
/*
function game(){
        var score = Math.random() * 10;
        console.log(score >= 5);
}
game();

(function() {
        var score = Math.random() * 10;
        console.log(score >= 5);
})();

//console.log(score);

(function(goodLuck) {
        var score = Math.random() * 10;
        console.log(score >= 5-goodLuck);
})(5);
*/
// ======================================
// CLOSURES
// ======================================
/*
function retirement(retirementAge) {
        var a = ' years left until retirement.';
        return function(yearOfBirth) {
                var age = 2016 - yearOfBirth;
                console.log((retirementAge - age)+a);
        }
};

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);


retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);
//retirement(66)(1990);
*/
// ======================================
// MINI-CHALLENGE: REWRITE THE INTERVIEW QUESTIONS CODE USING CLOSURES
// ======================================

// MY RESULT
// mine technically did use closures by declaring text variables outsite of the inner functions that called the text variables
/*
function interviewQuestion(job) {
        var a = ', can you please explain what UX design is?';
        var b = 'What subject do you teach, '+name+'?';
        var c = 'Hello '+name+', what do you do?';
        if (job === 'designer'){
                return function(name){
                        console.log(name+a);
                }
        }else if (job === 'teacher') {
                return function(name){
                        console.log(b);
                }
        }else {
                return function(name) {
                        console.log(c);
                }
        }
}

var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');

designerQuestion('John');
teacherQuestion('John');
*/
// JONAS RESULT
// use just one return function inside the interviewQuestion function with the if/else statement inside the inner function
/*
function interviewQuestion(job) {
        return function(name) {
                if (job === 'designer') {
                        console.log(name + ', can you please explain what UX design is?');
                }else if (job === 'teacher') {
                        console.log('What subject do you teach, '+name+'?');
                }else {
                        console.log('Hello '+name+', what do you do?');
                }
        }
}

interviewQuestion('teacher')('John');
*/
// ======================================
// BIND, CALL, AND APPLY METHODS
// ======================================
// these methods allow us to call the functiona and set the 'this' method manually
/*
var john = {
        name: 'John',
        age: 26,
        job: 'teacher',
        presentation: function(style, timeOfDay) {
                if (style === 'formal') {
                        console.log('Good ' + 
                        timeOfDay + ', Ladies and gentleman! I\'m ' + 
                        this.name + ', I\'m a ' + 
                        this.job + ', and I\'m ' + 
                        this.age + ' years old.');
                }else if (style === 'friendly') {
                        console.log('Hey! What\'s up? I\'m ' + 
                        this.name + ', I\'m a ' + 
                        this.job + ', and I\'m ' + 
                        this.age + ' years old. Have a nice ' + 
                        timeOfDay);
                }
        }
}

var emily = {
        name: 'Emily',
        age: 35,
        job: 'designer'
};

john.presentation('formal', 'morning');

// the 'call' method below adds an additional input, which will replace the 'this' method in the function called
// with the element passed through, in this case its 'emily'
john.presentation.call(emily, 'friendly', 'afternoon');

// the apply is the same as the call method, but it passes the remaining elements through as an array
// using 'apply' wont work in this example because the 'presentation' function is not set up to receive arrays
john.presentation.apply(emily, ['friendly', 'afternoon']);

//-------------
// Binding
//-------------
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// Below we will use the bind method and apply it to some previous code from a previous lecture
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
        var arrRes = [];
        for (i = 0; i < arr.length; i++){
                arrRes.push(fn(arr[i]));
        }
        return arrRes;
}

function calculateAge(el) {
        return 2016 - el;
}

function isFullAge(limit, el) {
        return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);
*/
//==============================================
// CODING CHALLENGE 7: QUIZ GAME
//==============================================
//-----------------------
// MY VERSION
//-----------------------
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
        }else if (inputAnswer != this.correctAnswer) {
                // Answer is incorrect
                console.log('WRONG!');
                //console.log('your answer: ' + inputAnswer);
                //console.log('correct answer: ' + this.correctAnswer);
        }else if (inputAnswer === 'exit') {
                // Exit the question prompt
        }
}

// 2. create some questions using the constructor:
var question0 = new Question(
        'What is my current favorite player for the Celtics?',
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

// 3. Store them all inside of an array:
var questionPool = [question0, question1, question2];

// 4. Sellect a random question and log it on the console
var randomQuestion = questionPool[Math.floor(Math.random()*3)];
randomQuestion.askQuestion();

// 5: use the prompt function to ask the user to input the correct answer
var inputAnswer = prompt(randomQuestion.question);

// 6: check if the input answer is correct
randomQuestion.checkAnswer(inputAnswer);

// 7: apply the IMMEDIATELY INVOKED FUNCTION EXPRESSION to this code for data privacy purposes
})();

/*
(function() {
        var score = Math.random() * 10;
        console.log(score >= 5);
})();
*/

// 8: continue the game after the first question is completed


//-----------------------
// JONA'S VERSION
//-----------------------
/*
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

        Question.prototype.checkAnswer = function(ans) {
                if (ans === this.correct) {
                        console.log('Correct answer!');
                }else {
                        console.log('Wrong answer. Try again!');
                }
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

        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        // 'parsInt' will convert a string into a number
        var answer = parseInt(prompt('Please select the correct answer.'));

        questions[n].checkAnswer(answer);
})();
*/