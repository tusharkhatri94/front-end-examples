const _scoreList = document.getElementById("scoreList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; 

console.log(highScores);


_scoreList.innerHTML = highScores.map(function(score) {
    let val = "<li class='high-score'>" + score.name + " - " + score.age + " - " + score.email + " - " + score.category + " - " + score.score + " - " + score.date + "/" + score.month + "/" + score.year + "</li>";                                  //Object Properties using Dot
    return val; 
}).join("");


