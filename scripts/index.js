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

function operate(operator, num1, num2) {
  return operator(num1, num2);
}
let dec = 0;
let text = '';
const displayText = document.getElementById('display-nums');
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  if (key.hasAttribute('data-value')) {
    key.addEventListener('click', () => {
      text = document.createTextNode(
        `${key.getAttribute('data-value')}`,
      );
      displayText.appendChild(text);
    });
  }
  if (key.hasAttribute('data-op')) {
    key.addEventListener('click', () => {
      text = document.createTextNode(` ${key.textContent} `);
      displayText.appendChild(text);
      dec = 0;
    });
  }
  if (key.hasAttribute('data-clear')) {
    key.addEventListener('click', () => {
      displayText.textContent = '';
      dec = 0;
    });
  }
  if (key.hasAttribute('data-dec')) {
    key.addEventListener('click', () => {
      if (dec === 0) {
        text = document.createTextNode(
          `${key.getAttribute('data-dec')}`,
        );
        displayText.appendChild(text);
      }
      dec = 1;
    });
  }
  if (key.hasAttribute('data-equals')) {
    key.addEventListener('click', () => {});
  }
});

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     alert(event.target);
//   });
// });
