let nums = [1, 2, 3, 12, 4, 5, 6, 7, 8, 23];

// nums.push(2);
// console.log(nums);

// let poppedElement = nums.pop();
// console.log('popped Element : ' + poppedElement);
// console.log(nums);

// nums.forEach((number) => console.log(number * 2));

// let sortedArray = nums.sort((a, b) => {
//   //   console.log('a : ' + a + ', b : ' + b);
//   return a - b;
// });
// console.log(sortedArray);

// let shiftResult = nums.shift();
// let unshiftResult = nums.unshift(101);
// // console.log(shiftResult);
// console.log(unshiftResult);
// console.log(nums);

// let data = [5, 6, 15, 7, 10, 8];
// console.log(data.splice(2));
// console.log(data.splice(2, 2));
// console.log(data.splice(2, 2, 11, 105, 205));

// console.log(data);

// let data = ['Jittu', 'Umesh', 'Darshan', 'Rahul', 'Darshan'];
// let foundIndex = data.indexOf('Rohan');
// console.log(foundIndex);

// let data = ['Jittu', 'Umesh', 'Darshan', 'Rahul', 'Darshan'];
// const slicedData = data.slice(1, 3);
// console.log(slicedData);
// console.log(data);

// let data = ['Jittu', 'Umesh', 'Rahul', 'Reshma'];
// const foundElement = data.findIndex((element) => {
//   return element === 'Darshan';
// });

// console.log(foundElement);

// if (foundElement > -1) {
//   // Whenever any variable has any sort of data inside it, that variable is considered as true.
//   console.log('Value Found');
// } else {
//   console.log('VALUE NOT FOUND');
// }

let data = ['Jittu', 'Umesh', 'Rahul', 'Reshma'];
const foundElement = data.find((element) => {
  return element === 'Darshan';
});

console.log(foundElement);

if (foundElement) {
  // Whenever any variable has any sort of data inside it, that variable is considered as true.
  console.log('Value Found');
} else {
  console.log('VALUE NOT FOUND');
}

// const num = 23;
// num = 25;

// console.log(num);

/* HOMEWORK FOR 5.2.24 : */

// Take an array of 10 names in which two of the names are repeating.
// ['Jittu', 'Umesh', 'Rahul', 'Reshma', 'Sanjana', 'Rahul', Abhishek]
// ['Jittu', 'Umesh', 'Rahul' , 'Reshma', 'Sanjana', Abhishek] --> NewArray
// Take another empty array And store all the unique elements inside that array
