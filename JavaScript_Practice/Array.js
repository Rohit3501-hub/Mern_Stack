let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(typeof arr); // objects

// let isarr = Array.isArray(arr); // this is array or not => true or false.
// console.log(isarr);

//=====================
// Create an Array & perform crud operation by method .

let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);

// for (let i = 0; i <= arr.length; i++) {
// 	const Element = arr[i];
// 	console.log(Element);
// }

// arr1.unshift("first");
// console.log(arr1);

// arr1.push("last");
// console.log(arr1);

// arr1.push("9");
// arr1.unshift("10");
// console.log(arr.arr1);
console.clear();
//============splice method================

arr1.splice(0, 0, "first");
// console.log(arr1);

// arr1.splice(arr.length - 1, 0, "last");
// console.log(arr1);

// arr.splice(arr.length - 5, 0, "first");
// console.log(arr);

// arr.splice(2, 0, "middle");
// console.log(arr);

// arr.splice(arr.length - 1, 0, "last");
//console.log(arr);

//==============================================================================i have interview in camgimini and they do call
let markArr = [13, 22, 25, 28, 33, 40, 50, 70];
let addGraceMarksArr = markArr.filter((mark) => {
	if (mark > 25 && markArr < 35) {
		let graceMarks = 35 - mark;
		mark += graceMarks;
		return mark;
	}
});

console.log(markArr);

// let markArr = [13, 22, 25, 28, 33, 40, 50, 70];

// let addGraceMarksArr = markArr.filter((mark) => {
// 	if (mark > 25 && mark < 35) {
// 		let graceMarks = 35 - mark;
// 		mark += graceMarks;
// 		return mark;
// 	}
// });

// console.log(addGraceMarksArr);
