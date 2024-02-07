let rows = 5
let num = 1
let str = ""  

for (let i = 0 ; i<rows ; i++ ){

    for(let j = 1 ; j<=rows-i; j++){

        str = str+num+" "
        num = num+1    
    }
    num = 1
   
    str = str+"\n"

}
console.log(str)