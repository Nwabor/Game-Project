`use strict`;
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 15;
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // when no value is inputed
  if (!guess) {
    // document.querySelector(".message").textContent = "No Number!";
    displayMessage("No Number");

    // when the guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "You are Correct!";
    displayMessage("You are Correct");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;

      // this is done in order to avoid DRY(do not repeat yourself)
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? `Too High!` : `Too low!`;

      displayMessage(guess > secretNumber ? `Too high` : `Too low`);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "You lost";
      displayMessage("You Lost!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".number").style.width = "30rem";
    }
  }
});
//     // when guess is greater than the secret Number
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = " Number is too High";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost";
//       document.querySelector(".score").textContent = 0;
//       document.querySelector("body").style.backgroundColor = "red";
//       document.querySelector(".number").style.width = "30rem";
//     }

//     //when guess is less than the secret number
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too low";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent = "You lost";
//       document.querySelector(".score").textContent = 0;
//       document.querySelector("body").style.backgroundColor = "red";
//       document.querySelector(".number").style.width = "30rem";
//     }
//   }
// });

// when the player have to try again

// document.querySelector(".again").textContent = "NewText";
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  // document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
