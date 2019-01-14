$(document).ready(function(){
    var random = Math.floor(Math.random() * 101+19)
    console.log(random)
    $('#score').text(random);



var wins = 0;
var losses = 0;
var scoreTotal = 0;
var numbersGenerated = []

function randomNumbers() {
    for (var i = 0; i < 4; i++){
        var num = Math.floor(Math.random() * 11+1);
        numbersGenerated.push(num);
    }
    console.log(numbersGenerated)
}

// Activating the stones

$('#blue').on("click", function() {
    scoreTotal = scoreTotal + numbersGenerated[0];
    console.log("New Score Total = " + scoreTotal);
    $('#yourScore').text(scoreTotal);

    if (scoreTotal === random) {
        winner();
    } else if (scoreTotal > random) {
        lose();
    }
})




$('#orange').on("click", function() {
    scoreTotal = scoreTotal + numbersGenerated[1];
    console.log("New Score Total = " + scoreTotal);
    $('#yourScore').text(scoreTotal);

    if (scoreTotal === random) {
        winner();
    } else if (scoreTotal > random) {
        lose();
    }
})


$('#purple').on("click", function() {
    scoreTotal = scoreTotal + numbersGenerated[2];
    console.log("New Score Total = " + scoreTotal);
    $('#yourScore').text(scoreTotal);

    if (scoreTotal === random) {
        winner();
    } else if (scoreTotal > random) {
        lose();
    }
})


$('#red').on("click", function() {
    scoreTotal = scoreTotal + numbersGenerated[3];
    console.log("New Score Total = " + scoreTotal);
    $('#yourScore').text(scoreTotal);

    if (scoreTotal === random) {
        winner();
    } else if (scoreTotal > random) {
        lose();
    }
})

randomNumbers();

function reset () {
    random=Math.floor(Math.random() * 101+19);
    console.log(random)
    $('#score').text(random);
    numbersGenerated = [];
    randomNumbers ();
    scoreTotal = 0;
    $('#yourScore').text(scoreTotal);
}

function winner() {
    alert("The Winner!!");
    console.log('The Winner');
    wins++;
    $('#wins').text(wins);
    reset();
}

function lose() {
    alert("You lose.  Better luck next time.");
    console.log("loser");
    losses++;
    $('#losses').text(losses);
    reset();
}



});