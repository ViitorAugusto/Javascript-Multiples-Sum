function calculateSum() {
    const inputNumber = document.getElementById('inputNumber').value;
    try {
        const result = calculateDivisibleSum(parseInt(inputNumber, 10));
        document.getElementById('result').innerText = `O somatório é: ${result}`;
    } catch (error) {
        document.getElementById('result').innerText = error.message;
    }
}

function clearResult() {
    document.getElementById('result').innerText = '';
}