function pow(x, y) {                   //function declaration
    for (let i = 1; i < y; i++) {      //loop to repeat operation "y" times 
        result = result * x;           // repeatable multiplication of the previous operation result and initial "x" value
    }

    console.log(result);
}
pow(2, 4);                            //function invocation