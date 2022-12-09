// 12  What is a first order function

{
    // First - order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

    const firstOrder = () => console.log("I am a first order function!");
}

// 13  What is a higher order function

{
    // Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.
}


// 14  What is a unary function

{
    // Unary function (i.e. monadic) is a function that accepts exactly one argument. It stands for a single argument accepted by a function.
    const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value
}

//   15  What is the currying function
{
    // Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.
    const multiArgFunction = (a, b, c) => a + b + c;
    console.log(multiArgFunction(1, 2, 3)); // 6

    const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
    curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
    curryUnaryFunction(1)(2); // returns a function: c => 3 + c
    curryUnaryFunction(1)(2)(3); // returns the number 6


}

//   16  What is a pure function
{
    // Given the same input, always returns the same output.
    // Produces no side effects.

    Pure
    function calculateGST(productPrice) {
        return productPrice * 0.05;
    }

    impure
    var tax = 20;
    function calculateGST(productPrice) {
        return productPrice * (tax / 100) + productPrice;
    }
}

//   17  What is the purpose of the let keyword
{
    // The let statement declares a block scope local variable.
    // cant be updated
}



// 18  What is the difference between let and var
{
    // var =>    It is been available from the beginning of JavaScript
    //           It has function scope
    //           Variables will be hoisted
    // .         can be initioalized twice under the same name

    // let =>  ntroduced as part of ES6
    //         It has block scope
    //         It has block scope
}

// 19  What is the reason to choose the name let as a keyword

{
    // let is a mathematical statement that was adopted by early programming languages like Scheme and Basic. It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible.
}
// 20  How do you redeclare variables in switch block without an error

{
    // To avoid this error, you can create a nested block inside a case clause and create a new block scoped lexical environment.
    let counter = 1;
    switch (x) {
        case 0: {
            let name;
            break;
        }
        case 1: {
            let name; // No SyntaxError for redeclaration.
            break;
        }
    }

}

// 21  What is the Temporal Dead Zone
{
    // In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError.
    // The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.
    function somemethod() {
        console.log(counter1); // undefined
        console.log(counter2); // ReferenceError
        var counter1 = 1;
        let counter2 = 2;
    }

}

// 22  What is IIFE(Immediately Invoked Function Expression)
{
    // IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,
    (function () {
        // logic here
    })();

    // The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,
    (function () {
        var message = "IIFE";
        console.log(message);
    })();
    console.log(message); //Error: message is not defined
}