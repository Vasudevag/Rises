const icons = [
    'https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gkI9LUQuPm-E1XV-BqLVtJzVnZpUCqjtZQ&s',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Waterdrops_%284648726722%29.jpg/640px-Waterdrops_%284648726722%29.jpg',
    'https://t4.ftcdn.net/jpg/05/66/23/45/360_F_566234573_0wRtGNCoV93vm3nCcBuRDIEJOq4BXlQ2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPdK8lFZQyEWOXg2BsMLmxQgTLU8mHJLfCQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGKANDdJ9dbN7S7YZLDVjQifrixawayIwSA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOy4NJeYDRYT8iAQ5Q6nGay-gBUz90v9s4Q&s',
    'https://i.natgeofe.com/n/84765010-db5a-4c1e-b783-7b2b440a32e4/177.jpg',
    'https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gkI9LUQuPm-E1XV-BqLVtJzVnZpUCqjtZQ&s',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Waterdrops_%284648726722%29.jpg/640px-Waterdrops_%284648726722%29.jpg',
    'https://t4.ftcdn.net/jpg/05/66/23/45/360_F_566234573_0wRtGNCoV93vm3nCcBuRDIEJOq4BXlQ2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPdK8lFZQyEWOXg2BsMLmxQgTLU8mHJLfCQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGKANDdJ9dbN7S7YZLDVjQifrixawayIwSA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOy4NJeYDRYT8iAQ5Q6nGay-gBUz90v9s4Q&s',
    'https://i.natgeofe.com/n/84765010-db5a-4c1e-b783-7b2b440a32e4/177.jpg'
  ];
  
  let firstCard = null;
  let secondCard = null;
  let score = 0;
  let timeLeft = 60;  // 60 seconds timer
  let timerInterval;
  
  // Shuffle icons
  const shuffledIcons = icons.sort(() => Math.random() - 0.5);
  
  // Create game board
  const gameBoard = document.getElementById('game-board');
  shuffledIcons.forEach((icon) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<img src="${icon}" alt="Icon">`;
    gameBoard.appendChild(card);
  
    card.addEventListener('click', () => {
      // Prevent clicking already flipped or matched cards
      if (card.classList.contains('flipped')) return;
  
      // Flip the card
      card.classList.add('flipped');
  
      // First card selection
      if (!firstCard) {
        firstCard = card;
      } else {
        // Second card selection
        secondCard = card;
  
        // Check for match
        if (
          firstCard.querySelector('img').src ===
          secondCard.querySelector('img').src
        ) {
          score++;
          document.getElementById('score').textContent = `Score: ${score}`;
  
          // Reset cards
          firstCard = null;
          secondCard = null;
  
          // Check for win condition
          if (score === icons.length / 2) {
            clearInterval(timerInterval); // Stop the timer
            document.getElementById('game-over').style.display = 'block';
            document.getElementById('final-score').textContent = score;
          }
        } else {
          // Not a match, flip back after a short delay
          setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard = null;
            secondCard = null;
          }, 1000);
        }
      }
    });
  });
  
  // Start timer
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById('time').textContent = timeLeft;
  
      // If time is up
      if (timeLeft === 0) {
        clearInterval(timerInterval); // Stop the timer
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('final-score').textContent = score;
      }
    }, 1000);
  }
  
  // Start the game
  startTimer();
  