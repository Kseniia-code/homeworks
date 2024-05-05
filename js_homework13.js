//Задаємо числовий масив "example".
let example = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function myBlend(arr) {
    for (let i = 0; i <= arr.length * 2; i++) {             //Цикл for для повторення операції зміни позиції елементу масива
        let firstElementPosition = Math.floor(Math.random() * (arr.length - 0) + 0);      //Обчислення рандомної позиції елементу масива
        let secondElementPosition = Math.floor(Math.random() * (arr.length - 0) + 0);
        const firstElement = arr[firstElementPosition];     //Зберігаємо значення елемента масиву в змінну
        const secondElement = arr[secondElementPosition];
        arr[firstElementPosition] = secondElement;      //Міняємо місцями елементи масива
        arr[secondElementPosition] = firstElement;
    }
}
myBlend(example);
console.log(example);