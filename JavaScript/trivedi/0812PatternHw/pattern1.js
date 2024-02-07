let rows = 5
let str  = ""

for (let i=1 ; i<=rows ; i++){

    for(let j=1 ; j<=i ; j++){
        str = str+"*"+" "
    }
    str = str + "\n"
} 

console.log(str)