// PRACTICE WITH FUNCTIONS & CONDITIONALS
// PRACTICE WITH FUNCTIONS & CONDITIONALS
// PRACTICE WITH FUNCTIONS & CONDITIONALS

//Purpose: rock, paper, scissors game

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error! Please input a valid option.');
    }
  };
  
  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a TIE!';
    }
    if (userChoice === 'rock') {
      if (computerChoice ==='paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    if (userChoice === 'bomb') {
      return 'You\'ve DOMINATED!!'
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();