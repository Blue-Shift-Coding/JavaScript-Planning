//Intro to arrays

var names = ["Will", "Younus", "Richard"];
console.log("There are " + names.length + " students.");
console.log(names.sort());

//Intro to funtions
//start with logging
function circleAreaLog(radius) {
    console.log(Math.PI * radius * radius);
}

//introduce return values
function circleArea(radius) {
    return Math.PI * radius * radius;
}

console.log(circleArea(3));

function playGame(player1, player2) {
    //deliberately not checking array length match
    for (var i = 0; i < player1.length; i++) {
        if (player1[i] === player2[i]) {
            console.log("SNAP! Both players had a " + player1[i] + ".")
        }
        else {
            console.log("Player 1 had a " + player1[i] + "but Player 2 had " + player2[i] + ".");
        }
    }
}
