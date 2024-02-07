// filter function

// creating a new array that will contain only those elements from the  array that will
// be greater than 7 

let array = [23,4,2,43,45,2,45,22,3,3,3]

let newarr= []

let funcGreaterthan22 = (e)=>{ // e is element of the array passed by filter method
if(e>22){
    return true
}
else{
    return false
}
}
newarr = array.filter(funcGreaterthan22)

console.log(newarr)