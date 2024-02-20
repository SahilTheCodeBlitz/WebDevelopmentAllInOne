let nums = [2, 3, 4, 6, 7, 8, 99, 23, 34, 56];

// let newArray = nums.filter((n, index, abc) => {
//   console.log(n + ' : ' + index);
//   //   console.log(abc);
//   return n % 2 !== 0;
// });

// console.log(newArray);

// let menu = {
//   meduVada: 40,
//   mysoreMasalaDosa: 70,
//   idli: 30,
// };

let newArray = nums.map((n, index, abc) => {
  console.log(n + ' : ' + index);
  //   console.log(abc);
  return n / 2;
});

console.log(newArray);
