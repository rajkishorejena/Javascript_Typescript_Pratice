//Find the Sum of the Array..
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// console.log(sum);

//  flatten the array
const a = [1, [2, 3], [[4, [5]]]];
// console.log(a.flat(Infinity));

const flatten = (arr) => {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
};

// console.log(flatten(a));

// findThirdLargest

const listNum = [7, 5, 3, 2, 0, 1];
// const findThirdLargest = (listNum) => {
//   const sortArr = listNum.sort();
//   return sortArr[2];
// };

const findThirdLargest = (listNum) => {
  const filterArr = [...new Set(listNum)];
  const sortArr = filterArr.sort();
  console.log(sortArr);

  if (sortArr.length == 2) {
    return sortArr[1];
  }
  if (sortArr.length == 1) {
    return sortArr[0];
  }
  if (sortArr.length >= 3) {
    return sortArr[2];
  }
};

// console.log(findThirdLargest(listNum));

// Buzz fizz javascript

const fizzBuzz = (inputNumber) => {
  let fzArr = [];
  for (let i = 1; i <= inputNumber; i++) {
    if (i % 15 === 0) {
      fzArr.push("FIZZBUZZ");
    } else if (i % 5 === 0) {
      fzArr.push("BUZZ");
    } else if (i % 3 === 0) {
      fzArr.push("FIZZ");
    } else {
      fzArr.push(i);
    }
  }

  return fzArr;
};

// console.log(fizzBuzz(21));

// get all the 0 and put in the end const arr1 = [2,4,0,5,0,7,3,] using js
const arr1 = [2, 4, 0, 5, 0, 7, 3];
const nonZero = arr1.filter((value) => value != 0);
const zeroE = arr1.filter((value) => value === 0);

const arr2 = nonZero.concat(zeroE);
// console.log(arr2);

//Deep Copy
// let originalObject = {
//   name: "Alice",
//   age: 30,
//   hobbies: ["reading", "coding"]
// };
// console.log("1--",originalObject);
// const deepCopy = originalObject;
// deepCopy.name="Ramu"

// console.log("2--",originalObject);
// console.log("3--",deepCopy);

//shallow Copy
// let originalObject = {
//   name: "Alice",
//   age: 30,
//   hobbies: ["reading", "coding"]
// };
// console.log("1--",originalObject);
// const shallowCopy = {...originalObject};
// shallowCopy.name="Ramu"

// console.log("2--",originalObject);
// console.log("3--",shallowCopy);

// find out the first non repeating letter from the given string using js

const firstNotRepeatingCharacter = (str) => {
  const s = str.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
      return s.charAt(i);
    }
  }
  return "_";
};

// console.log(firstNotRepeatingCharacter("Easiest"));

// swap number without using third variable
// var c = 10;
// var b = 20;

// [b, c] = [c, b];
// console.log("c", c, "B", b);

let c = 10;
let b = 20;

let d = c + b;
c = d - c;
b = d - b;

// console.log("c", c, "b", b);
