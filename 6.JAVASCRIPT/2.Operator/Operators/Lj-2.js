/* JavaScript Operators */

/*

1. Arithmetic Operators 
2. Assignment Operators 
3. Comparison (Relational) Operators 
4. Logical Operators
5. Special Operators

*/


/* Arithmetic Operators */

/*

1.    + (Addition)
2.    - (Subtraction)
3.    * (Multiplication)
4.    / (Division)
5.    % (Modulus)
6.    ++ (Increment)
7.    -- (Decrement)
8.    **(Exponentiation)

*/


/* Arithmetic Operators */

// {

//     var a = 21;
//     var b = 2;
//     var c = a**b;
//     console.log(c);
//     {
//         var a = 5;
//         var b = 2;
//         document.getElementById("demo1").innerHTML = b**a;
//     } 
// }


/*  ASSIGEMENT OPERATOR  */

/*

= (Simple Assignment )

Ex: C = A + B will assign the value of A + B into C

+= (Add and Assignment)

Ex: C += A is equivalent to C = C + A

−= (Subtract and Assignment)

Ex: C -= A is equivalent to C = C - A

*= (Multiply and Assignment)

Ex: C *= A is equivalent to C = C * A

/= (Divide and Assignment)

Ex: C /= A is equivalent to C = C / A

%= (Modules and Assignment)

Ex: C %= A is equivalent to C = C % A

**= (Exponentiation and assignment)

Ex: C**=A IS equivalent to C=C**A

*/

{
    // var a = 3;
    // var b = 3;
    // var c = b+=a; // (b+=a) b = b+a (b=3+3) (b=6)
    // var c = b-=a; // (b-=a) b = b-a (b=6-3) (b=3)
    // var c = b*=a; // (b*=a) b = b*a (b=3*3) (b=9)
    // var c = a%=b  // (a%=b) a = a%b (a=3%9) (a=3)
    // var c = a/=b  // (a/=b) a = a/b (a=3/3) (a=1)
    // var c = a**=b // (a**=b) a = a**b (a=0.33**9) (a = 0.00005080);
    // var linebreak = "<br />";
    // document.getElementById("demo2").innerHTML=(c);
}

/* Comparison Operators */

/*

== (Equal)
Checks if the value of two operands are equal or not, if yes, then the condition becomes true.
Ex: (A == B) is not true.

=== (identical equel and same type)
The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

!= (Not Equal)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.
Ex: (A != B) is true.


!==	(not equal value or not equal type)
Checks if the value of two operands are equal or not, if the values are not equal, then the condition becomes true.

> (Greater than)
Checks if the value of the left operand is greater than the value of the right operand, if yes, then the condition becomes true.
Ex: (A > B) is not true.

< (Less than)
Checks if the value of the left operand is less than the value of the right operand, if yes, then the condition becomes true.
Ex: (A < B) is true.

>= (Greater than or Equal to)
Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A >= B) is not true.

<= (Less than or Equal to)
Checks if the value of the left operand is less than or equal to the value of the right operand, if yes, then the condition becomes true.
Ex: (A <= B) is true.

*/

{
    // var a = 11;
    // var b = 10;
    
    // var c = a == b;
    // var c = a === b;
    // var c = a != b ;
    // var c = a !== b ;
    // var c = a > b;
    // var c = a < b;
    // var c = a >= b;
    // var c = a <= b ; 

    // document.getElementById("demo4").innerHTML=c;
}

/* Logical Operators */

/*

&& (Logical AND)

If both the operands are non-zero, then the condition becomes true.
Ex: (A && B) is true.


|| (Logical OR)
If any of the two operands are non-zero, then the condition becomes true.
Ex: (A || B) is true.


! (Logical NOT)
Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false.
Ex: ! (A && B) is false.

*/

/*

(a && b) => false
(a || b) => true
!(a && b) => true

*/

{

    // let x = true;
    // let y = true;
    // let a = true;
    // let z = x && y && a;
    // document.getElementById("demo4").innerHTML=z;
    // console.log(z);


    // let x = false;
    // let y = false;
    // let a = true;
    // let z = (x || y) ;
    // document.getElementById("demo4").innerHTML=z;
    // console.log(z);


    // let xx = false;
    // let yy = false;
    // let aa = true;
    // let zz = !(x || y) ;
    // document.getElementById("demo4").innerHTML=zz;
    // console.log(zz);
}


/* Miscellaneous Operator

? tarnary operator
: (Conditional )
If Condition is true? Then value X : Otherwise value Y

*/

/*

((a > b) ? 100 : 200) => 200
((a < b) ? 100 : 200) => 100

*/

{
    // var a = true;
    // var b = true;
    // var c = a && b;
    // var d = c ? "Login" : "Logout";
    // document.getElementById("demo4").innerHTML=d;
}

