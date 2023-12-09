// Javascript Function apply()

{
    // // The apply() method calls a function with the passed this keyword value and arguments provided in the form of an array.

    // // object definition
    // const personName = {
    //     firstName: "Taylor",
    //     lastName: "Jackson",
    // };
    
    // // function definition
    // function greet(wish, message) {
    //     return `${this.firstName}, ${wish}. ${message}`;
    // }
    
    // // calling greet() function by passing two arguments
    // let result = greet.apply(personName, ["Good morning", "How are you?"]);
    
    // console.log(result);
}

// apply() Syntax
{
    // func.apply(thisArg, argsArray)
}

// thisArg - The value of this which is provided while calling func.
// argsArray (optional) - An array containing the arguments to the function.

// 1: apply() Method to call a Function

{
    // // object definition
    // const personName = {
    //     firstName: "Taylor",
    //     lastName: "Jackson",
    // };
    
    // // function definition
    // function greet(wish, message) {
    //     return `${this.firstName}, ${wish}. ${message}`;
    // }
    
    // // calling greet() function by passing two arguments
    // let result = greet.apply(personName, ["Good morning", "How are you?"]);
    
    // console.log(result);
}

// 2: apply() for Function Borrowing

{
    // // object definition
    // const car = {
    //     name: "BMW",
    //     description() {
    //     return `The ${this.name} is of ${this.color} color.`;
    //     },
    // };
    
    // // object definition
    // const bike = {
    //     name: "Duke",
    //     color: "black",
    // };
    
    // // bike is borrowing description() method from car using apply() 
    // let result = car.description.apply(bike);
    
    // console.log(result);
}

// 3: apply() to Append two Arrays

{
    // let color1 = ["Red", "Green", "Blue"];
    // let color2 = ["Yellow", "Black"];

    // // appending two arrays color1 and color2
    // color1.push.apply(color1, color2);

    // console.log(color1);
}

// 4 : Using apply() with built-in functions

{
    // const numbers = [5, 1, 4, 3, 4, 6, 8];

    // // using apply() with Math object 
    // let max = Math.max.apply(null, numbers);

    // console.log(max); 

    // // without using apply() with Math object 
    // let max1 = Math.max(5, 1, 4, 3, 4, 6, 8);

    // console.log(max1); 
}