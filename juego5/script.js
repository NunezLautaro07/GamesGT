let currentPlayer = "X";

function makeMove(cell) {
  if (!cell.textContent) {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    if (checkWinner()) {
      showWinMessage(currentPlayer);
      resetBoard();
    } else if (checkDraw()) {
      showDrawMessage();
      resetBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }

function checkWinner() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  return winningCombos.some(combo => {
    const [a, b, c] = combo;
    return (
      document.querySelector(`.cell:nth-child(${a + 1}`).textContent === currentPlayer &&
      document.querySelector(`.cell:nth-child(${b + 1}`).textContent === currentPlayer &&
      document.querySelector(`.cell:nth-child(${c + 1}`).textContent === currentPlayer
    );
  });
}

function checkDraw() {
  const cells = document.querySelectorAll('.cell');
  return Array.from(cells).every(cell => cell.textContent !== '');
}

function showWinMessage(player) {
  const message = document.createElement('div');
  message.textContent = `¡El jugador ${player} ha ganado!`;
  message.classList.add('message');
  document.body.appendChild(message);

  setTimeout(() => {
    document.body.removeChild(message);
  }, 1500);
}

function showDrawMessage() {
  const message = document.createElement('div');
  message.textContent = "¡Es un empate!";
  message.classList.add('message');
  document.body.appendChild(message);

  setTimeout(() => {
    document.body.removeChild(message);
  }, 1500);
}

function resetBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O');
  });
  currentPlayer = 'X';
}}
