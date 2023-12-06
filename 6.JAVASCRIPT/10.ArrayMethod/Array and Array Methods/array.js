/* Javascript Array */

// const fruits = [];
// console.log(fruits);

// const fruits = ['today' , 'learn' , 'array'];
// console.log(fruits);

// fruits.push("banana", "apple", "peach");
// console.log(fruits);
// console.log(fruits.length);

// fruits[4] = "mango";
// console.log(fruits[4]);
// console.log(fruits);


// console.log(Object.keys(fruits));
// console.log(fruits.length);

// fruits.length = 10;
// console.log(fruits);

// console.log(Object.keys(fruits));
// console.log(fruits.length);

// console.log(fruits[8]);

// fruits.length = 2;
// console.log(Object.keys(fruits));
// console.log(fruits);
// console.log(fruits.length);



// Array length properties
// Accessing the First Array Element
// Accessing the Last Array Element
// Adding Array Elements
// Converting Arrays to Strings

/*

Array indexes start with 0:

[0] is the first array element
[1] is the second 
[2] is the third ...

*/

{
    // let newarray = ["madhu" , "vishal" , "kishor" , "chirag"]
    // console.log(newarray);
}

{
    // const newarrrays = [
    //     "one" ,
    //      "two" ,
    //       "three" ,
    //        "four"];  // javascript arrays  
    // console.log(newarrrays);  
}

/* Array length properties */

{
    // const newarrrays = [
    //     "one" ,
    //      "two" ,
    //       "three" ,];  // javascript arrays
          
    // console.log(newarrrays.length); // array length
}


/* Accessing the First Array Element */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits[3]);
}

/* Accessing the Last Array Element */

{
    // let fruits = ["Banana", "Orange", "Apple", "Mango"];
    // console.log(fruits[1]);
    // document.getElementById("demo").innerHTML = fruits[fruits.length-3];
}

/*  Adding Array Elements */

{
    // const fruits = ["Banana", "Orange", "Apple"];
    // document.getElementById("demo").innerHTML = fruits;
    
    // function myFunction() {
    //     fruits.push("Lemon");
    //     document.getElementById("demo-1").innerHTML = fruits;
    // }
    // myFunction();
}

/* The length property provides an easy way to append new elements to an array without using the push() method. */

// {
//     const fruits = ["Banana", "Orange", "Apple"];
//     document.getElementById("demo").innerHTML = fruits;

//     function myFunctionn() {
//     fruits[fruits.length] = "Lemon";
//     document.getElementById("demo-1").innerHTML = fruits;
//     }
// }

/* Adding elements with high indexes can create undefined "holes" in an array. */

{
    // const fruits = ["Banana", "Orange", "Apple"];
    // fruits[5] = "Lemon";
    // console.log(fruits);

    // let fLen = fruits.length;

    // let text = "";

    // for (i = 0; i < fLen; i++) {
    //     // text = text + fruits[i] + "<br>"
    //     text += fruits[i] + "<br>";
    // }

    // document.getElementById("demo").innerHTML = text;
}

/*****  Array Methods ********/

/* Converting Arrays to Strings */

{
    // const fruits = ["Banana", "Orange", "Apple"];
    // let newArray= fruits.toString();
    // console.log(newArray);
    // let text = typeof(newArray)
    // console.log(text);
}

/* The join() method also joins all array elements into a string. */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits.join(" + ");
}

/* Popping in javascript Array */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    
    
    // fruits.pop();
    // fruits.pop();
    // fruits.pop();
    // fruits.pop();

    // document.getElementById("demo-1").innerHTML = fruits;

    // console.log(fruits.length);
}

/* The pop() method returns the value that was "popped out" */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // document.getElementById("demo").innerHTML = fruits;
    
    // document.getElementById("demo-1").innerHTML = fruits.pop();
    // document.getElementById("demo-2").innerHTML = fruits.pop();
    // document.getElementById("demo-3").innerHTML = fruits.pop();

    // console.log(fruits);
}


/* Pushing in javascript Array */

/* The push() method adds a new element to an array (at the end) */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // document.getElementById("demo").innerHTML = fruits;
    // fruits.push("Kiwi");

    // document.getElementById("demo-1").innerHTML = fruits;
}

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];

    // document.getElementById("demo").innerHTML = fruits.push("Kiwi");

    // document.getElementById("demo-1").innerHTML = fruits.length;
}

/* Shifting Elements */

/* JavaScript Array shift() */

