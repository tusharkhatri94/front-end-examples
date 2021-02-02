var questions=[];
if(document.title=="iLearn Dream :: HTML")
    {
        questions = [{
    question: "1: HTML stands for?",
    choices: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"],
    correctAnswer: 0
}, {
    question: "2: Which of the following attributes of text box control allow to limit the maximum character?",
    choices: ["size", "len", "maxlength", "all of these"],
    correctAnswer: 2
}, {
    question: "3: The attribute of <form> tag",
    choices: ["Method","Action", "Both a & b", "None of these"],
    correctAnswer: 1
}, {
    question: "4: HTML is a subset of",
    choices: ["SGMT", "SGML", "SGMD", "None of these"],
    correctAnswer: 1
}, {
    question: "5: <DT> tag is designed to fit a single line of our web page but <DD> tag will accept a",
    choices: ["word", "line of text", "request", "full paragraph"],
    correctAnswer: 3
    }, {
    question: "6: How can you open a link in a new browser window?",
    choices: ["&lsaquo; a href = &ldquo;url&rdquo; target = &ldquo;new&rdquo;&rsaquo;", "&lsaquo;a href = &ldquo;url&rdquo; target= &ldquo;_blank&rdquo;&rsaquo;", "&lsaquo;a href = &ldquo;url&rdquo;.new&rsaquo;", "&lsaquo;a href = &ldquo;url&rdquo; target =&ldquo;open&rdquo;&rsaquo;"],
    correctAnswer: 1
        },{
    question: "7: Correct HTML tag for the largest heading is",
    choices: ["&lsaquo;head&rsaquo;", "&lsaquo;heading&rsaquo;", "&lsaquo;h6&rsaquo;", "&lsaquo;h1&rsaquo;"],
    correctAnswer: 3
                }, {
    question: "8: Which of the following tag is used to mark a begining of paragraph ?",
    choices: ["&lsaquo;td&rsaquo;", "&lsaquo;br&rsaquo;", "&lsaquo;p&rsaquo;", "&lsaquo;tr&rsaquo;"],
    correctAnswer: 2
            },  {
    question: "9: Which of the tag is used to create a numbered list?",
    choices: ["&lsaquo;li&rsaquo;", "&lsaquo;ul&rsaquo;", "&lsaquo;ol&rsaquo;", "None of these"],
    correctAnswer: 2
                    }, {
    question: "10: The latest HTML standard is",
    choices: ["XML", "SGML", "HTML 4.0", "HTML5.0"],
    correctAnswer: 3
}];
    }
else if(document.title=="iLearn Dream :: CSS")
    {
     questions = [{
    question: "1: Which is the correct CSS syntax?",
    choices: ["body {color: black}", "{body;color:black}", " {body:color=black(body}", "body:color=black"],
    correctAnswer: 0
}, {
    question: "2: How do you display hyperlinks without an underline?",
    choices: ["a {text-decoration:no underline}", "a {decoration:no underline}", "a {text-decoration:none}", "a {underline:none}"],
    correctAnswer: 2
}, {
    question: "3: Which HTML attribute is used to define inline styles?",
    choices: ["Font", "Class", "Styles", "style"],
    correctAnswer: 3
}, {
    question: "4: Which of the following property of a table element specifies whether the border should be shown if a cell is empty?",
    choices: [":border-collapse", ":border-spacing", ":caption-side", ":empty-cells"],
    correctAnswer: 3
}, {
    question: "5: Which CSS property controls the text size?",
    choices: ["font-size", "font-style", "text-style", "text-size"],
    correctAnswer: 0
}, {
    question: "6: Which of the following is NOT a valid CSS length unit?",
    choices: ["cm", "dm", "mm", "em"],
    correctAnswer: 1
}, {
    question: "7: There are 16 basic color keywords in CSS. Which of the following are NOT basic color keywords?",
    choices: ["olive", "fuchsia", "cyan", "aqua"],
    correctAnswer: 2
}, {
    question: "8: Which of the following CSS properties DOES NOT influence the box model?",
    choices: ["content", "padding", "margin", "outline"],
    correctAnswer: 3
}, {
    question: "9: When using media queries, which of the following is NOT a valid media type?",
    choices: ["voice", "tv", "all", "tty"],
    correctAnswer: 0
}, {
    question: "10: Which of the following is NOT a valid border-style property value?",
    choices: ["dotted", "inset", "glazed", "groove"],
    correctAnswer: 2
}];    
    }

else if(document.title=="iLearn Dream :: JS")
    {
       questions = [{
    question: "1: The script tag must be placed in",
    choices: ["head", "head and body", "head and title", "all of the above"],
    correctAnswer: 0
}, {
    question: "2: Which of the following Attribute is used to include External JS code inside your HTML Document",
    choices: ["ext", "script", "link","src"],
    correctAnswer: 3
}, {
    question: "3: Which of the following is not considered as an error in JavaScript?",
    choices: ["Syntax error", "Missing of semicolons", "Division by zero", "All of the mentioned"], 
    correctAnswer: 2
}, {
    question: "4: The snippet that has to be used to check if “a” is not equal to “null” is",
    choices: ["if(a!=null)", "if(a!==null)", "if (!a)", "if(a!null)"], 
    correctAnswer: 1
},{
    question: "5: A conditional expression is also called a",
    choices: ["Alternative to if-else", "Immediate if", "If-then-else statement", "None of the mentioned "], 
    correctAnswer: 1
},{
    question: "6: The “var” and “function” are",
    choices: ["Data types", "Keywords", "Prototypes", "Declaration statements"],  
    correctAnswer: 3
},{
    question: "7: What are the three important manipulations done in a for loop on a loop variable?",
    choices: ["Updation, Incrementation, Initialization", "Testing, Updation, Testing", "Initialization,Testing, Updation", "Initialization,Testing, Incrementation"], 
    correctAnswer: 2
},{
    question: "8: Among the keywords below, which one is not a statement?",
    choices: ["use strict","debugger", "with", "if"],  
    correctAnswer: 0
},{
    question: "9: Consider the following code snippet :\n var a = [1,2,3,4,5]; a.slice(0,3); \nWhat is the possible output for the above code snippet ?",
    choices: ["Returns [1,2,3]", "Returns [4,5]", "Returns [1,2,3,4]", "Returns [1,2,3,4,5]"],
    correctAnswer: 0
}, {
    question: "10: What is the purpose of a return statement in a function?",
    choices: ["Returns the value and continues executing rest of the statements, if any", "Returns the value and stops the program", "Returns the value and stops executing the function", "Stops executing the function and returns the value"],
    correctAnswer: 0
}];   
    }
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}