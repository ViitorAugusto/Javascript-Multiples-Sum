function calculateDivisibleSum(number) {
    if (!number) throw new Error('Por favor, insira um número.');
    if (typeof number !== 'number' || !Number.isInteger(number) || number <= 0) {
        throw new Error('Por favor, insira um número inteiro positivo.');
    }
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
