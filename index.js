function paint(color){
const display = document.getElementById('displayID');
display.style = `background-color:${color}`
}

function random(){
    const display = document.getElementById('displayID');
    display.style.backgroundColor = getRandomColor();
}

function getRandomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

function getRandomColor() {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    return `hsl(${h}deg, ${s}%, ${l}%)`;
}
//the code below also creates a random color just in a different way compared to random() above
function setBackgroundColor() {
    const background = document.getElementById('displayID');
    const randomColor = getRandomColor();
    background.style.backgroundColor = randomColor;
    background.style.color = randomColor;
}