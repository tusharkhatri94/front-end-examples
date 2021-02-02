
$(document).ready( function() {
    
    //getting DOM Elements

    const _question = document.getElementById("question");                          //Document Object
    const _choices = Array.from(document.getElementsByClassName("text"));
    const _score = document.getElementById("score");
    const _questionCounter = document.getElementById("counter");
    const _timer = document.getElementById("timer");
    const _loader = document.getElementById("loader");
    const _game = document.getElementById("game");

    //Initialising variables
    let score=0;                        //Global Variable
    let counter = 0;
    let allQuestions = [];              //Array
    let presentQuestion = {};           //Object
    let questions = [];                 //Array of Objects
    let checkingAnswers = false;
    let api="";

    //Constants
    const points = 5;
    const maxQuestions = 10;
    const quizTime = maxQuestions * 5;
    let time = quizTime;
    

    //Session Storage
    let theme = sessionStorage.getItem("theme");
    
    //if-else Statement
    if (theme == "General")
        api = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";             //3rd Party API - OpenTrivia DB
    else if (theme == "Entertainment")
        api = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple";            //3rd Party API - OpenTrivia DB
    else if (theme == "Sports")
        api = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";            //3rd Party API - OpenTrivia DB
    
    else if (theme == "Computers")
        api = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";            //3rd Party API - OpenTrivia DB
    else 
        api = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";                        //3rd Party API - OpenTrivia DB
    
    
    
    //Fetch the Questions using OpenTrivia DB api and parse into object
    fetch(api).then(function(res) {
        return res.json();
    }).then(function(loadedQuestions) {
        console.log(loadedQuestions);
        questions = loadedQuestions.results.map(questionLoaded => {                         //Object Method 
            const newQuestion = {
                question: questionLoaded.question
            };
            
            const ansChoices = [...questionLoaded.incorrect_answers];                       //Copying all the properties of Object
            newQuestion.answer = parseInt(Math.random() * 3) + 1;
            ansChoices.splice(newQuestion.answer - 1, 0, questionLoaded.correct_answer);
            
            ansChoices.forEach((choice,index) => {
                newQuestion["choice" + (index + 1)] = choice;
            });
            return newQuestion;
        })
        gameStart();
    }).catch(function(err) {                                            //Catch Error Statement
        console.error(err);
    });


    //FUNCTIONS
    function gameStart() {                                                 //Immediately Invoked as soon as Questions Loaded
        score=0;
        counter=0;
        allQuestions = [ ...questions];
        time = quizTime;
        _timer.style.width = "100%";
        setTimeout(tick,1000);
        nextQuestion();                                                     
        _game.removeAttribute("class","hide");                              //removeattribute
        _loader.setAttribute("class","hide");
    };
    
    function tick() {                                                   //Show Time Progress
      if(time > 0) {
        time -= 1;
        _timer.style.width = time*100/quizTime + "%";
        setTimeout(tick,1000);
      }
      else {
        localStorage.setItem("lastScore",score);  
        return window.location.href="end.html";                         //go to end.html if time finishes
      }
    }


    function nextQuestion() {                                           //Custom function
        if(allQuestions.length === 0 || counter >= maxQuestions ) {     //if-statement  and logical OR operator
            localStorage.setItem("lastScore",score);                    //local-storage
            //go to end page
            return window.location.href="end.html";                     //Window Object
        }
        counter++;
        _questionCounter.innerHTML = counter;              //InnerHTML
        const quesIndex = parseInt(Math.random() * allQuestions.length);        //Math object with random Index
        presentQuestion = allQuestions[quesIndex];
        _question.innerHTML = presentQuestion.question;                         //Object property
        _choices.forEach(function(choice) {                                            //For Loop
                         const index = choice.dataset['index'];                 
                         choice.innerHTML = presentQuestion["choice" + index]      //Object Property
                         })
        allQuestions.splice(quesIndex,1);                                       //String Method
        checkingAnswers = true;
    };
    
            
     $(".text").click( function(event) {                                //Jquery click
        if(!checkingAnswers) return;                                        //Logical NOT Operator
        checkingAnswers = false;
         const selectChoice = event.target;                                 //EVENT Target Property
         const selectAns = selectChoice.dataset['index'];
         const applyClass = selectAns == presentQuestion.answer ? 'right' : 'wrong';        //Check if Ans is right or wrong and stored
         console.log(applyClass);
        if(applyClass == 'right') {
            score = score + points;
            _score.innerHTML = score;
        }
         selectChoice.parentElement.classList.add(applyClass);
         setTimeout ( function removeClass() {                                                 //removed Class after 1 sec to initialize again
                                 selectChoice.parentElement.classList.remove(applyClass);
                                 nextQuestion();                                                //moved to next question
                            }, 1000);
    });

    
});