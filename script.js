let colors = [];
const textColorGuess = document.querySelector('#rgb-color');
const colorsForChoices = document.querySelector('#colors-for-choices');
const answer = document.querySelector('#answer');
const buttonResetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let numberScore = 0;
score.innerHTML = `Placar: ${numberScore}`;

function generatesRGB() {
  return Math.floor(Math.random() * 256);
}

function colorRandom() {
  const color = `(${generatesRGB()}, ${generatesRGB()}, ${generatesRGB()})`;
  return color;
}
function mysteriousColor() {
  colors = [];
  const colorGuess = colorRandom();
  const color1 = colorRandom();
  const color2 = colorRandom();
  const color3 = colorRandom();
  const color4 = colorRandom();
  const color5 = colorRandom();
  colors.push(colorGuess, color1, color2, color3, color4, color5);
}

function checkTheAnswer(e) {
  const question = e.target.style.backgroundColor;
  const correct = `rgb${textColorGuess.innerHTML}`;
  if (question === correct) {
    answer.innerHTML = 'Acertou!';
    numberScore += 3;
    score.innerHTML = `Placar: ${numberScore}`;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
    numberScore -= 1;
    score.innerHTML = `Placar: ${numberScore}`;
  }
}

function createRiddle() {
  textColorGuess.innerHTML = [colors[0]];
  for (let i = colors.length - 1; i >= 0; i -= 1) {
    const colorToChoose = document.createElement('div');
    colorToChoose.classList.add('ball');
    colorToChoose.addEventListener('click', checkTheAnswer);
    const randomArrayPosition = Math.random() * colors.length;
    colorToChoose.style.backgroundColor = `rgb${colors.splice(randomArrayPosition, 1)}`;
    colorsForChoices.appendChild(colorToChoose);
  }
  answer.innerHTML = 'Escolha uma cor';
}

function resetGame() {
  for (let i = colorsForChoices.children.length - 1; i >= 0; i -= 1) {
    const ball = colorsForChoices.children[i];
    colorsForChoices.removeChild(ball);
  }
  mysteriousColor();
  createRiddle();
}

mysteriousColor();
createRiddle();

buttonResetGame.addEventListener('click', resetGame);
