/*

JavaScript Introduction :
=============================

=>> what is JavaScript ✅
=>> why we need JavaScript  ✅
=>> Characteristics of JS.
        > client-side scripting language
        > dynamically typed
        > weakly typed
        > interpreted language
        > single threaded

=>> How many ways we have to execute the JS
        > 2 ways
            1. inside the browser
                > console of the browser
                > html file + Js file

            2. outside the browser
                > node js , open the js file in the terminal & run the command
                        >> node fileName.js

=>> & link the JS with HTML
        > 3 ways
            1. inline
            2. internal
            3. external



 /*
1. ways to use JS. ✅
    >> Inside the Browser
    >> outside the Browser

2. ways to add the JS in HTMl file   ✅
    >> Inline
    >> Internal
    >> External

3. What is Tokens
4. what is tokenization.
5. Types of Tokens
    1. keywords
    2. identifier
    3. operators
    4. literals
    5. separators
    6. punctuators
    7. comments
console.log("I am external JS");
console.log(2 + 3);

console.clear();

/*
? what is Token
* It is smallest unit of meaningful code.

todo : code
let age  = 28 ;

todo : tokens
let  - keyword
age  - identifier
=    - operator
28   - literal [ value, data, info]
;    - separators

! the process of break it down the entire code into tokens is known as "tokenization".


??      Types of TOkens   ??
let age = 28 ;  // we are learning tokens

    1. keywords
    2. identifier
    3. operators
    4. literals
    5. separators
    6. punctuators
    7. comments


    1. keywords :
        * These are the pre-defined words that have some meaning the the language
        >> Examples : if, else, do , while ,for,

    2. identifier
        * These are the user defined words that are used to identify the data
        >> like - age , username , password, email etc...

    3. operators
        * These are the special type of symbols, those meaning is pre-define ,
        * These are used to perform some kind of operation on operands
        *
            ? operands : these are the values on that operation happen

        ? categories Operators :
            * 3 types based on number of operands required
            >> 1. unary operator
            >> 2. binary operator
            >> 3. ternary operator

    4. literals
        * these are the values, data, info etc.. that we are going to store in the memory
        *
        ? >> types of literals / DT
            ? primitive DT
                1. number
                2. bigint
                3. boolean
                4. string
                5. undefined
                6. null
                7. symbol

            ? non-primitive DT
                1. function  ()
                2. object    {}
                3. array     []

    5. separators :
        * it is used to separate the entities, list , statement
        eg :  , : ;

    6. punctuators
        * these are the symbols that have some syntactic meaning
        eg : == , >, < , !, || , &&  etc..
        eg : [] & {}

    7. comments
        * description of the code
        > flow
        > working
        > execution
        > approach
        etc.....
            ? ways to add comments in JS
            single line comment -  //
            multi line comment  - / *   comment   * /



            /*
? identifier  :
*  These are the user define words, that are used to identify the data

for eg - let age , let name , let userName , let CourseName ,
let trainerName , let Fee , let collegeName , let password etc..

!! Rules of an identifiers !!

1. Keywords can't  be used as an identifier.
2. Identifiers can't start with number , but number can be a part of the identifier.
3. spaces are not allowed, such as an identifier should be a single word.

4. we can't use special symbols except dollar & underscore

5. use descriptive words as an identifier such as, short , simple & meaningful.


? better practices -
1. try to use camelCasing
    * 1st word is in lowercase
    * from the 2nd word ,first letter of each word should be in a uppercase.
    * eg - userName , findAge , confirmPassword , userId etc.

2. if u have bigNames as an identifiers then use the underscore to separate the words
    * eg - student_admission_details

3. for constant / important values use syntax like -
    * eg,       __ID__ , __id , _id_ , __KEY__


*/

// let if ;
// let for ;
// let while ;

// let user_01 ;  // ✅
// let 01_user ;  // ❌
// let 1 ;        // ❌

// let user name ;  // ! error - ❌
// let userName; // ✅
// let user, name; // let user , let name ✅

let user_01; //  ✅
let user$01; //  ✅

// let user!01 //  ❌
// let user@01 //  ❌
// let user#01 //  ❌
// let user%01 //  ❌
// let user^01 //  ❌
// let user*01 //  ❌
// let user&01 //  ❌

