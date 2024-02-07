// functions
// normal function which returns nothing

function nice(name){
    console.log("Hello "+name)
    console.log(name+" Would you like to play ... ")
    console.log(name+" Tell me your hobbie ... ")
}

nice("Sahil")
nice("Rahul")
nice("Awez")

// function taking two formal parameters and returning sum

function sum(a,b){
    return a+b;
}

let result = sum(2,2);

console.log(result)

// function taking two formal parameter and one optional parameter
// if in function call if you did not specify the optiaonal paraamter value then the optiional paramamter set will be taken 
// if in function call you specify optional paramter value then specified value will have higher priority

function sumSum(a,b,c=10){
    return a+b+c;
}

ans  = sumSum(2,2)

console.log(ans)

// arrow function


let func = (x)=>{

    console.log("My name is "+x)

}
// here func is variable as well as function name  and the x is parameter
// this will help ot pass a function as  the parameter for  function

func(34)