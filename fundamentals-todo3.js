// Make it big
// console.log(
//   "A function that changes all positive numbers in the array to 'big'"
// );
// const makeItBig = (arr) => {
//   let newarr = [];
//   for (const number of arr) {
//     if (number > 0) {
//       newarr.push("big");
//     } else {
//       newarr.push(number);
//     }
//   }
//   return newarr;
// };

// const answer = makeItBig([-1, 3, 5, -5]);
// console.log(answer);


// Print low, return higth
// console.log("A function that takes an array of numbers and prints the lowest values and returns the highest value")
// const lowHigh = (arr) => {
//   let sortedArr = arr.sort((a,b) => a-b)
//   console.log("Prints lowest value: ",arr[0])
//   return arr[arr.length-1]
// }
// const answer = lowHigh([7,3,4,5,-3]);
// console.log("Returns highest value:" ,answer)


// Print one, return another
// console.log("Print penultimate value and return first odd values of arr")
// const printAndReturn = (arr) => {
//   console.log("Print:",arr[arr.length-2]);
//   return arr.find(item => item%2 !== 0)
// }
// const answer = printAndReturn([6,2,7,3,4,5,-3]);
// console.log("Return:" ,answer)


// Double vision
// console.log("Create a function that returns the doubled numbers of the array");
// const double = (arr) => {
//   let doublearr = arr.map(item => item*2)
//   return doublearr
// }
// const answer = double([6,2,7,3,4,5,-3]);
// console.log("Return:",answer)


// Count positive
// console.log("Create a function that replaces the last number with de amount of positive values")
// const positive = (arr) => {
//   let value = arr.filter(item => item>0).length
//   arr[arr.length-1] = value
//   return arr
// }
// const answer = positive([- 1,1,1,1]);
// console.log("Return:",answer)


// Even and odd
// console.log("A function that receives an array, if there is 3 odd numbers in a row says 'Tha's weird' and 3 even numbers says 'Even more!")
// const evenOdd = (arr) => {
//   let evencounter = 0;
//   let oddcounter = 0;
//   for (const number of arr) {
//     if (number%2 === 0) {
//       oddcounter = 0
//       evencounter++
//     } else {
//       evencounter = 0
//       oddcounter++
//     }
//     if (oddcounter === 3){ console.log("That's weird!")}
//     if (evencounter === 3){ console.log("Even more!")}
//   }
// }
// evenOdd([1,2,3,7,9,8])
// evenOdd([1,2,3,4,5,6])
// evenOdd([1,3,4,6,8,9])


// Increment seconds
// console.log("Given an array, add 1 to odd elements. Console.log all values, return edited array")
// const incOdd = (arr) => {
//   let newarr= [];
//   for (let i=0; i< arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i]%2 !== 0) {
//       newarr.push(arr[i]+=1)
//     } else {
//       newarr.push(arr[i])
//     }
//   }
//   return arr;
// }

// let answer = incOdd([1,2,3,4,5,6]);
// console.log(answer);


// Former length
console.log("Given an array with strings, replace each string with the length of the index of the previous arr. Return the array")
const beforeLength = (arr) => {
  
}