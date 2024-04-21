function sum() {                //function declaration
    let x = 0;
    for (let i = 1; i <= 100; i++) {            //loop to repeat operation 100 times 
        if (i % 3 != 0) {           //If we do not get "0" as a result of division, then the condition is true
            x = x + i;
        }
    }
    console.log(x);
}
sum();              //function invocation