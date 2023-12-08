/* JavaScript CallBack Function */

{
    // // function
    // function greet(name) {
    //     console.log('Hi' + ' ' + name);
    // }
    // greet('Peter');
}

{
    // // function
    // function greet(name, callback) {
    //     console.log('Hi' + ' ' + name);
    //     callback();
    // }

    // // callback function
    // function callMe() {
    //     console.log('I am first callback function');
    // }

    // // passing function as an argument
    // greet('Peter', callMe);

    // callMe()
}

/* JavaScript Arrow Function */

// Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions.

{
    // // function expression
    // function x(x, y) {
    //     return x * y;
    // }
    // console.log(x(10,20));
}

{
    // // Using Arrow functions
    // let Arrow = (x, y) =>{
    //     return x * y
    // };
    // console.log(Arrow(10,20));
}

{
    // let ArrowFunc = (x,y) => x * y
    // console.log(ArrowFunc(10,20));
}

// Arrow Function Syntax

{
    // let myFunction = (arg1, arg2, ...argN) => {
    //     statement(s)
    // }

    // // myFunction is the name of the function
    // // arg1, arg2, ...argN are the function arguments
    // // statement(s) is the function body
}
{
    // let myFunction = (arg1, arg2, ...argN) => expression
}
 
// Arrow Function with No Argument

{
    // let greet = () => console.log('Hello');
    // greet();
}

// Arrow Function with One Argument

{
    // let greet = x => console.log(x);
    // greet('Hello');
}

// Arrow Function as an Expression

{
    // let age = 4;

    // let welcome = (age < 5) ? () => console.log('Baby') : () => console.log('Adult');

    // welcome();
}

// Multiline Arrow Functions

{
    // let sum = (a, b) => {
    //     let result = a + b;
    //     return result;
    // }
    
    // let result1 = sum(5,7);
    // console.log(result1);
}

// this with Arrow Function

{
    // // Inside a regular function

    // function Person() {
    //     this.name = 'Jack',
    //     this.age = 25,
    //     this.sayName = function () {
    
    //         // this is accessible
    //         console.log(this.age);
    
    //         function innerFunc() {
    
    //             // this refers to the global object
    //             console.log(this.age);
    //         }
    
    //         innerFunc();
    //     }
    // }
    
    // let x = new Person();
    // x.sayName();
}

{
    // // Inside an arrow function
    
    // function Person() {
    //     this.name = 'Jack',
    //     this.age = 25,
    //     this.sayName = function () {
    
    //         console.log(this.age);

    //         let innerFunc = () => {
    //             console.log(this.age);
    //         }
    //         innerFunc();
    //     }    
    // }
    
    // const x = new Person();
    // x.sayName();
}

// You should not use arrow functions to create methods inside objects.

{
    // let person = {
    //     name: 'Jack',
    //     age: 25,
    //     sayName: function (){
    //         console.log(this.age);
    //     }
    // }
    
    // person.sayName();
}

// Javascript Function call()

{
    // // The call() method calls a function by passing this and specified values as arguments.

    {
        // //function that adds two numbers 
        // function sum(a, b) {
        //     return a + b;
        // }

        // function sub(a , b){
        //     return a - b;
        // }

        // // console.log(sum(20,30));
        
        // // calling sum() function  
        // var result = sub.call(this, 5, 10);
        
        // console.log(result);
    }
}

// With and Without Using call() Method

{
    // // function that finds product of two numbers
    // function product(a, b) {
    //     return a * b;
    // }
    
    // // invoking product() without using call() method
    // let result1 = product(5, 2);
    
    // console.log("Return value Without using call() method: " + result1);
    
    // // invoking product() using call() method
    // let result2 = product.call(this, 5, 2);
    
    // console.log("Return value Using call() method: " + result2);
}

// Passing Object as this Value in call()

