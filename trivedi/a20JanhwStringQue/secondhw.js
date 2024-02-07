let str1 = "My name is Sahil Khane"
let str2 = "I am  Student from phcet"

let str1s = str1.split(' ')
let str2s = str2.split(' ')

let i = 0
let j = str2s.length-1

let result = ""


while(i<=str1s.length-1 || j>=0){

    

    if(j>=0){

        result+=str2s[j]+" "

        j = j-1
        

    }
    if(i<str1s.length){

        result+=str1s[i]+" "

        i = i+1
    }



    
    

}
console.log(result);