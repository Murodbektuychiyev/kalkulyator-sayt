let current = '0';
let operator = null;
let previous = null;
let reset = false;

function updateDisplay() {
  document.getElementById('display').innerText = current;
}

function appendNumber(num) {
  if (reset) {
    current = num;
    reset = false;
  } else {
    if (current === '0') current = '';
    current += num;
  }
  updateDisplay();
}

function appendDot() {
  if (!current.includes('.')) {
    current += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  current = '0';
  operator = null;
  previous = null;
  reset = false;
  updateDisplay();
}

function setOperation(op) {
  if (operator && !reset) calculate();
  operator = op;
  previous = current;
  reset = true;
}

function calculate() {
  if (!operator || previous === null) return;
  let prev = parseFloat(previous);
  let curr = parseFloat(current);
  let result = 0;
  switch (operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/': result = curr !== 0 ? prev / curr : 'Error'; break;
  }
  current = result.toString();
  operator = null;
  previous = null;
  reset = true;
  updateDisplay();
}

function percent() {
  current = (parseFloat(current) / 100).toString();
  updateDisplay();
}

function toggleSign() {
  if (current !== '0') {
    if (current.startsWith('-')) current = current.slice(1);
    else current = '-' + current;
    updateDisplay();
  }
}

// Boshlang‘ich ko‘rsatish
updateDisplay();
