

const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const redValue = document.getElementById('red-value');
const greenValue = document.getElementById('green-value');
const blueValue = document.getElementById('blue-value');

const colorBox = document.getElementById('color-box');


function updateColor() {
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    
    const newColor = `rgb(${red}, ${green}, ${blue})`;
    colorBox.style.backgroundColor = newColor;

    
    document.body.style.backgroundColor = newColor;
}


redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);


updateColor();
