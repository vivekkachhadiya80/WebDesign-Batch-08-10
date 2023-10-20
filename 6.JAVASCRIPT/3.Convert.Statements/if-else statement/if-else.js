/*  JavaScript Statements */

/* In JavaScript, there are three forms of the if...else statement. */

/* 

if statement
if...else statement
if...else if...else statement

*/

/* Flow Chart of if-else */

/*  JavaScript supports the following forms of if..else statement */

/*
   1. if statement
      
   2. if...else statement
   
   3. if...else if... statement.

   4. switch statement

*/

/* if statement */

{
   //  if (expression) {
   //      Statement(s) to be executed if expression is true
   //   }
}

{
   // let age = 18;
   // if(age >= 18){
   //    console.log("You are eligible for voting");
   // }
}

/* if...else statement */


{
   //  if (expression) {
   //      Statement(s) to be executed if expression is true
   //   } else {
   //      Statement(s) to be executed if expression is false
   //   }
}


{
   // let age = 17;
   // if(age >= 18){
   //    console.log("You are eligible for voting");
   // }
   // else{
   //    console.log("You are not eligible for voting");
   // }
}


/* if...else if... statement */

/* The if...else if... statement is an advanced form of if…else that allows JavaScript to make a correct decision out of several conditions. */


{
   //  if (expression 1) {
   //      Statement(s) to be executed if expression 1 is true
   //   } else if (expression 2) {
   //      Statement(s) to be executed if expression 2 is true
   //   } else if (expression 3) {
   //      Statement(s) to be executed if expression 3 is true
   //   } else {
   //      Statement(s) to be executed if no expression is true
   //   }
}

{
   // let age = 19;

   // if (age >= 18 && age <= 50) {
   //    console.log("You are eligible for voting");
   // }
   // else if(age >= 50){
   //    console.log("You are not eligible for voting");
   // }
   // else{
   //    console.log("You are not eligible for voting");
   // }
}


/* There is nothing special about this code. It is just a series of if statements, where each if is a part of the else clause of the previous statement. Statement(s) are executed based on the true condition, if none of the conditions is true, then the else block is executed. */

{
   //  var book ='economic';

   //  if( book === 'history' ) {
   //     document.write("<b>History Book</b>");
   //  }

   //  else if( book == "maths" ) {
   //     document.write("<b>Maths Book</b>");
   //  }

   //  else if( book == "economics" ) {
   //     document.write("<b>Economics Book</b>");
   //  }
   //  else {
   //     document.write("<b>Unknown Book</b>");
   //  }
}

/* switch statement */

// if input = 1, "y", "yes" output = Continue....
// if input = 0, "n", "no" output = End...

{

   // let input = "n00";

   // if (input === "1"){
   //    document.write("Continues..")
   // } else if (input === "y"){
   //    document.write("Continues..")
   // }
   // else if (input === "yes"){
   //    document.write("Continues..")
   // }
   // else if (input === 0){
   //    document.write("End..")
   // }
   // else if (input === "n"){
   //    document.write("End..")
   // }
   // else if (input === "no"){
   //    document.write("End..")
   // }
   // else{
   //    document.write("Wrong input")
   // }
}

/*  === comparison */

{
   // let input = 1;

   // switch(input){
   //    case 1:
   //       document.write("Continue...");
   //       break;
   //    case "y":
   //       document.write("Continue...");
   //       break;
   //    case "yes":
   //       document.write("Continue...");
   //       break;
   //    case 0:
   //       document.write("End...");
   //       break;
   //    case "n":
   //       document.write("End...");
   //       break;
   //    case "no":
   //       document.write("End...");
   //       break;
   //    default:
   //       document.write("Wrong input");
   // }
}