function pad(row, symbol, number, addToStart) {
   if (row === null){
    return null;
   }
   if (symbol === null){
    return row;
   }
    let numberOfSymbols = number-row.length;
    for (i = 0; i < (numberOfSymbols); i++) {
        if (addToStart == true) {
            row = symbol + row;
        } else {
            row = row + symbol;
        }
    }
    return row;
}
let result = pad("text", "!", 9, false);
console.log(result);
let result1 = pad("test1231241231", "!", 25, true);
console.log(result1);
let result2 = pad("000", "0", 5, true);
console.log(result2);
let result3 = pad("qwerty", "+", 1, false);
console.log(result3);
let result4 = pad("test", "@", -3, false);
console.log(result4);
let result5 = pad("test", "@", -10, true);
console.log(result5);
let result6 = pad(null, "+", 5, false);
console.log(result6);
let result7 = pad("value", "", 7, true);
console.log(result7);
let result8 = pad("result", null, 7, false);
console.log(result8);