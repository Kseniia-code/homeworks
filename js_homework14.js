const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ],
    findBy: function (companyName) {
        let result = find(this.clients, companyName);
        if (result != null) {       // Якщо щось знайдено рекурсивним пошуком - виводимо результат
            console.log("Знайдено компанію:");
            console.log("Назва: " + result.name);
            console.log("Тип компанії: " + result.type);
            console.log("Використовуємоє рішення: " + result.uses);
            console.log("Продає: " + result.sells);
        }
        else {
            console.log("Компанію '" + companyName + "' не знайдено");
        }
    }
};

// Рекурсивна функція пошуку в компаніях
function find(clients, companyName) {
    for (let client of clients) {
        let result = null;
        if (client.name === companyName) {      // Пошук за іменем компанії
            result = client;
        }
        if (result == null && client.partners != null) {        // Якщо нічого не знайдено - шукаємо в партнерах
            result = find(client.partners, companyName); 
        }
        if (result != null) {       // Повертаємо результат тільки якщо щось знайдено
            return result; 
        }
    }

    return null;        // Нічого не знайдено в жодному сабоб'єкті
}

company.findBy('Клієнт 1');
console.log("----------------------");

company.findBy('Клієнт 2');
console.log("----------------------");

company.findBy('Клієнт 1.2');
console.log("----------------------");

company.findBy('Клієнт 1.2.3');
console.log("----------------------");

company.findBy('Клієнт, що не існує');
