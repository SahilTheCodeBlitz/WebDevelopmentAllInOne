// strings are used to store and manipulate the text

let str = "Sahil";

//Accessing characters of the string

console.log(str[0])
console.log(str[1])
console.log(str[2])
console.log(str[3])
console.log(str[4])

// finding length of the string

console.log('length of given string is =  '+str.length)

// Template literals
// it is similar to f string in the python

let names = "Sahil"
let age =19
console.log(`His name is ${names} and he is ${age} years old`)

// Escape Sequence Characters

// say i want double quotes to printed on screen
// method one  = use backticks i.e templte literals
// method two = use escape sequencw characters = use /

console.log(`using method 1 " got it `)
console.log(" using method 2 \" got it")
console.log('using method 3 " got it')

//  functions of strings 

let strr = "Sammy"
console.log(strr.toUpperCase())
console.log(strr.toLowerCase())
console.log(strr.length)// length is the property

// trying the slicing function
console.log(strr.slice(1,4))
console.log(strr.slice(3,))

// replace function

console.log(strr.replace("Sa",453))

// concat function

let str1 = "Hello"
let str2 = "Shil"

console.log(str1.concat(" ",str2))



// strings are immutable i.e cannot be changged once set
console.log(strr)


