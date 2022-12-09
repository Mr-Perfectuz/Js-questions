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

}

//   17  What is the purpose of the let keyword

// 18  What is the difference between let and var
// 19  What is the reason to choose the name let as a keyword
// 20  How do you redeclare variables in switch block without an error
// 21  What is the Temporal Dead Zone
// 22  What is IIFE(Immediately Invoked Function Expression)
