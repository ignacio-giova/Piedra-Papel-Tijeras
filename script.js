function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    let selection = getRandomInt(3);
    if (selection === 0){
        return "piedra";
    } 
    else if (selection === 1){
        return "papel";
    } 
    else {
        return "tijera";
    }

}

function getHumanChoice(){
    let answer = prompt("Que va a jugar?");

    while (!(answer == "piedra" ||
             answer == "papel"  ||
             answer == "tijera" )){
        answer = prompt("Respuesta invalida, Ingrese valor adecuado").trim().toLowerCase();    
    } //String Inmutables pero si reemplazables

    return answer;
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice == computerChoice) {
        console.log("Empate!");
        return [humanScore, computerScore];  // Devuelve los mismos valores
    }

    if (evaluaGanador(humanChoice, computerChoice)) {
        humanScore++;
        console.log(`Ganaste! ${humanChoice} le gana a ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Perdiste! ${humanChoice} pierde contra ${computerChoice}`);
    }

    return [humanScore, computerScore]; // Devuelve los valores actualizados
}

function evaluaGanador(valor1, valor2){
    if ((valor1 == "tijera" && valor2 =="papel") ||
        (valor1 == "papel" && valor2 == "piedra") ||
        (valor1 == "piedra" && valor2 == "tijera"))
        return 1;
    return 0;
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        [humanScore, computerScore] = playRound(humanChoice, computerChoice, humanScore, computerScore);
    }

    if (humanScore == computerScore)
        return "Empate Total";
    return humanScore > computerScore ? "Ganaste!" : "Perdiste!";
}

console.log(playGame());