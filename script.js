let colors = []
const textColorGuess = document.querySelector('#rgb-color');
const colorsForChoices = document.querySelector('#colors-for-choices');
const answer = document.querySelector('#answer');
const buttonResetGame = document.querySelector('#reset-game');
const score = document.querySelector('#score');
let numberScore = 0;
score.innerHTML = `Placar: ${numberScore}`;

function colorRandom() {
    let color = `(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
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


function createRiddle() {
    let functionColors = colors;
    textColorGuess.innerHTML = functionColors[0];
    for (let i = functionColors.length - 1; i >= 0; i -= 1) {
        const colorToChoose = document.createElement('div');
        colorToChoose.classList.add('ball');
        colorToChoose.addEventListener('click', checkTheAnswer);
        colorToChoose.style.backgroundColor = `rgb${functionColors.splice((Math.random()*functionColors.length), 1)}`;
        colorsForChoices.appendChild(colorToChoose);
    }
    answer.innerHTML = "Escolha uma cor";
}
function checkTheAnswer(e) {
    const question = e.target.style.backgroundColor;
    const correct = `rgb${textColorGuess.innerHTML}`;
    if (question === correct) {
        answer.innerHTML = "Acertou!";
        numberScore += 3;
        score.innerHTML = `Placar: ${numberScore}`;
    } else {
        answer.innerHTML = "Errou! Tente novamente!";
        numberScore -= 1;
        score.innerHTML = `Placar: ${numberScore}`;
    }
}

function resetGame() {
    for (let  i = colorsForChoices.children.length - 1; i >= 0; i -= 1) {
        const ball = colorsForChoices.children[i];
        colorsForChoices.removeChild(ball);
    }
    mysteriousColor()
    createRiddle()
}

mysteriousColor()
createRiddle()

buttonResetGame.addEventListener('click', resetGame)