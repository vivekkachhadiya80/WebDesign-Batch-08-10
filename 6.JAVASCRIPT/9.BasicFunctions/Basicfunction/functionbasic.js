/*  JavaScript Function and Function Expressions */

/*

A function is a block of code that performs a specific task.

Suppose you need to create a program to create a circle and color it. You can create two functions to solve this problem:

a function to draw the circle
a function to color the circle
Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.

JavaScript also has a huge number of inbuilt functions. For example, Math.sqrt() is a function to calculate the square root of a number.

*/

{
    // // Declaring a Function

    function nameOfFunction() {
        // function body   
    }

    // // A function is declared using the function keyword.
    // // The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addNumbers.
    // // The body of function is written within {}.

    // {
    //     // declaring a function named greet()
    //     function greet() {
    //         console.log(6+6);
    //     }

    //     // Calling a Function

    //     // function call
    //     greet();
    // }
}

/* 1.  Function Parameters */

// A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.


{
    // // Function with Parameters

    // // Program to print the text
    // // Declaring a function
    // function greet(name) {
    //     console.log("Hello " + name + ":)");
    // }
    
    // // variable name can be different
    // let name = prompt("Enter a name: ");
    
    // // calling function
    // greet(name);
}

//2. Add Two Numbers

{
    // // Program to add two numbers using a function
    // // Declaring a function
    // function add(a, b) {
    //     console.log(a + b);
    // }

    // // calling functions
    // add(3,4);
    // add(2,9);
    // add(20,9);

    // // The function is declared with two parameters a and b.
    // // The function is called using its name and passing two arguments 3 and 4 in one and 2 and 9 in another.
}

// 3. Function Return

    // The return statement can be used to return the value to a function call.

    // The return statement denotes that the function has ended. Any code after return is not executed.

    // If nothing is returned, the function returns an undefined value.

{
    // // Sum of Two Numbers

    // // Program to add two numbers
    // // declaring a function
    // function add(a, b) {
    //     return a + b;
    // }

    // // take input from the user
    // let number1 = parseFloat(prompt("Enter first number: "));
    // let number2 = parseFloat(prompt("Enter second number: "));

    // // calling function
    // let result = add(number1,number2);

    // // display the result
    // console.log("The sum is " + result);
}

/*   Benefits of Using a Function   */
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.

// 4. Function Expressions

{
    // // Program to find the square of a number
    // // function is declared inside the variable
    // let x = function (num) { return num * num };
    // console.log(x(4));

    // // can be used as variable value for other variables
    // let y = x(3);
    // console.log(y);

    // // variable x is used to store the function. Here the function is treated as an expression. And the function is called using the variable name.

    // The function above is called an anonymous function.
}