let u1, u2, n1, n2; // it is correct , but we need to avoid to use an identifiers like this -  ❌
let user_1, user_2, num_01, num_02; //  ✅

/*
? variable :
* It is a container that holds / contains the any type data in the memory with one identifier.

? ways to declare the variables in JS -
* 3 ways - let , var & const

* declaration + initialization both should happen together

declaration
? let age1 ;
? const age2 ;
? var age3 ;

initialization
age1 =  23
age2 =  33
age3 =  24


re-declaration ;
* creating a variable again with same identifier
let userName ;
let userName ;

re-initialization ;
*again assign the value to the variable
userName = "gagan"
userName = "Gagan Baghel"

? declaration + initialization together
let age = 28 ;
*we create the variable as well as we assign the value at a same time

? re-declaration + re-initialization together
let age = 38 ;
*we create the variable again as well as we assign the value again at a same time





? #1. const -
todo :  declaration + initialization both together only once is allowed.
we use const to declare the variables whenever we have constant values , or the values that we knowns, there is no need to change in future,


*/
// * declaration alone is not allowed
// then, initialization is not possible before declaration
// then, re-initialization is not possible before declaration
// then, re-declaration is not possible before declaration
// const id ;  // ! const' declarations must be initialized.

const id = "717114";
console.log(id);

// ? #2. let -
// todo : re-declaration is not allowed
let myAge; // declaration  ✅
myAge = 28; // initialization  ✅
myAge = 29; // re-initialization  ✅
let myName = "Gagan Baghel"; // declaration + initialization  ✅

// let myName ; // re-declaration ❌
// let myName ; // re-declaration + initialization ❌
// let myName ; // re-declaration + re-initialization ❌

// ? #3. var - in this everything is allowed

/*
??? when to use which one ???

* use const - if u have constant values
* rest use let for everything
* var - avoid to use
*
*


/*
? unary operator -
* it required only 1 operand to perform operation.

? #1 increment operator
    >> pre-increment
    * first update the value then assign

        > let b = 10 ;
        * let a = b++ ;
        b = 10 + 1 ==> b = 11
        a = b      ==> a = 11
        * console.log(a)   // 11
        * console.log(b)  // 11

    >> post-increment
    * first assign the value then update the value

        let c = 10
        * let d  = c++
        >>  d = c       ==>   d = 10
        >>  c = c + 1   ==>   c = 11

        * console.log(c)  // 11
        * console.log(d)  // 10
*/
// ! hint : first update the value then assign the value -
// let a = 29;
// let b = ++a;
// let c = ++a + 20;
// let d = a + b + c;

// console.log(a)  // 31   29
// console.log(b)  // 30   30
// console.log(c)  // 51   51
// console.log(d)  // 112  110

// let a = 29;
// let b = ++a;
// let c = ++a + ++b;
// let d = ++a + ++b + ++c;

// console.log(a); // 32
// console.log(b); // 32
// console.log(c); // 63
// console.log(d); // 127

// let a = 29;
// let b = a++;
// let c = a++ + 20;
// let d = a + b + c;

// console.log(a); // 31
// console.log(b); // 29
// console.log(c); // 50
// console.log(d); // 110

// let a = 29;
// let b = a++;
// let c = a++ + b++;
// let d = a++ + b++ + c++;

// console.log(a); //
// console.log(b); //
// console.log(c); //
// console.log(d); //

let a = 29;
let b = a--;
let c = a-- + 20;
let d = a + b - c;

console.log(a); // 27
console.log(b); // 29
console.log(c); // 48
console.log(d); // 8

console.clear();

// ? #3. logical not operator - !  => true to false ,false to true

console.log(!true); // false
console.log(!false); // true

console.log(!(20 < 30)); // !true  ==> false

console.clear();

// ? falsy & truthy
// falsy --> 0 , "" , null , []
console.log(!20 < !30);
// !true < !true
// false < false
// * implicit type conversion happen => boolean value convert into number automatically
// 0 < 0  => false

console.log(!20 < 30);
// !true < 30
// false < 30
//  0 < 30 ==> true

console.log(20 < !30);
// 20 < !true
// 20 < false
// 20 < 0  ==> false

console.clear();

// ? #4. typeof  - it return the data type of the variable / data

