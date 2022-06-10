const up = document.querySelector(".up");
const down = document.querySelector(".down");
const guess = document.querySelector("#guess-number");
const btn = document.querySelector("#guess-btn");
const report = document.querySelector(".report");
const attempts = document.querySelector(".attempts");
const reset = document.querySelector(".reset");

let isGameOver = false;

function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const answer = randomNumber();

btn.addEventListener("click", () => {
  if (isGameOver) {
    return;
  }
  else if(guess.value === ""){
      report.innerText = "you didn't enter any number"
  } else {
    if (guess.value > answer) {
      report.innerText = "little lower";
      up.innerText = guess.value;
    } else if (guess.value < answer) {
      report.innerText = "little higher";
      down.innerText = guess.value;
    } else {
      report.innerText = "you won!";
      isGameOver = true;
      return;
    }
    attempts.innerText -= 1;
    if (+attempts.innerText == 0) {
      report.innerText = `You lost.The answer is ${answer}`;
      isGameOver = true;
    }
  }
});

reset.addEventListener("click", () => {
  up.innerText = 100;
  down.innerText = 1;
  report.innerText = "Make a guess!";
  attempts.innerText = 10;
  isGameOver = false;
});
