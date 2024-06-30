let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const darkMode = document.querySelector("#theme");

const darkMode1 = () => {
    console.log("Darkbutton was just clicked!")
}

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");
const genCompchoice = () => {
    const options = ["rock","paper","scissors"];
    // rock,paper,scissor
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game was Draw."
    msg.style.backgroundColor = "yellow"
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win! Your${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
       compScorepara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beat your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genCompchoice();
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin,userChoice,compChoice);
    }
  };
choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
darkMode.forEach((darkMode) => {
  darkMode.addEventListener("click", ()=> {
      const DarkMode = darkMode.getAttribute("id");
      darkMode1(darkMode);
  })
})