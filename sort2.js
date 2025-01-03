let score = 0;
let timeLeft = 30;
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const itemElement = document.getElementById('item');
const recycleBin = document.getElementById('recycle-bin');
const trashBin = document.getElementById('trash-bin');
const compostBin = document.getElementById('compost-bin');
const feedbackElement = document.getElementById('feedback'); // To display feedback
const gameOverElement = document.getElementById('game-over'); // To display game over message
const finalScoreElement = document.getElementById('final-score'); // To display final score

// List of items and their correct type
const items = [
  { name: "Plastic Bottle", type: "recycle" },
  { name: "Banana Peel", type: "compost" },
  { name: "Aluminum Can", type: "recycle" },
  { name: "Pizza Box", type: "trash" },
  { name: "Paper Towel", type: "compost" },
  { name: "Cereal Box", type: "recycle" },
  { name: "Plastic Bag", type: "recycle" },
  { name: "Apple Core", type: "compost" },
  { name: "Styrofoam Cup", type: "trash" },
  { name: "Cardboard Box", type: "recycle" },
  { name: "Eggshells", type: "compost" },
  { name: "Glass Bottle", type: "recycle" },
  { name: "Coffee Cup", type: "trash" },
  { name: "Old Newspaper", type: "recycle" },
  { name: "Food Wrappers", type: "trash" },
  { name: "Paper Plate", type: "compost" },
  { name: "Plastic Straw", type: "recycle" },
  { name: "Tissue Paper", type: "compost" },
  { name: "Watermelon Rind", type: "compost" },
  { name: "Tin Can", type: "recycle" },
  { name: "Magazine", type: "recycle" },
  { name: "Plastic Fork", type: "trash" },
  { name: "Glass Jar", type: "recycle" },
  { name: "Aluminum Foil", type: "trash" },
  { name: "Milk Carton", type: "recycle" },
  { name: "Plastic Wrap", type: "trash" },
  { name: "Old Shoes", type: "trash" },
  { name: "Yogurt Container", type: "recycle" },
  { name: "Food Container", type: "recycle" },
  { name: "Rubber Band", type: "trash" }
];

let currentItem = {};

const timerInterval = setInterval(() => {
  timeLeft--;
  timerElement.textContent = `Time Left: ${timeLeft}s`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    gameOver(); // Call the game over function when time runs out
  }
}, 1000);

// Function to generate a random item
function generateRandomItem() {
  const randomIndex = Math.floor(Math.random() * items.length);
  currentItem = items[randomIndex];
  itemElement.textContent = currentItem.name;
  itemElement.setAttribute('data-type', currentItem.type);
  feedbackElement.textContent = ""; // Clear feedback when a new item appears
}

// Bin Click Events
recycleBin.addEventListener('click', () => checkAnswer('recycle'));
trashBin.addEventListener('click', () => checkAnswer('trash'));
compostBin.addEventListener('click', () => checkAnswer('compost'));

// Check if the item is sorted correctly
function checkAnswer(binType) {
  if (currentItem.type === binType) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
    feedbackElement.textContent = "Correct!"; // Display correct feedback
    feedbackElement.style.color = "green"; // Green for correct answer
  } else {
    feedbackElement.textContent = "Wrong!"; // Display wrong feedback
    feedbackElement.style.color = "red"; // Red for wrong answer
  }
  generateRandomItem(); // Generate a new item after each choice
}

// Game Over function
function gameOver() {
  gameOverElement.textContent = "Game Over!";
  gameOverElement.style.display = "block"; // Show the game over message
  finalScoreElement.textContent = `Your final score is ${score}`;
  finalScoreElement.style.display = "block"; // Show the final score
}

// Start the game by generating the first item
generateRandomItem();
