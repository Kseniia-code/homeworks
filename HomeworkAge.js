function spellingAge(age) {
    let ageString = age.toString();
    if (ageString.length >= 2) {  // if entered number has more then 1 symbol it can be one of exceptional cases for numbers like 11-14
        let lastSymbols = ageString[ageString.length - 2] + ageString[ageString.length - 1];
        let numberTail = +lastSymbols;
        if (numberTail >= 11 && numberTail <= 14) { // if last two digits indicating number equal to 11-14 - we have exceptional spelling case
            console.log(age + " років");
            return;
        };
    }

    // for the rest of the numbers out of 11-14 range, we have 3 cases of spelling, that depends on last digit of any number
    let lastSymbol = ageString[ageString.length - 1];

    if (lastSymbol == "1") {
        console.log(age + " рік");
    }
    if (lastSymbol == "2" || lastSymbol == "3" || lastSymbol == "4") {
        console.log(age + " роки");
    }
    if (lastSymbol == "0" || lastSymbol == "5" || lastSymbol == "6" || lastSymbol == "7" || lastSymbol == "8" || lastSymbol == "9") {
        console.log(age + " років");
    }
}

let age = prompt("Введіть вік");
spellingAge(age);