function pow(x, y) {        //Оголошуємо функцію pow
  if (typeof x !== 'number' || typeof y !== 'number') {       //Перевірка на коректність типів вхідних даних
    throw new Error("Помилка: x та y мають бути числами");
  }
  if (isNaN(x) || isNaN(y)) {
    return NaN;
  }

  if (y == -Infinity) {     //Будь-яке число в ступені "-безкінечність" дорівнює 0
    return 0;
  }

  if (x == Infinity || y == Infinity) {
    return Infinity;
  }

  if (x == 0 && y > 0) {    //Нуль в будь-якому позитивному ступені дорівнює 0
    return 0;
  }

  if (y == 0) {   //Будь-яке число в ступені 0 дорівнює 1
    return 1;
  }

  if (!Number.isInteger(y)) {   //Якщо число не ціле, результат рахуємо через логорифм
    return Math.exp(y * Math.log(x));
  }

  if (y < 0) {
    if (x == 0) {
      return Infinity;
    }
    y = -y;
    return 1 / positivePov(x, y);
  }

  return positivePov(x, y);

  function positivePov(x, y) {                   //Оголошення приватної функції
    let result = x;
    for (let i = 1; i < y; i++) {
      result = result * x;
    }

    return result;
  }
}

function testPowFunction(x, y) {
  console.log(`----------Тестуємо для значень x: ${x}, y: ${y}--------------`);
  try {
    const expectedResult = Math.pow(x, y);
    console.log(`Результат функції: Math.pow = ${expectedResult}`);

    const actualResult = pow(x, y);
    console.log(`Результат функції: pow = ${actualResult}`);

    if (actualResult == Infinity && expectedResult == Infinity) {
      console.log("Фактичний результат відповідає очікуваному");
    }
    else if (isNaN(actualResult) && isNaN(expectedResult)) {
      console.log("Фактичний результат відповідає очікуваному");
    }
    else if (Math.abs(expectedResult - actualResult) < 0.00001) {
      console.log("Фактичний результат відповідає очікуваному");
    } else {
      console.log("Фактичний результат не відповідає очікуваному");
    }
  } catch (error) {
    console.error(error.message);
  }
  console.log();
}

testPowFunction("Test", 4);
testPowFunction(2, 4);
testPowFunction(0, 0);
testPowFunction(0, 4);
testPowFunction(2, 0);
testPowFunction(-2, 0);
testPowFunction(-2, 4);
testPowFunction(2, -3);
testPowFunction(-2, -4);
testPowFunction(-2, -5);
testPowFunction(-2, 5);
testPowFunction(0.23, 5);
testPowFunction(2, 0.24);
testPowFunction(2, 2.24);
testPowFunction(NaN, 123);
testPowFunction(Infinity, 1234);
testPowFunction(1234, Infinity);
testPowFunction(1234, -Infinity);
testPowFunction(Infinity, Infinity);
testPowFunction(Infinity, -Infinity);
testPowFunction(0, -5);
testPowFunction(-5, 0);