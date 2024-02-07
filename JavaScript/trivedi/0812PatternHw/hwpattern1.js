let rows = 5
let num = rows
let str = ""  

for (let i = 0 ; i<rows ; i++ ){

    for(let j = 1 ; j<=rows-i; j++){

        str = str+num+" "
        num = num-1

    
    }
    num = rows
   
    str = str+"\n"

}
console.log(str)