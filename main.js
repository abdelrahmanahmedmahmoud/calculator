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