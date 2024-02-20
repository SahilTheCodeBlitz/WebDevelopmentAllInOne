let nums = [4, 12, 35, 67, 22, 8];

let filteredNums = [];
let number;

for (index = 0; index < nums.length; index++) {
  number = nums[index];
  if (number % 2 === 0) {
    filteredNums.push(number);
  }
}

console.log('filtered Nums array BEFORE : ' + filteredNums);

let numbers = [];
let doubledNum;

for (index = 0; index < filteredNums.length; index++) {
  doubledNum = filteredNums[index] * 2;
  numbers.push(doubledNum);
}

filteredNums = numbers;

console.log('filtered Nums array AFTER : ' + filteredNums);
