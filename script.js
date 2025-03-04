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
        return "tijeras";
    }

}

function playRound(humanChoice, computerChoice) {

    //Si es
    // 0 es humano
    // 1 es computer
    // 2 ambos

    if (humanChoice == computerChoice) {
        console.log("Empate!");
        pintarSeleccion(humanChoice, 2);
        return;
    }
    pintarSeleccion(humanChoice, 0);
    pintarSeleccion(computerChoice, 1);
    
    if (evaluaGanador(humanChoice, computerChoice)) {
        gameState.humanScore++;
        playerScore.textContent = gameState.humanScore;
        console.log(`Ganaste! ${humanChoice} le gana a ${computerChoice}`);
    } else {
        gameState.computerScore++;
        computerScore.textContent = gameState.computerScore;
        console.log(`Perdiste! ${humanChoice} pierde contra ${computerChoice}`);
    }

    if(gameState.humanScore == 5){
        console.log("Ganaste la partida!");
        popUp("Ganado");
        return;
    }

    if(gameState.computerScore == 5){
        console.log("Perdiste la partida");
        popUp("Perdido");
        return;
    }

    return;
}

function evaluaGanador(valor1, valor2){
    if ((valor1 == "tijeras" && valor2 =="papel") ||
        (valor1 == "papel" && valor2 == "piedra") ||
        (valor1 == "piedra" && valor2 == "tijeras"))
        return 1;
    return 0;
    
}

const gameState = {
    humanScore: 0,
    computerScore: 0
};

const options = document.querySelectorAll(".card-option");

const piedraBtn = document.querySelector(".piedra");
piedraBtn.addEventListener("click", ()=>{
    clearBorders();
    playRound("piedra", getComputerChoice())
    console.log(gameState);
});

const papelBtn = document.querySelector(".papel");
papelBtn.addEventListener("click", ()=>{
    clearBorders();
    playRound("papel", getComputerChoice())
    console.log(gameState);
});

const tijerasBtn = document.querySelector(".tijeras");
tijerasBtn.addEventListener("click", ()=>{
    clearBorders();
    playRound("tijeras", getComputerChoice())
    console.log(gameState);
});

const playerContainer = document.querySelector(".player-score");
const playerScore = document.createElement("span");
playerScore.textContent = "0";
playerContainer.appendChild(playerScore);


const computerContainer = document.querySelector(".computer-score");
const computerScore = document.createElement("span");
computerScore.textContent = "0";
computerContainer.appendChild(computerScore);


function pintarSeleccion (humanSelection, modo){
    let pintarHuman;
    if (humanSelection == "piedra"){
        pintarHuman = piedraBtn;
    } 
    else if (humanSelection == "papel"){
        pintarHuman = papelBtn;
    } else{
        pintarHuman = tijerasBtn;
    }

    if(modo == 0){
        pintarHuman.classList.add("selected-human")
    } else if (modo == 1){
        pintarHuman.classList.add("selected-computer")
    } else{
    pintarHuman.classList.add("selected-both")
    }
}

function clearBorders(){
    options.forEach(elemento => {
        elemento.classList.remove("selected-human", "selected-computer", "selected-both");
        console.log("hola estoy quitando los bordes");
    });
}

function resetGame(){
    gameState.humanScore = 0;
    gameState.computerScore = 0;
    computerScore.textContent = "0";
    playerScore.textContent = "0";
    clearBorders();
};

const popUpContainer = document.querySelector(".window-notice");
console.log(popUpContainer);

function popUp(message){
    const popUpText = popUpContainer.querySelector(".content-text"); // Seleccionamos el h2
    popUpText.textContent = `Has ${message}`;
    popUpContainer.classList.add("show");

};

const closeBtn = document.querySelector(".play-again")
closeBtn.addEventListener("click", ()=>{
    popUpContainer.classList.remove("show");
    resetGame();
});