/* The shift() method removes the first array element and "shifts" all other elements to a lower index */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    // fruits.shift();
    // fruits.shift();
    // document.getElementById("demo-1").innerHTML = fruits;
}

/*  The shift() method returns the value that was "shifted out" */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits.shift();
    // document.getElementById("demo-1").innerHTML = fruits;
}

/*  JavaScript Array unshift() */
/* The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    // fruits.unshift("Lemon");
    // document.getElementById("demo-1").innerHTML = fruits;
}

/* The unshift() method returns the new array length */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits.unshift("Lemon");
    // document.getElementById("demo-1").innerHTML = fruits;
}

/*  Changing Elements */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    // fruits[1] = "Kiwi";
    // document.getElementById("demo-1").innerHTML = fruits;
}

/* JavaScript Array add element */

{
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // document.getElementById("demo").innerHTML = fruits;
    // fruits[fruits.length] = "Kiwi";
    // document.getElementById("demo-1").innerHTML = fruits;
}

/* JavaScript Array delete() */

/* Array elements can be deleted using the JavaScript operator delete. */

/* Using delete leaves undefined holes in the array. */

/* Use pop() or shift() instead. */

{
     // const fruits = ["Banana", "Orange", "Apple", "Mango"];
 
     // document.getElementById("demo").innerHTML =fruits;
 
     // delete fruits[2];
 
     // fruits[2] = "kiwi";
 
     // document.getElementById("demo-1").innerHTML =fruits;
 }
 
 /* Merging (Concatenating) Arrays */
 
 {
    //  const myGirls = ["Cecilie", "Lone"];
    //  const myboys1 = ["Emil", "Tobias", "Linus"];
    //  const myboys2 = ["ajay" ,"vijay" ,"sunjay"];
    //  const myChildren = myGirls.concat(myboys1 , myboys2);
 
    //  document.getElementById("demo").innerHTML = myChildren;
    //  console.log(myChildren);
 }
 
 /* The concat() method does not change the existing arrays. It always returns a new array. */
 
 /* Splicing and Slicing Arrays */
 
 /* JavaScript Array splice() */
 
 {
    //  const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //  document.getElementById("demo").innerHTML = fruits;
    //  fruits.splice(0 , 2, "item1" , "item2");
    //  document.getElementById("demo-1").innerHTML = fruits;
 }
 
 {
    //  const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //  document.getElementById("demo").innerHTML = "Original Array:<br> " + fruits;
    //  let removed = fruits.splice(2, 2, "Lemon", "Kiwi"); 
    //  document.getElementById("demo-1").innerHTML = "New Array:<br>" + fruits;
    //  document.getElementById("demo-2").innerHTML = "Removed Items:<br> " + removed; 
 }
 
 /*  Using splice() to Remove Elements */
 
 {
    //  const fruits = ["Banana", "Orange", "Apple", "Mango"];
    //  document.getElementById("demo-1").innerHTML = fruits;
    //  fruits.splice(0, 1);
    //  document.getElementById("demo-2").innerHTML = fruits;
 }
 
 /* JavaScript Array slice() */
 
 {
     // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
     // const newremove = fruits.slice(2 , 4);
     // document.getElementById("demo").innerHTML = fruits + "<br><br>" + newremove;
     // document.getElementById("demo1").innerHTML = fruits;
 }
 
 /*  Array.isArray */
 
 {
    //  let book = ["math"  , "chemistry"  , "physics" , "bio"];
    //  let books = "string";
    //  console.log(Array.isArray(book));
 }
 
 /*  javascript Sorting Array */
 
//  {
//      let book = ["math"  , "chemistry"  , "physics" , "bio" , "amazon"];
//      let books = book.sort();
//      console.log(books);
//  }
 
 /*  Reversing array */
 
 {
    //  let book = ["math"  , "chemistry"  , "physics" , "bio"];
    //  console.log(book);
    //  let bookss = book.reverse();
    //  console.log(bookss);
    //  let books =book.sort();
    //  console.log(books);
 }
 
 /*  Number Sort */
 
