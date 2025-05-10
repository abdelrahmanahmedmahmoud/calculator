let output = document.getElementById('output');

function clearDisplay() {
    output.textContent = '';
}

function appendToDisplay(value) {
    output.textContent += value;
}

function calculate() {
    try {
        output.textContent = eval(output.textContent);
    } catch (error) {
        output.textContent = 'Error';
        setTimeout(clearDisplay, 1000); // Clear after 2 seconds
    }
}

function deleteLast() {
    let currentText = output.textContent;
    if (currentText.length > 0) {
        output.textContent = currentText.slice(0, -1);
    }
}

let button = document.querySelector('.lightDark'); // Select the single button
let sun = document.querySelector('.fa-solid.fa-sun'); // Correct selector for sun icon
let moon = document.querySelector('.fa-solid.fa-moon'); // Correct selector for moon icon

button.onclick = function () {
    sun.classList.toggle('hide'); // Toggle the 'hide' class for sun
    moon.classList.toggle('hide'); // Toggle the 'hide' class for moon

    // Change background color and text color based on the visibility of the sun icon
    if (sun.classList.contains('hide')) {
        console.log('Light mode activated'); // Log message for light mode
        document.body.style.backgroundImage = 'linear-gradient(to right, whitesmoke, white)'; // Set background color to white
        document.querySelectorAll('#output, button, .lightDark, .container').forEach(el => {
            el.style.color = 'black';
            // Set text color to black
        });
        document.querySelectorAll('button, .lightDark, .container').forEach(el => {
            el.style.boxShadow = '0px 0px 20px rgba(17, 17, 17, 0.2)';
        });
        document.getElementById('output').style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.2)inset'
    } else {
        console.log('Dark mode activated'); // Log message for dark mode
        document.body.style.backgroundImage = 'linear-gradient(to right, rgb(56, 56, 56), gray)'; // Set background color to dark
        document.querySelectorAll('#output, button, .lightDark, .container').forEach(el => {
            el.style.color = 'white'; // Set text color to black
        });
        document.querySelectorAll('button, .lightDark, .container').forEach(el => {
            el.style.boxShadow = '0px 0px 20px rgba(236, 236, 236, 0.2)';
        });
        document.getElementById('output').style.boxShadow = '0px 0px 20px rgba(225, 225, 225, 0.2)inset'
    }
};