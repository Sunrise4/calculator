let equation = [];
let last = '';
let dec = 0;
let text = '';

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(eqArr) {
  let solution = 0;
  let num1 = 0;
  let op = '';
  let num2 = 0;

  while (eqArr.length > 2) {
    num1 = parseFloat(eqArr.shift());
    op = eqArr.shift();
    num2 = parseFloat(eqArr.shift());
    solution = window[op](num1, num2);
    eqArr.unshift(solution.toString());
  }

  return solution;
}

const displayText = document.getElementById('display-nums');
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  // data-value 0-9
  if (key.hasAttribute('data-value')) {
    key.addEventListener('click', () => {
      text = document.createTextNode(
        `${key.getAttribute('data-value')}`,
      );
      displayText.appendChild(text);

      if (last === 'val' || last === 'dec') {
        equation[equation.length - 1] += key.getAttribute(
          'data-value',
        );
      } else {
        equation.push(key.getAttribute('data-value'));
      }
      last = 'val';
    });
  }
  // data-op +-*/
  if (key.hasAttribute('data-op')) {
    key.addEventListener('click', () => {
      text = document.createTextNode(` ${key.textContent} `);
      displayText.appendChild(text);
      equation.push(key.getAttribute('data-op'));
      last = 'op';
      dec = 0;
    });
  }
  // data-clear
  if (key.hasAttribute('data-clear')) {
    key.addEventListener('click', () => {
      displayText.textContent = '';
      equation = [];
      last = '';
      dec = 0;
    });
  }
  // data-dec .
  if (key.hasAttribute('data-dec')) {
    key.addEventListener('click', () => {
      if (dec === 0) {
        text = document.createTextNode(
          `${key.getAttribute('data-dec')}`,
        );
        displayText.appendChild(text);

        if (last === 'val') {
          equation[equation.length - 1] += key.getAttribute(
            'data-dec',
          );
        } else {
          equation.push(key.getAttribute('data-dec'));
        }
        last = 'dec';
      }

      dec = 1;
    });
  }
  // data-equals =
  if (key.hasAttribute('data-equals')) {
    key.addEventListener('click', () => {
      const solution = operate(equation);
      displayText.textContent = solution;
    });
  }
});