//  {
//      const number1 = [40, 12, 15, 81 ,150 ,200];
//      console.log(number1);
//      const number2 = number1.sort(function(a , b){return a - b});
//      console.log(number2);
//  }
 
 /*  Javascript Array Iteration */
 
 {
    //  const number1 = [45 , 56 , 78 , 23 , 96];
    //  let number2 = "";
    //  number1.forEach(myFunction);
 
    //  document.write(number2);
    //  function myFunction(value, index, array){
    //      number2 += value * 2 + "<br>";
    //  }
 }
 
 
 /*  javascript array map() */
 
 {
    //  const number1 = [56 , 798 , 345  ,35];
    //  const number2 = number1.map(myFunction);
 
    //  console.log(number2);
    //  function myFunction(value , index  , array){
    //      return value * 2;
    //  }
 }
 
 
 /*  javascript Array flatMap() */
 
 {
    //  const myarr = [1, 2, 3, 4, 5, 6];
    //  const newarr = myarr.flatMap((x) => x*2);
    //  console.log(newarr);
 }
 
 /* javascript array filter() */
 
 {
    //  const number1  =[45, 17 , 2, 46 , 78 , 15];
    //  const number2 = number1.filter(myFunction);
 
    //  function myFunction(age){
    //      return age <= 100;
    //  }
    //  console.log(number2);
 }
 
 /*  javascript array fill method */
 
 
 {
    //  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    //  const newfill = fruits.fill("1" , 3);
    //  console.log(newfill);
 }
 
 /* javascript array copywithin() method */
 
 {
     // const fruits = ["A" , "B" , "C" , "D" , "E" , "F"];
     // const newcopy = fruits.copyWithin(0 , 3 , 4);
     // console.log(newcopy);
 }
 
 /* javascript valueof() method */
 
 {
    //  const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango" , "watermelon" , "kiwi"  , "Olive"];
    //  const newfruits = fruits.valueOf();
    //  console.log(newfruits);
 }
 
 /*  javascript flat() method */
 
 {
    //  const fruits = [1,2,3,[4,[5,6,[7,8,9]]]];
    //  const newarray1 = fruits.flat();
    //  const newarray2 = fruits.flat(2);
    //  const newarray3 = fruits.flat(3);
    //  const newarray4 = fruits.flat(4);
    //  console.log(newarray1);
    //  console.log(newarray2);
    //  console.log(newarray3);
    //  console.log(newarray4);
 }
 
 /*  JavaScript Multidimensional Array */
 
 /* A multidimensional array is an array that contains another array. */
 
 {
     // // multidimensional array
     // const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];
 }
 
 {
     // let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];
 
     // let student1 = ['Jack', 24];
     // let student2 = ['Sara', 23];
     // let student3 = ['Peter', 24];
 
     // // multidimensional array
     // let studentsDatas = [student1, student2, student3];
 
     // // both example 1 and example 2 creates a multidimensional array with the same data.
 }
 
 /* Access Elements of an Array */
 
 {
     // let x = [
     //     ['Jack', 24],
     //     ['Sara', 23], 
     //     ['Peter', 24]
     //     ];
         
     //     // access the first item 
     //     console.log(x[0]);
         
     //     // access the first item of the first inner array
     //     console.log(x[0][0]); 
         
     //     // access the second item of the third inner array
     //     console.log(x[2][1]); 
 }
 
 
 /* Add an Element to a Multidimensional Array */
 
 {
     // // Adding Element to the Outer Array
 
     // let studentsData = [['Jack', 24], ['Sara', 23],];
     // studentsData.push(['Peter', 24]);
 
     // console.log(studentsData);
 }
 
 {
     // Adding Element to the Inner Array
     {
         // // using index notation
         // let studentsData = [['Jack', 24], ['Sara', 23],];
         // studentsData[1][2] = 'hello';
     
         // console.log(studentsData);
     }
     {
         // // using push()
         // let studentsData = [['Jack', 24], ['Sara', 23],];
         // studentsData[1].push('hello');
 
         // console.log(studentsData);
     }
     {
         // // the Array's splice() method to add an element at a specified index.
 
         // let studentsData = [['Jack', 24], ['Sara', 23],];
 
         // // adding element at 1 index
         // studentsData.splice(1, 0, ['Peter', 24]);
 
         // console.log(studentsData);
     }
 
     /*  Remove an Element from a Multidimensional Array */
 
     {
         // // remove the array element from outer array
         // let studentsData = [['Jack', 24], ['Sara', 23],];
         // studentsData.pop();
 
         // console.log(studentsData);
     }
     {
         // // remove the element from the inner array
         // let studentsData = [['Jack', 24], ['Sara', 23]];
         // studentsData[1].pop();
 
         // console.log(studentsData); // [["Jack", 24], ["Sara"]]
     }
     {
         // // the splice() method to remove an element at a specified index.
         // let studentsData = [['Jack', 24], ['Sara', 23],];
 
         // // removing 1 index array item
         // studentsData.splice(1,1);
         // console.log(studentsData);
     }
 }

