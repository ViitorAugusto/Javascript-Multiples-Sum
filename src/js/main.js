function calculateSum() {
  const inputNumber = document.getElementById("inputNumber");
  const resultElement = document.getElementById("result");
  try {
    const result = calculateDivisibleSum(parseInt(inputNumber.value, 10));
    inputNumber.classList.remove("error-input");
    inputNumber.classList.add("success-input");
    resultElement.innerHTML = `O somatório é: <strong> ${result}</strong>`;
  } catch (error) {
    inputNumber.classList.add("error-input");
    inputNumber.classList.remove("success-input");
    resultElement.innerText = error.message;
  }
}

function clearResult() {
  const inputNumber = document.getElementById("inputNumber");
  inputNumber.classList.remove("error-input", "success-input");
  document.getElementById("result").innerText = "";
}
