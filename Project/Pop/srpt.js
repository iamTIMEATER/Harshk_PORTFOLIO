let score = 0;
let gameRunning = false;
let gameTimer;
let bubbleInterval;
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

const startButton = document.createElement("button");
startButton.textContent = "Start Game";
document.body.appendChild(startButton);

let timeLeft = 30;

// Generate bright bubble colors
function getBrightColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 65%)`;
}

// Create bubble
function createBubble() {
  if (!gameRunning) return;

  const bubble = document.createElement("div");
  const size = Math.random() * 30 + 50;
  bubble.classList.add("bubble");
  bubble.style.left = Math.random() * 90 + "vw";
  bubble.style.bottom = "0";
  bubble.style.width = size + "px";
  bubble.style.height = size + "px";
  bubble.style.backgroundColor = getBrightColor();
  bubble.style.animation = `floatUp ${Math.random() * 2 + 3}s linear forwards`;

  bubble.onclick = () => {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    bubble.remove();
  };

  document.body.appendChild(bubble);
  setTimeout(() => bubble.remove(), 6000);
}

// Start Game
function startGame() {
  gameRunning = true;
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = "Score: 0";
  timerDisplay.textContent = "Time Left: 30";
  startButton.style.display = "none";

  bubbleInterval = setInterval(createBubble, 700);
  gameTimer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = "Time Left: " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(bubbleInterval);
      clearInterval(gameTimer);
      gameRunning = false;
      startButton.style.display = "block";
      startButton.textContent = "Restart Game";
    }
  }, 1000);
}

startButton.addEventListener("click", startGame);
