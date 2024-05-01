/**
 * Об'єкт "clock" із заданими параметрами ("Name", "Size", "Color").
 * Задаємо метод getInfo на рівні об'єкту.
 */
const clock = {
    Name: "Wall Clock",
    Size: {
        width: 100,
        height: 100
    },
    Color: "Beige",
    getInfo: function () {
        printFullObject(this);
    }
};
//Задаємо функцію, яка буде перевіряти і виводити значення об'єкту в форматі "key: value"
function printFullObject(fullObject) {
    Object.keys(fullObject).forEach(key => {
        let value = fullObject[key];
        if (typeof value === 'function') {
            return;                         //Преривання поточної ітерації, якщо поточне значення є функцією
        }
        if (typeof value === 'object') {
            console.log(key);
            printFullObject(value);             //Використовуємо рекурсію для визову функції
        } else {
            console.log(key + ": " + value);
        }
    });
};

clock.getInfo();
clock.Mechanism = "Digital Watch";              //Додаємо ще один параметр об'єкту "clock"
clock.getInfo();