console.log(typeof 20);
console.log(typeof 22n);

console.log(typeof false);
console.log(typeof true);

console.log(typeof "20");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol());

console.log(typeof []);
console.log(typeof {});
console.log(typeof function fun() {});

console.clear();

if (30 < 39) {
	console.log("yes");
} else {
	console.log("no");
}

// ? ternary operator
// * syntax - (condition)? true : false

30 < 39 ? console.log("yes") : console.log("no");

/*
? What is String in JS
* it is primitive DT

? 2. what is use of String
            or
? 2. why we need String in JS
* it used to store the any data of any Type as it is - as a string value
for eg ::
        >> let num= "22"
        true == "true"
        null == "null"
        [1,2,3,4] == "[1,2,3,4]"
*/

console.log(typeof "22");
console.log(typeof "true");
console.log(typeof "null");
console.log(typeof "NaN");
console.log(typeof "undefined");
console.log(typeof "{}");
console.log(typeof "[]");
console.log(typeof "function fun(){}");

/*
!! Ways to create the Strings in  JS !!

    >> single quotation   [ '' ]
    >> double quotation   [ "" ]
    >> back ticks  / template literals  [ ``  ]

    >> String()  - string constructor without new keyword
                >> String('demo')
                >> String("demo")
                >> String(`demo`)
                >> String(22)
                >> String(true)
                >> String(false)
                >> String([1,2,3])
                >> String({key : "value"})

    >> new String()  - string constructor with new keyword
                >> new String('demo')
                >> new String("demo")
                >> new String(`demo`)
                >> new String(22)
                >> new String(true)
                >> new String(false)
                >> new String([1,2,3])
                >> new String({key : "value"})

                example :- let str_01 = "this is the demo String";
                        console.log(str_01); => variable name
                        console.log(typeof str_01); => checks the datatype of a value.

*/

console.clear();

