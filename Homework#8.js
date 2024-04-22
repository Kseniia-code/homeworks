function notNumber(value) {
    if (value == null) {         //якщо значення параметра дорівнює null, то це не число
        return true;
    }
    if (typeof value === 'boolean') {            //якщо тип параметра boolean, то це не число
        return true;
    }
    let number = +value;                //приведення до числа
    if (number.toString() == "NaN") {        //задаємо умову: якщо змінна дорівнює "NaN", вертаємо значення "true"
        return true;
    } else {                    //якщо змінна не дорівнює "NaN", вертаємо значення "false"
        return false;
    }
}
let result = notNumber("example"); //передаємо в функцію значення "example"
console.log(result);             //виводимо результат роботи функції
let result1 = notNumber("1");
console.log(result1);
let result2 = notNumber("NaN");
console.log(result2);
let result3 = notNumber(1);
console.log(result3);
let result4 = notNumber(NaN);
console.log(result4);
let result5 = notNumber(false);
console.log(result5);
let object = {
    x: 15,
    y: 44
}
let result6 = notNumber(object);
console.log(result6);
let array = [
    "xy",
    "yx"
]
let result7 = notNumber(array);
console.log(result7);
let result8 = notNumber(null);
console.log(result8);