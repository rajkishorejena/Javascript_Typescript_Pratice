// const findThirdLargest = (data) => {
//   const response = data.sort();
//   return response[2];
// };

// const result = findThirdLargest([2, 8, 5, 0, 9, 7]);
// console.log("Third Largest", result);

// findout the first non repeating letter from the given
const value = "Easiest";

const nonRepeating = (data) => {
  for (i = 0; i < data.length; i++) {
    // for (j = 1; j < data.length; j++) {
    //   //   data[i] === !data[j];
    //   //   return data[i];
    //   if (data[i] === data[j]) {
    //   }
    // }
    console.log(data[i]);
    if (value.includes(data[i])) {
      continue;
    } else {
    }
  }
};

const result = nonRepeating(value);
console.log("result char:", result);

// for (let i = 0; i < string.length; i++) {
//     let before = string.slice(0, i);
//     let after = string.slice(i + 1);
//     if (!before.includes(string[i]) && !after.includes(string[i])) {
//       return string[i];
//     }
//   }
//   return -1;
// Karthika Sasidharan Nair