// ! ways to create the string -
/*
let str_01 = "this is the demo string";
console.log(str_01); // this is the demo string
console.log(typeof str_01); // string

let str_02 = "this is the demo string";
console.log(str_02); // same as example 01
console.log(typeof str_02);

let str_03 = `this is the demo string`;
console.log(str_03);
console.log(typeof str_03); // backticks primitive string
console.clear();

let name = "Rohit";
let message = `Hello ${name}`; // hello rohit
console.log(message); // primitive String

let str_05 = String("this is the demo string");
console.log(str_05); // primitive String
console.log(typeof str_05);

let str_06 = String(`this is the demo string`);
console.log(str_06); // backticks string -> Primitive String
console.log(typeof str_06); // String type

console.clear(); // all clear till above program and start from the below program

let str_07 = String(22); // convert number into String
console.log(str_07); // Initially 22 is a number
console.log(typeof str_07);

let str_08 = String(true);
console.log(str_08); // True -> console.log(typeof true); => boolean
console.log(typeof str_08); // String Type

let str_9 = String(false);
console.log(str_9); // False
console.log(typeof str_9); // String

let str_10 = String([1, 2, 3, 4]);
console.log(str_10); // 1,2,3,4
console.log(typeof str_10); // this an array but String ->when you pass String(). js convert into comma-separate

let str_11 = String({ key: "value" });
console.log(str_11); // [object object]
console.log(typeof str_11); // String

console.clear();

let str_12 = 22;
console.log(str_12); // 22
console.log(typeof str_12); // Numner
console.log(typeof str_12.toString()); // String the number into its String represent

console.log(typeof str_12.toString());
console.log(typeof [1, 2, 3].toString()); // convert into array to string
console.log(typeof { key: "value" }.toString()); // String type
console.clear();

console.log(String(null)); // "null"
console.log(null.toString()); // type Error

let str_13 = str_12.toString(); //=> Number to String and storing it.
console.log(str_13); // 22
console.log(typeof str_13); // String

console.clear();

let str_14 = new String("demo string");
console.log(str_14); // [String: 'demo string']
console.log(typeof str_14); // object

console.clear();

// ! string Interpolation
let userName = "deepak";
let age = 28;
let greet = `Hello ${userName}, age is : ${age}`;
console.log(greet); // hello deepak , age is : 28


let a = "Hello";

let b = new String("Hello");  ===> when we create string with "NEW" keyword its always count the => object

console.log(typeof a);

console.log(b);
console.log(typeof b);



let a = "Hello";
let b = new Strin("Hello");
console.log(a==b);   // true
console.log(a===b);      //false

== :- performs type values compare equal.
=== :- checks both type and value.One is a primitive String, the other is an objects.

=========================================================================================================


--------------FUNCTION----------------------------


==> 1. Defination :- A function is a block of code and reusable
 code designed to perform a specific task.We can execute it
  whenever we need by the calling the function.


  Syntax:- function functionName(){
      // code to execute
    }


  example :- function greet(){
             console.log("Hello Rohit !");
         }
  greet();// function calling
/*

===>2..  function with Parameters
          :- parameters are variable that we pass value/declaring a function.


      function Add(a,b){ // parameter function
      console.log(a+b);
      }
      Add(10,20);
      Add(30,50);

===> 3. function with Return
      . :- The return keyword sends a value back from the function.


funtion add(a,b){
return a+b;     // 30
}
let result = add(10,20);
console.log(result);

===> 4. Anonymous Function:-
          Defination :- A function that does not have a name is called an Anonymous function.

        example:-
               let greet = function(){ // has no name
               console.log("Hello JavaScript");
               }
               greet();


===> 5.  Function Expression
          Definition :- When we store a function inside a variable,
            it is called funtion expression.

          Example:-
             let add = funtion(a,b){
             return a+b;
             };
             let result = add(20,30);
             console.log(result);


===> 6.   Arrow Function.
           Definition:-  An Arrow function is a shorter way of writing a function
            in JavaScript.It was introduced in ES6(2015).

        Syntax:- let function =(parameters)=>{
            //
            };

            Example:-
                     let add=(a,b)=>{
                        return a+b;
                        }
                        console.log(add(10,20));

                        (OR)
                    let add = (a,b)=> a+b;
                     console.log(add(10,20));



    ==> 7. A function declared inside the another function is called a Nested function.
        Example :-
                function outerFunction(){
                console.log("This is Outer Function.");

                funtction innerFuntion(){
                console.log("This is Inner Function.")
                }
                 innerFunction();
         }
         outerFunction();

    ==> 8. HOF- Higher-Oder Function.
           Defination :- A funtion that accepts another function as an
                         argument or returns another function is called a Higher-Order Function(HOF).

            Example :-
                     function greet(){
                     console.log("Hello Rohit..!");
                     }
                     function display(callback){
                     callback();
                     }
                     display(greet);

    ===> 9.  CallBack Function. (CLF)
             Defination  :- A function passed as an argument to another function and executed inside that function is called a callback function.

             Example :-
                      function SayHello(){
                      console.log("Hello !");
                      }
                      function process (callback){
                      console.log("Processing .....");
                      callback();                  // output :-Processing
                    }                              //           Hello
                      process(SayHello);


    ===> 10. IIFE-(Immediately Invoked Function Expression.)
             Defination :- A function that is executed immediately
             after it is created is called an immediately invoked function expresion.

             Syntax:-   (function(){
                           // code
                           })();

            Example :-  (function(){
                         console.log("Helllo JavaScript !");
                          })();


*/

/*
  ===================> ARRAY <================================================

Array ?

what is an array
why we need
syntax -

Data type
How to verify something is an array or not

? crud operations
    >> with index - normal way
    >> by methods
        > PUSH
        > POP
        > SHIFT
        > UNSHIFT
        * SPLICE
/*
? #1. what is an Array in JS
* it is a non-primitive DT.

? #2. why we need an array
* to store 1 or more than 1 data inside the 1 variable.


? #3. How to create - Syntax ?
>> enclosed all the data/items/values inside the [] and all items should be separated by the comma
>> In JS, we can store any type of data inside an array -
* let array_01 = [1,2,3,4,5,6]

? create  1 array -
print the array
print each value of an array


? what is the return of arrayName[index]
* if index value is less than length of an array u will get - item / value / element else -> u will get undefined

*/

let array_01 = [1, 2, 3, 4, 5, 6];
console.log(array_01);
console.log(typeof array_01);

let isArray = Array.isArray(array_01);
console.log(isArray);

// ? how to print each item of an array -

