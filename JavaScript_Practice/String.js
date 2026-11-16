// let str_01 = "this is the demo string";
// console.log(str_01); // this is the demo string
// console.log(typeof str_01); // string

// let str_02 = "this is the demo string";
// console.log(str_02); // same as example 01
// console.log(typeof str_02);

// let str_03 = `this is the demo string`;
// console.log(str_03);
// console.log(typeof str_03); // backticks primitive string
// console.clear();

// let name = "Rohit";
// let message = `Hello ${name}`; // hello rohit
// console.log(message); // primitive String

// let str_05 = String("this is the demo string");
// console.log(str_05); // primitive String
// console.log(typeof str_05);

// let str_06 = String(`this is the demo string`);
// console.log(str_06); // backticks string -> Primitive String
// console.log(typeof str_06); // String type

// console.clear(); // all clear till above program and start from the below program

// let str_07 = String(22); // convert number into String
// console.log(str_07); // Initially 22 is a number
// console.log(typeof str_07);

// let str_08 = String(true);
// console.log(str_08); // True -> console.log(typeof true); => boolean
// console.log(typeof str_08); // String Type

// let str_9 = String(false);
// console.log(str_9); // False
// console.log(typeof str_9); // String

// let str_10 = String([1, 2, 3, 4]);
// console.log(str_10); // 1,2,3,4
// console.log(typeof str_10); // this an array but String ->when you pass String(). js convert into comma-separate

// let str_11 = String({ key: "value" });
// console.log(str_11); // [object object]
// console.log(typeof str_11); // String

// console.clear();

// let str_12 = 22;
// console.log(str_12); // 22
// console.log(typeof str_12); // Numner
// console.log(typeof str_12.toString()); // String the number into its String represent

// console.log(typeof str_12.toString());
// console.log(typeof [1, 2, 3].toString()); // convert into array to string
// console.log(typeof { key: "value" }.toString()); // String type
// console.clear();

// console.log(String(null)); // "null"
// console.log(null.toString()); // type Error

// let str_13 = str_12.toString(); //=> Number to String and storing it.
// console.log(str_13); // 22
// console.log(typeof str_13); // String

// console.clear();

// let str_14 = new String("demo string");
// console.log(str_14); // [String: 'demo string']
// console.log(typeof str_14); // object

// console.clear();

// // ! string Interpolation
// let userName = "deepak";
// let age = 28;
// let greet = `Hello ${userName}, age is : ${age}`;
// console.log(greet); // hello deepak , age is : 28

// let a = "hello";
// let b = new String("hello");
// console.log(a); // hello
// console.log(typeof a); // String

// console.log(b); //[String : 'hello']
// console.log(typeof b); // object type String

// let message1 = `
// welcome to java Script.

// learn Strings.
// learn Arrays.
// Learn Objects.
// `;
// console.log(message1); //without backticks you would need special newline characters or string concatenation

// < ------------------------------------------------String Hand Book Question--------------------------------------------- >

// let str = "Rohit";
// console.log(str.length);
// //============================

// function CapitalCase(str) {
// 	return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(CapitalCase("Rohit"));
// //===================================

// function checkString(Str) {
// 	return Str.includes("JavaScript");
// }
// console.log(checkString(" I learn JavaScript"));
//===================================================

let Str = "javaScript";
let count = 0;
for (let i = 0; i < Str.length; i++) {
	if (Str[i] === "a") {
		count++;
	}
}
console.log(count);
//===============================================================

function removeExtraSpace(Str) {
	return Str.trim();
}

console.log(removeExtraSpace("           I Love My India "));
//========================================================================
