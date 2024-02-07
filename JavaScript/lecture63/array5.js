// map function

// creates a new array by performing some operations on the existing array

let newarr = []
const a  = [1,2,3,4,5]

newarr = a.map((e)=>{
return e**2;
})

console.log(newarr)

// filter function

// suppose you want to construct a new array that will contain only those elements from the array
// a = [1,2,3,4,5] that is gretaer than 2 so for this we use filter function

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//console.log('e = ' + e) 

let functionGreatThan7 = (e) => {
  
    if (e > 2) {
      return true;
    }
 
  return false;
};

let newArr = a.filter(functionGreatThan7);
console.log(newArr);


// shift method

// not understand concept

// arrow function
// map function
// filter function
// shift funvtion