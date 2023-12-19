// JavaScript Classes

// Classes are one of the features introduced in the ES6 version of JavaScript.

// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house. House is the object.

// Creating JavaScript Class

{
    // // constructor function
    // function Person () {
    //     this.name = 'John',
    //     this.age = 23
    // }

    // // create an object
    // const person1 = new Person();
}

{
    // // creating a class
    // class Person {
    //     constructor(name) {
    //     this.name = name;
    //     }
    // }
}

// The class keyword is used to create a class. The properties are assigned in a constructor function.

{
    // // creating a class
    // class Person {
    //     constructor(name) {
    //     this.name = name;
    //     }
    // }
  
    // // creating an object
    // const person1 = new Person('John');
    // const person2 = new Person('Jack');
    
    // console.log(person1.name);
    // console.log(person2.name); 

    // // person1 and person2 are objects of Person class.
    // // The constructor() method inside a class gets called automatically each time an object is created.
}

// Javascript Class Methods

// While using constructor function

{
    // // constructor function
    // function Person (name) {

    //     // assigning  parameter values to the calling object
    //     this.name = name;
    
    //     // defining method
    //     this.greet = function () {
    //         return ('Hello' + ' ' + this.name);
    //     }
    // }
}

// It is easy to define methods in the JavaScript class. You simply give the name of the method followed by ().

{
    // class Person {
    //     constructor(name) {
    //     this.name = name;
    //   }
    
    //     // defining method
    //     greet() {
    //         console.log(`Hello ${this.name}`);
    //     }
    // }
    
    // let person1 = new Person('John');
    
    // // accessing property
    // console.log(person1.name); // John
    
    // // accessing method
    // person1.greet(); // Hello John
}


// Getters and Setters

{
    // class Person {
    //     constructor(name) {
    //         this.name = name;
    //     }
    
    //     // getter
    //     get personName() {
    //         return this.name;
    //     }
    
    //     // setter
    //     set personName(x) {
    //         this.name = x;
    //     }
    // }
    
    // let person1 = new Person('Jack');
    // console.log(person1.name); // Jack
    
    // // changing the value of name property
    // person1.personName = 'Sarah';
    // console.log(person1.name); // Sarah
}

// Hoisting

{
    // // accessing class
    // const p = new Person(); // ReferenceError

    // // defining class
    // class Person {
    //     constructor(name) {
    //         this.name = name;
    //     }
    // }
}