// java delete operation removes element fro array but memeory is still allocated so as a result we see undefined on the
// deleted element's place

let d = [2,3,4,5,6]

console.log(d)

delete d[2] // where 2 is index

console.log(d)

let arr = [1,2,3,4,5]

let arr1 = [1,2,3]

let arr2 = [1,2]

console.log(arr.concat(arr1,arr2)) // this method causes does not change existing array

console.log('arr'+arr)


console.log()

// sort function

let a = [32,12,45]

console.log("before sorting array elements are = "+a)

a.sort()

console.log("after sorting array elements are = "+a)

// slice method is used to  get elements from the array

let arr12 = [1,2,3,4,5]

console.log('slicing'+arr12.slice(2,5))

// splice method == add elements to array , first delete element from array and then in that place add specified element 

console.log(arr12)

console.log(arr12.splice(1,3,34,34,34))// from index 1 to index 3 delete elements and add 34 34 34 in index 1 // returns
// deleted elements


console.log(arr12)


