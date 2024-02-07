let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let newarray = array.filter((number) =>{

    if (number===1){
        return false;
    }

    for (let i=2;i<=number-1;i++){
        
        if(number%i==0){
            return false
        }
        
    }
    return true
})

console.log(newarray);