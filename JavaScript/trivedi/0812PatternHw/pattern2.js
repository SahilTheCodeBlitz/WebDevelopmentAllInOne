let rows= 7
let str = ""
let totalspaces = rows -1 

for (let i  = 1 ; i<=7 ; i++){

    for(let j = 1  ; j<=totalspaces ; j++){
        str = str+" "
    }
    for(let k = 1; k<=i ;k++){
        str=str+"*"
    }
    totalspaces = totalspaces-1
    str = str+"\n"
}
console.log(str)
