
// In JavaScript, arrays are collections of values, and these values can be of any data type.Unlike some other programming
// languages that enforce a strict data type for all elements in an array, JavaScript allows you to mix different data types
// within the same array.

// type of the array is the objects

let arr  = [1, 'Hello', true, { key: 'value' }, [1, 2, 3]]

console.log(arr)

console.log(arr.length)

// arrays are mutable means we can change ,add , delete or update the values of the array

// accessing elements of array 

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

// printing length of array

console.log('length of the given array is = '+arr.length)

// lets change the elements of the array

console.log("before changing the elements of the array are = "+arr)

arr[0]=45
arr[4]="Sahil"

console.log("after changing the elements of the array are = "+arr)

