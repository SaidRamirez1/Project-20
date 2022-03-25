do {

alert(`Welcome to the 20 games. This will be a compatition to see what player gets closer to 20.Lets get started`)

var human = 0; 

var computer = 0;

do {
    var randomNumber = Math.floor(Math.random() * 10) + 1

    computer = computer + randomNumber;

    alert(`The computers new number is ${randomNumber}, the computer total is ${computer}. `);

} while ( computer < 16 )

console.log("exit")

    alert(`The computers total is ${computer}`)

    alert(`Now its you turn `)

do {
    var r = Math.floor(Math.random() * 10) + 1

    human = human + r;

    if (human > 20){
        break
    }

    var answer = prompt("Do you want a new number?")

    alert(`Your new number is ${r}, and your total is ${human}`)

} while ( (human < 21) && (answer == "y"))

if ((computer > human) && (computer <= 20) && (human <= 20)) {
    alert(`Computer Wins`);
} else if (( computer < human) && (computer <= 20) && (human <=20)) 
    alert(`Human Wins`);

var decision = prompt ("If you want to restart please press `r` ")

} while ( decision != "r")