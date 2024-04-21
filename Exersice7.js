function pow(x, y) {                   //function declaration
    let result = x;
    for (let i = 1; i < y; i++) {      //loop to repeat operation "y" times 
        result = result * x;           // repeatable multiplication of the previous operation result and initial "x" value
    }

    console.log("Actual result = " + result);
    let expectedResult = x**y;
    console.log("Expected result = " + expectedResult);
    if(expectedResult == result){    
    console.log("Actual result is equal to expected");
    }
    else
    {
    console.log("Actual result does not match to expected");
    }

}
pow(2, 4);                            //function invocation