let display = document.getElementById('display');


function appendCharacter(char) {
  display.value += char;
}


function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendCharacter(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteChar();
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});

