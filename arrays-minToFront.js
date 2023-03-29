// Move the lowest number at the beginning of the array

const minStart = (arr) => {
  // find lowest value index
  let minIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
      minIndex = i;
    }
  }
  // assign new array first item to lowest value
  const newArr = [arr[minIndex]];
  let index = 1;
  // copy the rest of the array except min value
  for (let i = 0; i < arr.length; i++) {
    if (i !== minIndex) {
      newArr[index] = arr[i];
      index++;
    }
  }

  return newArr;
};

// Test:
console.log(minStart([2, 3, 1, -2, 5, 6, 4]));
