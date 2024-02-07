// create a faulty calcualtor using javascript

// This faulty calculator does following 

// 1. takes two number as input from user 
// 2. it performs wrong  operations as follows 


// plus hoga to minus 
// minus hoga to plus
// multiplication hoga to divison
// division hoga to multiplication

// out of 100 calculations made 10 percent will give wrong answer


function calculation(number1 , number2 , operation){

    switch(operation){

        case "plus":
            return number1-number2 
        
        case "minus" :
            return number1+number2
         
        case "multiplication":
            return number1/number2
            
        case "division":
            return number1*number2    

        default:
            return -1    

    }

}
function calculation10percentWrong(number1 , number2 , operation){

    switch(operation){

        case "plus":
            return number1-number2 *123
        
        case "minus" :
            return number1+number2*12
         
        case "multiplication":
            return number1/number2+452
            
        case "division":
            return number1*number2+22

    }

}

let number1 = 45
let number2 = 10
let operation = "plus"

let rand = Math.random()
let ans

if (rand>0.1){
ans = calculation(number1,number2,operation)
}
else{

    ans = calculation10percentWrong(number1,number2,operation)

}
console.log(rand)
console.log("ans = "+ans)