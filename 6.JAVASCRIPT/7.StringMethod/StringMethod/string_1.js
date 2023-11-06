/***** javascript string ******/

// The String object is used to represent and manipulate a sequence of characters.

/* Primitive String */


{
    // const name = "vivek";
    // const string1 = "A string primitive + ${name}";
    // const string2 = 'Also a string primitive + ${name} ';
    // const string3 = `Yet another string primitive ${name}`;
    // console.log(string3);
}

/* String As Object */

{
    // const string4 = new String("A String object");
    // console.log(string4);
}


/******  Javascript String Method ******/

// String Length
// String charAt()
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charCodeAt()
// String split()
// String includes()

/***********************************************/

/******  String Length ******/

{
    // let text ="this is javascript";
    // let textlength = text.length;
    // console.log(textlength);
}


/******  String charAt() ******/

{
    // let demotext="this is jaVascript";
    // let demo = demotext.charAt(10);
    // let demo1 = demotext.charCodeAt(10);
    // console.log(demo);
    // console.log(demo1);
}

/****** String Slice() Return New String ******/

{
    // let Str="The morning is upon us.";
    // console.log(Str.length);
    // let part = Str.slice(10 , 18);
    // console.log(part);
}

/******  String Substring() Return New String ******/

{
    // let Str="The morning is upon us.";
    // let part = Str.substring(-5 , 11);
    // console.log(part);  
}

/****** String substr() ******/ 

{
    // let Str="abcdefghijklmnopqrstuvwxyz";
    // let part = Str.substr(10 ,12);
    // console.log(part);
}

/****** String replace() ******/

// {
//     function myFunction() {
//         let text = document.getElementById("para-1").innerHTML;
//         document.getElementById("para-1").innerHTML =
//         text.replace("visit","SkillQode");
//       }
// }

// {
//     let text = "please visit visit";
//     // document.write(text + "<br>");
//     let change = text.replace("visit" , "skillqode");
//     document.write(change + "<br>");
// }

// {
//     let text = "please visit MicrasolllP Micrasolllp";
//     document.write(text + "<br>");
//     let change = text.replace (/MICRASOLLLP/i, "skillqode");
//     document.write(change + "<br>");
// }

// {
//     let text ="please visit skillqode visit and visit again";
//     document.write(text + "<br>");
//     let change= text.replace(/visit/g , "most");
//     document.write(change);
// }


/****** String replaceAll() ******/

// {
//     let text ="I love cats. but Cats are very easy to love. Cats are very popular. but Cats Dangerous";
//     document.write(text + "<br>");
//     var change = text.replaceAll("cats" , "dogs");
//     var changee = text.replaceAll("Cats" , "Dogs");
//     document.write(change + "<br>");
//     document.write(changee);
// }

/****** String toUpperCase() ******/

// {
//     let text = "I love cats. but Cats are very easy to love. Cats are very popular. but Cats Dangerous";
//     let text1= text.toUpperCase();
//     console.log(text1);
// }

/******  String toLowerCase() ******/

// {
//     let text = "I LOVE CATS. BUT CATS ARE VERY EASY TO LOVE. CATS ARE VERY POPULAR. BUT CATS DANGEROUS";
//     let text1= text.toLowerCase();
//     console.log(text1);
// }

/******  String concat() ******/

{
    // let text1 = "this is ";
    // let text2 = "surat ";
    // let text3 = " it's good "
    // let text4 = text1.concat(text3 , text2);
    // document.write(text4);
}

/******  String trim() ******/

// {
//     let demotext="         this is javascript.      ";
//                            01234567890123456789
//     // let text = demotext.length;
//     let demo = demotext.trim();
//     let text = demo.length;
//     document.write(text);
// }

/******  String trimStart() ******/

// {
//     let demotext="         this is javascript.       ";
//     // let text = demotext.length;
//     let demo=demotext.trimStart();
//     let text = demo.length;
//     console.log(text);
// }

/******  String trimEnd() ******/

// {
//     let demotext ="         this is javascript.    "
//     var text = demotext.length;
//     let demo = demotext.trimEnd();
//     var text = demo.length;
//     console.log(text);
// }

/******  String padStart() ******/

// {
//     let demotext = "5";
//     let demo = demotext.padStart(8 , "00000000000");
//     console.log(demo);
// }

/******  String padEnd() ******/

// {
//     let demotext="5";
//     let demo=demotext.padEnd(5 , "0");
//     console.log(demo);
// }



/******  String charCodeAt() ******/

// {
//     let demotext="this is string values";
//              //   012345678901234567890
//     let demo = demotext.charCodeAt(17);
//     console.log(demo);
// }

/****** String split() ******/

    // {
    //     let text = "HelloHello";
    //     const myArr = text.split("");
        
    //     text = "";
    //     for (let i = 0; i < myArr.length; i++) {
    //       text = text + myArr[i] + "<br>"
    //     }
    //     document.write(text);
    // }

/******  String includes() , true and false ******/

    // {
    //     let demotext="this is string values";
    //     let demo = demotext.includes("w");
    //     console.log(demo);
    // }


/* JAVASCRIPT STRING METHOD */

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

/******   String indexOf() ******/

// {
//     let s="This code undefiend code code !";
//     let part = fruits.indexOf();
//     console.log(part);
// }

// {
//     let s="This code undefiend code code !";
//     let part = s.indexOf("o" , 1);
//     console.log(part);
// }

/******   String lastIndexOf() ******/

// {
//     let s="This code undefiend code code !";
//     let part = s.lastIndexOf("o" , 50);
//     console.log(part);
// }

// {
//     let s="This code undefiend code code !";
//     let part = fruits.lastIndexOf("o" , 20);
//     console.log(part);
// }


/******  String search() ******/


// {
//     let fruits="This code undefiend code code !";
//     let part = fruits.search("undefiend");
//     console.log(part);
// }

// {
//     let fruits="javascript is 'most' populer langauage";
//     let part = fruits.search(/Most/i);
//     console.log(part);
// }

/******  String match() ******/

// {
//     let text = "this is javascript match method";
//     let part  = text.match(/t/g);
//     console.log(part);
// }

/******  String matchall()/ remider with array ******/

{
    // const str = 'this is javascript';
    // const regexp = /is/g;
    // const array = [...str.matchAll(regexp)];
    // console.log(array);
}

// {
//     let text = "this is javascript match is method";
//     let part = text.matchAll(/is/g);
//     console.log(part);
// }

/******  String startsWith() ******/

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.startsWith("Hello");
//     console.log(part);
// }

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.startsWith("Hello" , 0);
//     console.log(part);
// }

/******  String endWith() ******/

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.endsWith(".");
//     console.log(part);
// }

// {
//     let text = "Hello world, welcome to the universe.";
//     let part = text.endsWith("universe" , 50);
//     console.log(part);
// }


/******   JavaScript Template Literals ******/

/******  back-Tic syntex ******/

// {
//     let text = `hello world!`;
//     console.log(text);
// }

/******  quotes inside string ******/

// {
//     let text = `He's name 'joe'`;
//     console.log(text);
// }

/******  allow multiline string ******/

// {
//     let  text = "this
//     is Infinite pages";
//     console.log(text);
// }

// {
//     let text = `this
//     is
//      Infinite
//       pages`;
//     console.log(text);
// }






