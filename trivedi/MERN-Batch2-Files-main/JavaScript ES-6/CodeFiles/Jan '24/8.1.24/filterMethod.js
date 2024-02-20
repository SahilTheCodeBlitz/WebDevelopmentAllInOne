let nums = [4, 12, 35, 67, 22, 8];

console.log('original array : ' + nums);

// let filteredNums = [];

let filteredNums = nums.filter((number) => number % 2 === 0);

// let filteredNums = nums
//   .filter((number) => number % 2 === 0)
//   .map((number) => number * 2);

console.log('filtered Nums : ' + filteredNums);

let mapArray = filteredNums.map((number) => number * 2);

console.log('After Running Map method : ' + mapArray);

// let number;

// for (index = 0; index < nums.length; index++) {
//   number = nums[index];
//   if (number % 2 === 0) {
//     filteredNums.push(number);
//   }
// }
