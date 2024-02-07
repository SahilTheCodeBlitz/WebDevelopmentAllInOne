
function largestElement(array){
    let largestele = array[0]  

    for(let i=1;i<array.length;i++){
        if(array[i]>=largestele){
            largestele=array[i]
        }
    }

    return largestele
}

let array = [23,45,22,56,22,55,33,244,53,54,33,24,23456]

let ans = largestElement(array)

console.log(ans)

