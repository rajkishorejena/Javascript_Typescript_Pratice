// const str = "a1b23c45d105$9";

// function sumOfNumber(input) {
//   const inputString = input.split("");
//   var tempNumber = "";
//   var tempArray = [];

//   for (let i = 0; i <= inputString.length; i++) {
//     if (typeof Number(i) === Number) {
//       tempNumber = i;
//       for (j = i + 1; j <= inputString; j++) {
//         if (typeof j === Number) {
//           tempNumber = j + ``;
//         } else {
//           return;
//         }
//       }
//       tempArray.push(Number(tempNumber));
//     }
//   }

//   console.log("tempArray", tempArray);
// }

// sumOfNumber("a1b23c45d105$9");

const testArray = [1, 3, 2, 8, 7];

// console.log(testArray.sort());

function shortArray(testArray) {
  console.log(testArray);
  var newTestArray = [];
  var firstlargets;
  var secondLargestNumber;

  for (let i = 0; i <= testArray.length; i++) {
    if (testArray[i] > testArray[i + 1]) {
      newTestArray.push(i);
    }
  }

  console.log("newTestArray", newTestArray);
}

// shortArray(testArray);
