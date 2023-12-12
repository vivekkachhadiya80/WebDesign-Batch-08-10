/* Javascript Object */

//The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

// Here is an example of a JavaScript object.

// object

{
    // const student = {
    //     firstName: 'ram',
    //     class: 10
    // };
}

// JavaScript Object Declaration

{
    // const object_name = {
    //     key1: value1,
    //     key2: value2
    // };
}

// object creation
{
    // const person = { 
    //     name: 'John',
    //     age: 20
    // };
    // console.log(typeof person); 
}

// JavaScript Object Properties
// In JavaScript, "key: value" pairs are called properties. For example

{
    // let person = { 
    //     name: 'John',
    //     age: 20
    // };
    // Here, name: 'John' and age: 20 are properties.
}

// Accessing Object Properties

// 1. Using dot Notation

// Here's the syntax of the dot notation.

{
    // objectName.key
}
// For example,
{
    // const person = { 
    //     name: 'John', 
    //     age: 20, 
    // };

    // accessing property
    // console.log(person.age); 
}

// 2. Using bracket Notation

// Here is the syntax of the bracket notation.

{
    // objectName["propertyName"]
}

// For example,

{
    // const person = { 
    //     name: 'John', 
    //     age: 20, 
    // };

    // // accessing property
    // console.log(person["age"]); 
}

// JavaScript Nested Objects

// An object can also contain another object. For example,

{
    // // Nested Object
    // const student = {
    //     name: 'John',
    //     age: 20,
    //     marks: {
    //         science: 70,
    //         math: 75
    //     }
    // }

    // // accessing property of student object
    // console.log(student.marks);

    // // accessing property of marks object
    // console.log(student.marks.science);
}

/* Javascript Object Method */

//  1. JavaScript Object.assign()

// assign() Syntax

{
    // Object.assign(target, ...sources)
}

// assign() Parameters

// The assign() method takes in:

// target - the target object to which we will copy all the properties of the sources.
// sources - the source object(s) whose properties we want to copy.

{
    // const obj1 = { a: 1 };
    // const obj2 = { b: 2 };
    // const obj3 = { c: 3 };

    // // // combine all the properties of
    // // // obj1, obj2, obj3 into a single object 
    // const mergedObj = Object.assign(obj1, obj2, obj3);

    // console.log(mergedObj); 
}


// assign() Return Value

// Javascript Object.assign() to Clone Objects

{
    // // create source object
    // const obj = {
    //     name: "Alan Turing",
    //     age: 20,
    // };

    // // create target object
    // let newObject = {};

    // // copy enumerable properties of obj to newObject
    // // newObject is returned and stored in copy object
    // const copy = Object.assign(newObject, obj);

    // // print the copy object
    // console.log(copy);


    // // print newObject
    // console.log(newObject);
}

// In the above example, we have used the assign() method to assign the contents of obj to newObject.

// Since assign() modifies the target object and returns the same object, both copy and newObject are clones of one another. As a result, we get identical outputs when we print them both.


// assign() to Merge Objects

{
    // // source objects
    // const o1 = { a: 1, b: 2, c: 3 };
    // const o2 = { b: 12, c: 13 };
    // const o3 = { c: 23 };

    // // merge o1, o2, and o3
    // // earlier source keys are overwritten by later sources
    // const o4 = Object.assign({}, o1, o2, o3);

    // console.log(o4); 

}

// In the above example, we have used assign() to merge the objects o1, o2, and o3 into a new object o4.

{
    // const o4 = Object.assign({}, o1, o2, o3);
}

// Using the empty object {} as a target object ensures that the properties of the other objects are copied to a new object without modifying any of the source objects.

// As can be seen from the output, properties of later objects overwrite that of earlier ones. For example,

// the b key from o1 is overwritten by its counterpart in o2.
// the c keys from o1 and o2 are overwritten by their counterpart in o3.

//If the source value is a reference to an object, it only copies the reference value.

//  2. Javascript Object.create()

{
    // let Student = {
    //     name: "Lisa",
    //     age: 24,
    //     marks: 78.9,
    //     display() {
    //       console.log("Name:", this.name);
    //     }
    //   };

    //   // create object from Student prototype
    //   let std1 = Object.create(Student);

    //   std1.name = "Sheeran";
    //   std1.display();
}

// 3.  JavaScript Object.entries()

{
    // const obj = { name: "Adam", age: 20, location: "Nepal" };

    // // returns properties in key-value format
    // console.log(Object.entries(obj)); 
}

{
    // // keys are arranged randomly
    // const obj = { 42: "a", 22: "b", 71: "c" };

    // // returns key-value pairs arranged
    // // in ascending order of keys
    // console.log(Object.entries(obj));
}

// entries() to Iterate Through Key-Value Pairs

