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

let displayText = document.getElementById("display-nums");
let keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  if (key.hasAttribute("data-value")) {
    key.addEventListener("click", (e) => {
      let text = document.createTextNode(`${key.getAttribute("data-value")}`);
      displayText.appendChild(text);

      console.log(e);
    });
  }
});

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     alert(event.target);
//   });
// });
