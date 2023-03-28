// Push to front without using built-in array methods
const pushFront = (arr, value) => {
  const newArr = [value, ...arr];
  return newArr;
};
// Test:
console.log(pushFront([1, 2, 3], 5));

// Delete and return the value at the beginning of the array. Just use pop.
const popArr = (arr) => {
  // invert arr
  // const reverseARr = arr.map((item,idx) => arr[arr.length-1-idx])
  const reverseArr = [];
  let counter = 0;
  for (let i = arr.length; i >= 0; i--) {
    reverseArr[counter] = arr[i];
    counter++;
  }
  const item = reverseArr.pop();
  console.log(
    "Print arr without first item:",
    arr.filter((num, idx) => num !== item)
  );
  return item;
};
// Test:
console.log("Return the first item:", popArr([1, 2, 3, 4]));

// Given an array, index and value; insert the value into the array at given index.
const insertAt = (arr, idx, value) => {
  // copy arr to the desired index
  const newArr = [];
  for (let i = 0; i < idx; i++) {
    newArr[i] = arr[i];
  }
  // add value to the index
  newArr[idx] = value;
  // copy the rest of the arr (after index)
  for (let i = idx + 1; i <= arr.length; i++) {
    newArr[i] = arr[i - 1];
  }
  return newArr;
};
// Test:
console.log(insertAt([1, 2, 3, 4], 3, 14));

// Given an array and index. Delete and return the value of the array at that index. Just use pop()
const frontPop = (arr, index) => {
  const copyArr = [];
  for (let i = 0; i < index; i++) {
    copyArr[i] = arr[i];
  }
  for (let i = index + 1; i < arr.length; i++) {
    copyArr[i - 1] = arr[i];
  }
  console.log(copyArr);
  return arr[index];
};
// Test:
console.log(frontPop([1, 2, 3, 4, 5, 6], 0));

// Swap postition of successive pairs of values in a array. If the length is odd dont change the last element.
// Do not use any built-in method.
const swapPos = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 2) {
    const temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
};
// Test:
console.log(swapPos([1, 2, 3, 4, 5]));

// Given an array in order, eliminate duplicates.
const dupDelete = (arr) => {
  let newArr = [];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let next = arr[i + 1];
    if (word !== next) {
      newArr[idx] = word;
      idx++;
    }
  }
  return newArr;
};
// Test:
console.log(
  dupDelete([
    "maria",
    "maria",
    "maria",
    "ana",
    "cesar",
    "cesar",
    "tati",
    "tati",
  ])
);


