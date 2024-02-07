var a = 5;
var b = 6;
var c = "sahil";

console.log('a =' + a)
console.log('b =' + b)
console.log('c =' + c)

console.log(typeof (a))
console.log(typeof (c))

// var vs let keyword for variable declaration
// var  = global scope
// let = local scope  = if let is declared in block then it will be available only till that block
// var = global scope = if var is declared in any block it will be avaialable thoughput code 
// const = local scope =  if const is declared in block then it will be available only till that block 
// once variable is declared using const keyword it cannot be re assigned
// const must be initialized  while declaration unlike var and let
var m = 90

n = 0

console.log(" m = " + m)

if (n == 0) {
    m = 10
    // let  p =56 cannot be accessed putside this brackets
}
else {
    m = 11

}
console.log(" m = " + m) // getiting o/p m=11 means m value set in if block is also avaialable outside the block


// console.log(p) gives error

n = 0

let p = 26

console.log(" p = " + p)

if (n == 0) {
    p = 20
}
else {
    p = 11
}
console.log(" p= " + p) // getiting o/p m=35 means p value set in if block is not  avaialable outside the block

