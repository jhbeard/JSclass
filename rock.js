const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
return userInput;
} else {
return'Invalid user input.';
  }
}

const getComputerChoice = () => {
 let randomNumber = Math.floor(Math.random() * Math.floor(3));
   switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
    default:
    return 'error';
  }
}
const determineWinner = (userChoice, computerChoice) => {
if(userChoice === 'bomb'){
  return 'Cheater';
}
  else if(userChoice === computerChoice){
  return 'Tie game!';
}
if(userChoice === 'rock') {
  if(computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if(userChoice === 'paper') {
  if(computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
if(userChoice === 'scissors') {
  if(computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice))
};
playGame();
