array = [23,45,11,34,22,344,22]

// simple for loop 

for (let i = 0 ; i<array.length;i++){
    console.log(array[i])
}

// foreach loop

console.log()

array.forEach(element => {
    console.log(element)
});

console.log()

array.forEach((value , index ) => {
    console.log(value , index)
});

console.log()

// for in  loop  is used with respect to object

let obj = {
    a : [23,45,67,36],
    b : [34,22,22,22],
    c : [55]
}

for(let i in obj) {
    // as object contains array so
    console.log(` key  =  ${i} `)
    console.log('values = ')
    for (let j of obj[i]){
        console.log(`${j}`)
    }
    

}