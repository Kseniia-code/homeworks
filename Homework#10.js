function checkProbabilityTheory(count) {
    let countableNumber = 0;
    let uncountableNumber = 0;
    if (count <= 0) {
        console.log ("Значення параметру 'count' повинно бути більше нуля");
        return;
    } 
    for (let i = 0; i < count; i++) {
        let number = Math.floor(Math.random() * (1000 - 100) + 100);        //Математична функція обчислення випадкового числа в заданому диапазоні
        if (number % 2 == 0) {          //Визначаємо, парне чи непарне це число
            countableNumber++;
        } else {
            uncountableNumber++;
        }
    }
    console.log("Кількість згенерованих чисел: " + count);
    console.log("Парних чисел: " + countableNumber);
    console.log("Непарних чисел: " + uncountableNumber);
    let countableNumberPercent = countableNumber * 100 / count;             //Вираховуємо відсоток парних чисел
    let uncountableNumberPercent = 100 - countableNumberPercent;            //Вираховуємо відсоток непарних чисел
    console.log(countableNumberPercent + " % " + uncountableNumberPercent);

}
checkProbabilityTheory(10);
