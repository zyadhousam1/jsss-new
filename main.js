//getting user input
const userChoice = (userInput) => {
  userInput = userInput.toLowerCase(); //turn all inputs to lowercase
  //checking wether the input is around rock, paper , scissors
  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper"
  ) {
    return userInput;
  } else {
    console.log("wrong input, write it again correctly.. rock scissors paper");
  }
};

//getting computer input
const computerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); //floor to get closer to smaller number for random numbers //0,1,2
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

//winner
const winner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "draw";
  } //rock
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won";
      computer++
    } else {
      return "user won";
      player++
    }
  } // paper
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer won";
      computer++
    } else {
      return "user won";
      player++
    }
  }

  // scissors
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer won";
      computer++
    } else {
      return "user won";
      player++
    }
  }
};

//testing

console.log(winner("rock", "scissors"));
console.log(winner("paper", "scissors"));
console.log(winner("scissors", "scissors"));

//playing
const playing = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log(`user turn : ${userChoice}`);
  console.log(`computer turn : ${computerChoice}`);

  console.log(winner(userChoice, computerChoice));


if (player > computer) {
    return 'player win'
} else if (playerScore < computerScore) {
    return 'computer win'
} else {
    return 'Draw '
}

};

window.onload = playing();

