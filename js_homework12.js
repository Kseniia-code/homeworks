/**
 * Об'єкт "services" із заданими параметрами ("Стрижка", "Гоління", "Миття голови").
 * Задаємо метод "price" для того, щоб визначити суму вартості послуг в об'єкті.
 */
var services = {
    "Стрижка": "60 грн",
    "Гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function () {
        let servicesPrice = 0;
        for (let service in this) {
            if (typeof this[service] === 'function') {
                continue;               //Примусовий перехід до наступної ітерації 
            }
            let value = this[service].split(' ')[0];            //Отримання частини строки, в якій знаходиться числовий еквівалент ціни
            servicesPrice = +value + servicesPrice;
        }
        console.log("Загальна вартість наданих послуг: " + servicesPrice);
    },
    maxValue: function () {             //Задаємо метод "maxValue" для того, щоб визначити максимальну вартість послуги
        let numbers = [];
        for (let service in this) {
            if (typeof this[service] === 'function') {
                continue;
            }
            let value = this[service].split(' ')[0];
            numbers.push(+value);               //Додаємо числове значення в масив
        }
        let maxPrice = Math.max(...numbers);        //Вибираємо максимальне число в масиві
        console.log("Максимальна вартість послуги: " + maxPrice);
    },
    minValue: function () {             //Задаємо метод "minValue" для того, щоб визначити мінімальну вартість послуги
        let numbers = [];
        for (let service in this) {
            if (typeof this[service] === 'function') {
                continue;
            }
            let value = this[service].split(' ')[0];
            numbers.push(+value);
        }
        let minPrice = Math.min(...numbers);            //Вибираємо мінімальне число в масиві
        console.log("Мінімальна вартість послуги: " + minPrice);
    }
};
services["Розбити скло"] = "200 грн";
services.price();
services.maxValue();
services.minValue();