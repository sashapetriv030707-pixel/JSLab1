// 1. Функція перевірки на ціле число
function isInteger(num) {
    // Перевіряємо, чи тип є числом і чи немає дробової частини
    return typeof num === 'number' && !isNaN(num) && num % 1 === 0;
}

// 2. Функція пошуку простих чисел на інтервалі [a, b]
function findPrimes(a, b) {
    console.log(`Прості числа на інтервалі [${a}, ${b}]:`);
    let hasPrimes = false;

    // Починаємо з більшого з двох чисел (2), бо прості числа починаються з 2
    let start = Math.max(2, Math.ceil(Math.min(a, b)));
    let end = Math.floor(Math.max(a, b));

    for (let i = start; i <= end; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
            hasPrimes = true;
        }
    }
    
    if (!hasPrimes) console.log("На цьому інтервалі немає простих чисел.");
}