console.log(array_01[0]);
console.log(array_01[1]);
console.log(array_01[2]);
console.log(array_01[3]);
console.log(array_01[4]);
console.log(array_01[5]);
console.clear();

console.clear();
// ? update - arrayName[indexValue] = new value ;

console.log(array_01);
array_01[0] = "first";
console.log(array_01);

//  length starts with 1
//  index starts with 0
// ? what is last index = length  - 1

array_01[array_01.length - 1] = "last";
console.log(array_01);
array_01[array_01.length] = "insert at the end of an array";
console.log(array_01);

console.clear();

console.log(array_01[0]);
console.log(array_01[10]);
console.clear();

console.log(array_01);
array_01[3] += undefined;
console.log(array_01);

console.clear();

let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.shift());
console.log(arr);

console.log(arr.unshift("first"));
console.log(arr);

arr.pop();
console.log(arr);

arr.push("last");
console.log(arr);

/*

!! methods of an array !!

1. shift() :
    * it remove the 0th index item & return it as an output

2. unshift("new item") :
    * it add the item at the 0th index & return the length of an updated array
    >>> all items get shift to the currentIndex + 1 , or in RHS by 1

3. pop() :
    * it remove the last index item & return it as an output

4. push("new item") :
    * it add the item at the last index & return the length of an updated array

!! all these methods directly change the main array -

? 1. create an array & perform crud operation by methods
let arr = [1,2,3,4,5]

    >> create an array
    >> print an array
    >> print each item of an array - by using for loop
    >> update the 0th index , last index value
    >> add the new element at the end of an array without using any method

    >> perform - insertion & deletion  at 0th & lastIndex of an array


    5. Splice :-

? #1. Splice( p1 , p2 , p3)

p1 => starting index
p2 = DeleteCount => how many items u want to delete
p3 => elements that u want to add

* p3 is optional -

!! we can add , delete ,replace any item from any index value of an array - by using splice() method



let arr = [1, 2, 3, 4, 5]

// ? delete the 0th index value
console.log(arr)
arr.splice(0, 1)
console.log(arr)

// ? delete the last index value
arr.splice(arr.length - 1, 1)
console.log(arr)

// ? delete the middle index value
arr.splice(1, 1)
console.log(arr)

// ? add the 0th index value
arr.splice(0, 0, 'first')
console.log(arr)

// ? add the last index value
// arr.splice(arr.length - 1, 0, 'first')
// console.log(arr)

// ? add the value at the end of an arr
arr.splice(arr.length, 0, 'last')
console.log(arr)

// ? add the middle index value
arr.splice(2, 0, 'middle')
console.log(arr)


// ? replace the 0th index value
arr.splice(0, 1, 1)
console.log(arr)

// ? replace the last index value
arr.splice(arr.length - 1, 1, 5)
console.log(arr)
// ? replace the middle index value
arr.splice(2, 1, 3)
console.log(arr)


console.clear()


// ? #2. indexOf(item / element of an array ) -
// * it return the index value of the first occurrence of  given element of an array , if & only if that item is present in the main array else -1

// arr= [ 1,2,3,4,5]
console.log(arr.indexOf(4))   // 3
console.log(arr.indexOf(40))  // -1

// ? #3. lastIndexOf(item / element of an array ) -
// * it return the index value of the last occurrence of  given element of an array , if & only if that item is present in the main array else -1

// arr= [ 1,2,3,4,5]
console.log(arr.lastIndexOf(4))   // 3
console.log(arr.lastIndexOf(40))  // -1

// ? #4. includes(item) => it return true or false.
console.log(arr.includes(4))  // true
console.log(arr.includes(40)) // false

// ? #5. reverse()
// * it reverse the main array
console.log(arr)
console.log(arr.reverse())
console.log(arr)

// ? #6. slice(SI , EI )
// * EI value is not includes in the sub array
let tech = ['HTML', 'CSS', 'JS', "REACT", "NODE", ' EXPRESS', "mongoDb"]

let frontend = tech.slice(0, 4)
console.log(frontend)

let backend = tech.slice(4)
console.log(backend)

// ? #7. join  => array to string

console.log(tech.join())
console.log(tech.join(""))
console.log(tech.join("-"))
console.log(tech.join(" - "))
console.log(tech.join("/"))



================================================================================================================


================OBJECTS=================================
 










*/
