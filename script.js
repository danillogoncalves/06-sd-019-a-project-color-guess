let colors = []
const textColorGuess = document.querySelector('#rgb-color');
const colorsForChoices = document.querySelector('#colors-for-choices');

function colorRandom() {
    let color = `(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    return color;
}
function mysteriousColor() {
    colors = [];
    const colorGuess = colorRandom();
    console.log(colorGuess);
    const color1 = colorRandom();
    console.log(color1);
    const color2 = colorRandom();
    console.log(color2);
    const color3 = colorRandom();
    console.log(color3);
    const color4 = colorRandom();
    console.log(color4);
    const color5 = colorRandom();
    console.log(color5);
    colors.push(colorGuess, color1, color2, color3, color4, color5);
    console.log(colors);
}


function createRiddle() {
    let functionColors = colors;
    console.log(functionColors)
    textColorGuess.innerHTML = functionColors[0];
    for (let i = functionColors.length - 1; i >= 0; i -= 1) {
        const colorToChoose = document.createElement('div');
        colorToChoose.classList.add('ball');
        colorToChoose.style.backgroundColor = `rgb${functionColors.splice((Math.random()*functionColors.length), 1)}`;
        colorsForChoices.appendChild(colorToChoose);
    }
}

mysteriousColor()
createRiddle()