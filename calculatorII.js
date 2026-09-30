// to let everything work, I will provide the complete code for a simple calculator implementation in JavaScript, HTML, and CSS. Below is the code for the calculator:
let currentInput = "";
let previousInput = "";
let operator = "";
// Get the display element
const resultDisplay = document.getElementById("result");
// Add event listeners for number buttons
document.querySelectorAll(".num-btn").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value === "." && currentInput.includes(".")) return; // Prevent multiple decimals
    currentInput += value;
    updateDisplay();
  });
});
// Add event listeners for operator buttons
document.querySelectorAll(".op-btn").forEach(button => {
  button.addEventListener("click", () => {
    // Prevent operator input if there's no current input
    if (currentInput === "") return;
    // If there's already a previous input and operator, calculate the result first
    previousInput = currentInput;
    currentInput = "";
    operator = button.getAttribute("data-value");
  });
});
// Add event listener for equals button
document.getElementById("equals-btn").addEventListener("click", () => {
  if (currentInput === "" || previousInput === "") return;
  // Perform the calculation based on the operator
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  // Handle division by zero
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
      // Handle division by zero
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error";
      break;
  }
  // Update the display with the result and reset inputs
  currentInput = result.toString();
  previousInput = "";
  operator = "";
  updateDisplay();
});
// Add event listener for clear button
document.getElementById("clear-btn").addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
});


// Function to update the display
function updateDisplay() {
  resultDisplay.innerText = currentInput || 0;
}
