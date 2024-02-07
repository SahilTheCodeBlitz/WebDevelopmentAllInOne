let arr = [2,3,1,45,66,66,66,23,29,31,37,41,43,47]

let prime =  []

function isPrime(num){
    let primeFlag = false

    if (num==1){
        return false
    }
    else if(num==2){
        return true
    }
    else if(num>2){

        for (let checker = 2 ; checker<num ; checker++){
            if (num%checker==0){
                primeFlag = false
                break
            }
            else{
                primeFlag = true
            }
        }

    }
    if (primeFlag){
        return true
    }
}

for(let i = 0 ; i < arr.length ; i++){
    ans = isPrime(arr[i])

    if (ans){

        prime.push(arr[i])

    }
  
    
}
console.log(prime);