{
    // const obj = { name: "John", age: 27, location: "Nepal" };

    // // iterate through key-value pairs of object
    // for (const [key, value] of Object.entries(obj)) {
    // console.log(`${key}: ${value}`);
    // }
}

// 4. JavaScript Object.is()

{
    // The Object.is() method checks if two values are the same.

    // let obj1 = { a: 1 , b:2 };

    // // comparing the object with itself
    // console.log(Object.is(obj1, obj1)); 
}

{
    // Javascript Object.is()

    // objects with same values
    // console.log(Object.is("JavaScript", "JavaScript")); 

    // // objects with different values
    // console.log(Object.is("JavaScript", "javascript")); 

    // // compare null values
    // console.log(Object.is(null, null));
}

{
    // is() With Custom Objects

    // create an object
    // let obj1 = { a: 1 };

    // // create another object
    // // with identical properties as obj1
    // let obj2 = { a: 1 };

    // // returns true because both arguments
    // // have the same reference
    // console.log(Object.is(obj1, obj1));

    // // returns false because obj1 and
    // // obj2 have different references
    // console.log(Object.is(obj1, obj2));

}

{
    // is() With Special Cases

    // Special Cases

    // console.log(Object.is([], []));  

    // console.log(Object.is(0, -0));  

    // console.log(Object.is(-0, -0)); 

    // console.log(Object.is(NaN, 0 / 0));  
}


// 5. JavaScript Object.hasOwnProperty()

// The Object.hasOwnProperty() method checks if the object possesses the given property.

{
    // const obj = {};
    // obj.id = 42;

    // // check if id is present in obj or not
    // console.log(obj.hasOwnProperty("id"));
}

{
    // Javascript Object.hasOwnProperty()

    // create an object with property id
    // const obj = {id: 42 , toString:10};

    // // check if id exists in obj 
    // console.log(obj.hasOwnProperty("id")); 

    // // check if name exists in obj 
    // console.log(obj.hasOwnProperty("name")); 

    // // inherited properties return false
    // console.log(obj.hasOwnProperty("10")); 

}

// 6. JavaScript Object.freeze()

{
    // The Object.freeze() method freezes an object i.e. it prevents the object from being modified.

    // let obj = {
    //     foo: "bar",
    //     new_foo:"one"
    //   };

    //   // freeze the obj object
    //   let o = Object.freeze(obj);
    //   let p = Object.freeze(obj);

    //   // changes will fail silently
    //   obj.foo = "bar1";
    //   console.log(obj.foo); 

    //   // cannot add a new property 
    //   obj.new_foo = "bar";
    //   console.log(obj.new_foo); 
}

// 7. JavaScript Object.getOwnPropertyNames()

{
    // The Object.getOwnPropertyNames() method returns an array of all the properties found in a given object.

    // const obj = {
    //     name: 'Alexander',
    //     age: 32,
    //     address: 'Macedonia',
    //   };

    //   // find out the properties present in obj
    //   const propertyNames = Object.getOwnPropertyNames(obj);

    //   console.log(propertyNames);

}

// 8. Javascript Object.setPrototypeOf()

{
    // The Object.setPrototypeOf() method sets the prototype of the specified object to another object or null.

    // create an empty object
    // const obj = {};

    // // create a non-empty object parent
    // const parent = { foo: 'bar' };

    // // set parent as the prototype of obj
    // Object.setPrototypeOf(obj, parent);

    // // print foo property of parent
    // // using the obj object
    // console.log(obj.foo);

}

// 9. JavaScript Object.toString()

{
    // The Object.toString() method returns the given object as a string.

    // create a number with value 10
    // let num = 10;

    // // check the type of num before
    // // using the toString() method
    // console.log(typeof num); 

    // // check the type of num after 
    // //using the toString() method
    // console.log(typeof num.toString()); 
}

// 10. JavaScript Object.valueOf()

{
    // The Object.valueOf() method returns the primitive value of the specified object.

    // create a new Number object with value of 12
    // let num = new Number(12);

    // console.log(num);

    // console.log(num.valueOf());
}

// 11. JavaScript Object.values()

{
    // The Object.values() method returns an array containing the enumerable values of an object.

    // // array-like object having integers as key
    // const obj = { 65: "A", 66: "B", 67: "C" };

    // // print the enumerable values of obj
    // console.log(Object.values(obj));

}

{
    // values() With Object Having Random Key Ordering

    // // object with random key ordering
    // const obj1 = { 42: "a", 22: "b", 71: "c" };

    // // print the enumerable values of obj1
    // console.log(Object.values(obj1));

}

{
    // JavaScript Object.values() With String

    // const string = "code";
    // console.log(Object.values(string));

    // values() with string returns an array of characters
}






