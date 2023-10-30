// JavaScript Regex

// In JavaScript, a Regular Expression (RegEx) is an object that describes a sequence of characters used for defining a search pattern. 

{
    /^a...s$/
}

// The above code defines a RegEx pattern. The pattern is: any five letter string starting with a and ending with s.

// A pattern defined using RegEx can be used to match against a string.

// Image Here

// Create a RegEx

// There are two ways you can create a regular expression in JavaScript.

// Using a regular expression literal:
// The regular expression consists of a pattern enclosed between slashes /.

{
    const regularExp = /abc/;
    // Here, /abc/ is a regular expression.
}

// Using the RegExp() constructor function:
// You can also create a regular expression by calling the RegExp() constructor function.

{
    const reguarExp = new RegExp('abc');
}

{
    const regex = new RegExp(/^a...s$/);
    console.log(regex.test('alias')); // true
}

// In the above example, the string alias matches with the RegEx pattern /^a...s$/. Here, the test() method is used to check if the string matches the pattern.

// There are several other methods available to use with JavaScript RegEx. Before we explore them, let's learn about regular expressions themselves.

// Specify Pattern Using RegEx

// To specify regular expressions, metacharacters are used. In the above example (/^a...s$/), ^ and $ are metacharacters.

// MetaCharacters
// Metacharacters are characters that are interpreted in a special way by a RegEx engine. Here's a list of metacharacters:

{
    // [] . ^ $ * + ? {} () \ |
}

// JavaScript Regular Expression Methods

// you can either use RegExp() or regular expression literal to create a RegEx in JavaScript.

{
    // const regex1 = /^ab/;
    // const regex2 = new Regexp('/^ab/'); 
}

// In JavaScript, you can use regular expressions with RegExp() methods: test() and exec().

// There are also some string methods that allow you to pass RegEx as its parameter. They are: match(), replace(), search(), and split().

// Regular Expressions

{
    // const string = 'Find me';
    // const pattern = /me/;

    // // search if the pattern is in string variable
    // const result1 = string.search(pattern);
    // console.log(result1); // 5

    // // replace the character with another character
    // const string1 = 'Find me';
    // string1.replace(pattern, 'found you'); // Find found you

    // // splitting strings into array elements
    // const regex1 = /[\s,]+/;
    // const result2 = 'Hello world! '.split(regex1);
    // console.log(result2); // ['Hello', 'world!', '']

    // // searching the phone number pattern
    // const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
    // const result3 = regex2.exec('My phone number is: 555 123-4567.');
    // console.log(result3); // ["555 123-4567", "555", "123", "4567"]
}

// Regular Expression Flags

// Flags are used with regular expressions that allow various options such as global search, case-insensitive search, etc. They can be used separately or together.

// Regular Expression Modifier  

{
    // const string = 'Hello hello hello';

    // // performing a replacement
    // const result1 = string.replace(/hello/, 'world');
    // console.log(result1); // Hello world hello

    // // performing global replacement
    // const result2 = string.replace(/hello/g, 'world');
    // console.log(result2); // Hello world world

    // // performing case-insensitive replacement
    // const result3 = string.replace(/hello/i, 'world');
    // console.log(result3); // world hello hello

    // // performing global case-insensitive replacement
    // const result4 = string.replace(/hello/gi, 'world');
    // console.log(result4); // world world world
}

// Validating the Phone Number

{
    // // program to validate the phone number

    // function validatePhone(num) {

    //     // regex pattern for phone number
    //     const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

    //     // check if the phone number is valid
    //     let result = num.match(re);
    //     if (result) {
    //         console.log('The number is valid.');
    //     }
    //     else {
    //         let num = prompt('Enter number in XXX-XXX-XXXX format:');
    //         validatePhone(num);
    //     }
    // }

    // // take input
    // let number = prompt('Enter a number XXX-XXX-XXXX');

    // validatePhone(number);
}

// Validating the Email Address

{
    // // program to validate the email address

    // function validateEmail(email) {

    //     // regex pattern for email
    //     const re = /\S+@\S+\.\S+/g;

    //     // check if the email is valid
    //     let result = re.test(email);
    //     if (result) {
    //         console.log('The email is valid.');
    //     }
    //     else {
    //         let newEmail = prompt('Enter a valid email:');
    //         validateEmail(newEmail);
    //     }
    // }

    // // take input
    // let email = prompt('Enter an email: ');

    // validateEmail(email);
}