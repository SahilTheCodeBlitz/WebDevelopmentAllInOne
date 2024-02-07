// reverse the words of sentence
 
let str = "My name is Sahil Khane"

let string =  str.split(" ")


let result = ""


for(let i = string.length-1;i>=0;i-- ){
    result += string[i]+" "
}

console.log(result);