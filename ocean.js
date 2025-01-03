let score = 0;
let timeLeft = 30;

// Updated Trash Images with fallback to publicly accessible URLs
const trashImages = [
  { image: 'https://via.placeholder.com/40.png?text=Bottle', name: 'Plastic Bottle' },
  { image: 'https://via.placeholder.com/40.png?text=Bag', name: 'Plastic Bag' },
  { image: 'https://via.placeholder.com/40.png?text=Can', name: 'Aluminum Can' },
  { image: 'https://via.placeholder.com/40.png?text=Glass', name: 'Glass Bottle' },
];

const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const gameContainer = document.getElementById('game-container');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');

// Countdown Timer
const timerInterval = setInterval(() => {
  timeLeft--;
  timerElement.textContent = `Time Left: ${timeLeft}s`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    gameOver(); // Call the game over function
    // Stop generating trash
    clearInterval(trashInterval);
  }
}, 1000);

// Function to generate trash at random positions
function generateTrash() {
  const randomTrash = trashImages[Math.floor(Math.random() * trashImages.length)];
  const trashElement = document.createElement('div');
  trashElement.classList.add('trash');
  trashElement.style.backgroundImage = `url(${randomTrash.image})`;

  // Random position
  const randomPositionX = Math.random() * 460; // Game container width minus trash width
  const randomPositionY = Math.random() * 260; // Game container height minus trash height
  trashElement.style.left = `${randomPositionX}px`;
  trashElement.style.top = `${randomPositionY}px`;

  // Add trash to container
  gameContainer.appendChild(trashElement);

  // Click event for trash
  trashElement.addEventListener('click', () => {
    trashElement.remove(); // Remove trash on click
    score++;
    scoreElement.textContent = `Score: ${score}`;
  });
}

// Generate a new trash item every 2 seconds
const trashInterval = setInterval(generateTrash, 2000);

// Game Over function
function gameOver() {
  gameOverElement.style.display = 'block'; // Show the game over message
  finalScoreElement.textContent = score; // Display the final score
}