{
    // // object definition
    // const human = {
    //     firstName: "Judah",
    //     lastName: "Parker",
    //     age: 26,
    // };
    
    // // function definition
    // function greet() {
    //     const string = `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
    //     console.log(string);
    // }
    // const  greets = () => {
    //     const string = `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
    //     console.log(string);
    // }
    
    // // passing object as this value in call() method
    // greet.call(human);
}

// Using call() to Chain Constructors

{
    // //function definition 
    // function Animal(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    
    // //function definition 
    // function Horse(name, age) {
    //     Animal.call(this, name, age);
    //     this.sound = "Neigh";
    // }
    
    // //function definition 
    // function Snake(name, age) {
    //     Animal.call(this, name, age);
    //     this.sound = "Hiss";
    // }
    
    // const horse1 = new Horse("Arnold", 8);
    // console.log(horse1.name, horse1.age, horse1.sound);

    // const snake1 = new Snake("Harry", 5);
    // console.log(snake1.name, snake1.age, snake1.sound);
    
}

// JavaScript Constructor Function

{
    // // In JavaScript, a constructor function is used to create objects.
    // // constructor function
    // function Person () {
    //     this.name = 'John',
    //     this.age = 23
    // }

    // // create an object
    // const person = new Person();

    // console.log(person);

    // // To create an object from a constructor function, we use the new keyword.
}

// Create Multiple Objects with Constructor Function

{
    // // constructor function
    // function Person () {
    //     this.name = 'John',
    //     this.age = 23,
    //     this.greet = function () {
    //         console.log('hello');
    //     }
    // }

    // // create objects
    // const person1 = new Person();
    // const person2 = new Person();

    // // access properties
    // console.log(person1.age);
    // console.log(person2.greet());  
}

// JavaScript this Keyword

{
    // // constructor function
    // function Person () {
    //     this.name = 'John'
    // }

    // // create object
    // const person1 = new Person();

    // // access properties
    // console.log(person1.name);  // John
}

// JavaScript Constructor Function With Parameters

{
    // // constructor function
    // function Person (person_name, person_age, person_gender) {

    //     // assigning  parameter values to the calling object
    //     this.name = person_name,
    //     this.age = person_age,
    //     this.gender = person_gender,
    
    //     this.greet = function () {
    //         return ('Hi' + ' ' + this.name);
    //     }
    // }
    
    
    // // creating objects
    // const person1 = new Person('John', 23, 'male');
    // const person2 = new Person('Sam', 25, 'female');
    
    // // accessing properties
    // console.log(person1); // "John"
    // console.log(person2.greet()); // "Sam"
    
}

// Adding Properties And Methods in an Object

{
    // // constructor function
    // function Person () {
    //     this.name = 'John',
    //     this.age = 23
    // }

    // // creating objects
    // let person1 = new Person();
    // let person2 = new Person();

    // // adding property to person1 object
    // person1.gender = 'male';

    // // adding method to person1 object
    // person1.greet = function () {
    //     console.log('hello');
    // }

    // person1.greet();   // hello

    // // Error code
    // // person2 doesn't have greet() method
    // person2.greet();
}

// JavaScript Object Prototype

{
    // // You can also add properties and methods to a constructor function using a prototype.
    // // constructor function
    // function Person () {
    //     this.name = 'John',
    //     this.age = 23
    // }

    // // creating objects
    // let person1 = new Person();
    // let person2 = new Person();

    // // adding new property to constructor function
    // Person.prototype.gender = 'Male';

    // console.log(person1.gender); // Male
    // console.log(person2.gender); // Male
}

// JavaScript Built-in Constructors

{
    // let a = new Object();    // A new Object object
    // let b = new String();    // A new String object
    // let c = new Number();    // A new Number object
    // let d = new Boolean();   // A new Boolean object
}

{
    // // In JavaScript, strings can be created as objects

    // const name = new String ('John');
    // console.log(name);

    // // In JavaScript, numbers can be created as objects

    // const number = new Number (57);
    // console.log(number);

    // // In JavaScript, booleans can be created as objects

    // const count = new Boolean(true);
    // console.log(count); // true
}