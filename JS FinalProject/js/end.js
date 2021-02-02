//Getting DOM Elements

const _user = document.getElementById("user");
const _age = document.getElementById("age");
const _userEmail = document.getElementById("userEmail");
const _saveBtn = document.getElementById("saveBtn");
const _finalScore = document.getElementById("finalScore");
const _lastScore = localStorage.getItem('lastScore');
const _theme = sessionStorage.getItem('theme');
const _spanEmail = document.getElementById("spanEmail");
const _spanName = document.getElementById("spanName");
const _spanAge = document.getElementById("spanAge");
const _validation = document.getElementById("validation");

const pattern = {
    email: /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/,
    age:/^[0-9]+$/,
    name:/^[A-Za-z]+$/
}
//Assign Score
_finalScore.innerHTML = _lastScore;


//Local Storage 
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const maxHighScore = 5;

const d = new Date();                                           //Date Object
let date = padDigit(d.getDate());                                  //Date methods
let month = padDigit(d.getMonth() + 1);
let year = padDigit(d.getFullYear());

//Event Listener
_user.addEventListener('keyup', function() {                                            //KEYUP event and addEventListener
   _saveBtn.disabled = ((!_user.value) || (!_age.value) || (!_userEmail.value))         //Logical OR, NOT Operator
});


_age.addEventListener('keyup', function() {
   _saveBtn.disabled = ((!_user.value) || (!_age.value) || (!_userEmail.value))
});

_userEmail.addEventListener('keyup', function() {
   _saveBtn.disabled = ((!_user.value) || (!_age.value) || (!_userEmail.value))
});



//Functions

//Functions
function padDigit(number) {                             //Local Variable
  if(number<10)
    return ("0" + number);
  else
    return number;
}

function saveScore(event) {                                     //Custom function with parameters invoked on click
    event.preventDefault();
    let isValid = 0;                                                //form Validation of email, age and name
    if ( !pattern.email.test(_userEmail.value) ) {                 //Email Pattern
        _spanEmail.innerHTML = "Invalid email";    
       isValid = 1;
    }
    else {
       _spanEmail.innerHTML = ""; 
      }
    if ( !pattern.age.test(_age.value) ) {                                                  //if-elseif
        _spanAge.innerHTML = "Invalid Age";                 
         isValid = 1;
    }
    else if(parseInt(_age.value) === 0) {
        _spanAge.innerHTML = "Invalid Age";      
         isValid = 1;
    }
    else {
       _spanAge.innerHTML = "";
    }
    if (!pattern.name.test(_user.value)) {
       _spanName.innerHTML = "Invalid Name";     
       isValid = 1;
    }
    else {
       _spanName.innerHTML = ""; 
    }
     if (!isValid == 0)                                                                             //IF-else
        _validation.innerHTML = "Please fill the form correctly";       
      else {
          _validation.innerHTML = "Success";

          
        if(_theme == undefined)                                                         //If statement
        sessionStorage.setItem("theme","Any");
        
        const scoreBoard = {                        //Object
            score: _lastScore,
            name: _user.value,
            age: _age.value,
            email: _userEmail.value,
            category: _theme,
            date:date,
            month:month,
            year:year
        };



        highScores.push(scoreBoard);                            //Object Array

        highScores.sort( function(a,b) {                         //Sort function   
        return b.score - a.score;
        });

        highScores.splice(5);                           //Only showing TOP 5 results


        localStorage.setItem('highScores',JSON.stringify(highScores));
        return window.location.href="index.html";                       //Window method
      }
    }
