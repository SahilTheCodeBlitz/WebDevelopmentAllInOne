let nums = [5, 6, 7, 8, 34, 23];

let number = nums.reduce((prev, next) => {
  console.log('prev : ' + prev + ', next : ' + next);
  return prev + next;
});

console.log(number);
