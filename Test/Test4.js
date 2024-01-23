const a = [1, [2, 3], [[4, [5]]]];

function flat(arr) {
  let testArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      flat(arr[i]);
    } else {
      testArray.push(arr[i]);
    }
  }
  return testArray;
}

const result = flat(a);
console.log(result);

console.log(a.flat(Infinity));
