const n1 = document.getElementById("inp1");
const n2 = document.getElementById("inp2");
const answer = document.getElementById("submit");

function calculate(operation) {
  const num1 = parseInt(n1.value);
  const num2 = parseInt(n2.value);

  if (isNaN(num1) || isNaN(num2)) {
    answer.value = "enter correct numbers";
    return;
  }

  switch (operation) {
    case "add":
      answer.value = num1 + num2;
      break;
    case "subtract":
      answer.value = num1 - num2;
      break;
    case "multiply":
      answer.value = num1 * num2;
      break;
    case "division":
      if (num2 === 0) {
        answer.value = "Cannot divide by zero";
      } else {
        answer.value = num1 / num2;
      }
      break;
  }
}

document.getElementById("add").addEventListener("click", () => calculate("add"));
document.getElementById("subtract").addEventListener("click", () => calculate("subtract"));
document.getElementById("multiply").addEventListener("click", () => calculate("multiply"));
document.getElementById("division").addEventListener("click", () => calculate("division"));
