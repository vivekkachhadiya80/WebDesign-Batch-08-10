/*  Spread Operator */

// The spread operator ... is used to expand or spread an iterable or an array.

{
    // const arrValue = ['My', 'name', 'is', 'Jack'];
    // console.log(arrValue);
    // console.log(...arrValue);

    // {
    //     // In this case, the code:
    //     console.log(...arrValue)

    //     // is equivalent to:
    //     console.log('My', 'name', 'is', 'Jack');
    // }
}

// Copy Array Using Spread Operator

{
    // const arr1 = ['one', 'two'];
    // const arr2 = [...arr1, 'three', 'four', 'five'];

    // console.log(arr2); 
}

// Clone Array Using Spread Operator

{
    // let arr1 = [ 1, 2, 3];
    // let arr2 = arr1;

    // console.log(arr1);
    // console.log(arr2); 

    // // append an item to the array
    // arr1.push(4);

    // console.log(arr1);
    // console.log(arr2);

    // {
    //     let arr1 = [ 1, 2, 3];

    //     // copy using spread syntax
    //     let arr2 = [...arr1];

    //     console.log(arr1);
    //     console.log(arr2);

    //     // append an item to the array
    //     arr1.push(4);

    //     console.log(arr1);
    //     console.log(arr2);
    // }
}

// Spread Operator with Object


{
    // const obj1 = { x : 1, y : 2 };
    // const obj2 = { z : 3 };

    // // add members obj1 and obj2  to obj3
    // const obj3 = {...obj1, ...obj2};

    // console.log(obj3);
}


// Rest Parameter

// When the spread operator is used as a parameter, it is known as the rest parameter.

// You can also accept multiple arguments in a function call using the rest parameter. 

{
    // let func = function(...args) {
    //     console.log(args);
    // }
    
    // func(3);
    // func(4, 5, 6);
}


// Here,

// When a single argument is passed to the func() function, the rest parameter takes only one parameter.
// When three arguments are passed, the rest parameter takes all three parameters.

// Note: Using the rest parameter will pass the arguments as array elements.


// You can also pass multiple arguments to a function using the spread operator.

{
    // function sum(x, y ,z) {
    //     console.log(x + y + z);
    // }
    
    // const num1 = [1, 3, 4, 5];
    
    // sum(...num1); 
}

// If you pass multiple arguments using the spread operator, the function takes the required arguments and ignores the rest.