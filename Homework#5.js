function drawTriangle(heigh, symbol) {
    for (let i = 1; i <= heigh; i++) { // iterating over the number of rows in a christmas tree
        let row = "";
        for (let j = 0; j < i; j++) { // loop to have a proper number of symbols for current level of the christmas tree
            row = row + symbol;
        }
        console.log(row); // displaying result of a current level of christmas tree
    }
}
function reverseTriangle(heigh, symbol) {
    for (let i = heigh; i >= 1; i--) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row = row + symbol;
        }
        console.log(row);
    }
}
drawTriangle(5, "*");
reverseTriangle(5, "*");