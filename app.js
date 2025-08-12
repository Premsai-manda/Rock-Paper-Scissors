// Get all necessary DOM elements for the game
const Choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerClick");
const compDisplay = document.getElementById("compClick");
const resultDisplay = document.getElementById("message");
const playerScoreDisplay = document.getElementById("player-score");
const compScoreDisplay = document.getElementById("computer-score");
const optionsContainer = document.querySelector(".options");


// Initialize game state variables
let playerScore = 0;
let compScore = 0;
let isGameOver = false;

// The main function to play a round of the game
function playGame(playerChoice) {
  // Check if the game has already ended
  if (isGameOver) {
    return;
  }

  // Generate a random choice for the computer
  const computerChoice = Choices[Math.floor(Math.random() * 3)];
  let result = "";

  // Determine the result of the round
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? "You Got.!" : "You Lost.!";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "You Got.!" : "You Lost.!";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "You Got.!" : "You Lost.!";
        break;
    }
  }

  // Update the displayed moves and the round result
  playerDisplay.textContent = playerChoice;
  compDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;
  
  // Update scores based on the result
  if (result === "You Got.!") {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "You Lost.!") {
    compScore++;
    compScoreDisplay.textContent = compScore;
  }
  
  // Remove any previous color classes from the message display
  resultDisplay.classList.remove("greenText", "redText", "winnerText");

  // Check if a player has reached 10 points to win the game
  if (playerScore === 10) {
    displayFinalWinner("You are the final winner! Congratulations!");
    resultDisplay.classList.add("greenText");
  } else if (compScore === 10) {
    displayFinalWinner("The computer is the final winner! Better luck next time!");
    resultDisplay.classList.add("redText");
  } else {
    // Apply round-specific color styling if the game is still ongoing
    if (result === "YOU WIN.!") {
        resultDisplay.classList.add("");
    } else if (result === "YOU LOST.!") {
        resultDisplay.classList.add("");
    }
  }
}

// Function to display the final winner message and end the game
function displayFinalWinner(message) {
  resultDisplay.textContent = message;
  resultDisplay.classList.add("greenText");
  isGameOver = true;
  // Disable the game options to prevent further play
  optionsContainer.style.pointerEvents = "none";
}

// Function to reset the game to its initial state
function resetGame() {
  isGameOver = false;
  playerScore = 0;
  compScore = 0;
  playerScoreDisplay.textContent = 0;
  compScoreDisplay.textContent = 0;
  playerDisplay.textContent = "---";
  compDisplay.textContent = "---";
  resultDisplay.textContent = "Choose your move";
  resultDisplay.classList.remove("greenText", "redText", "winnerText");
  // Re-enable the game options
  optionsContainer.style.pointerEvents = "auto";
}
