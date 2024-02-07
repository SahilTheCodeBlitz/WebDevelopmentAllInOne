// for loop 
// printing number from 1 to 10

for (let i = 1; i<=10 ; i++ ){
    console.log(i)
}

let obj = {
    name : "Sahil Khane",
    rollNo : 90 ,
    div : "Be - A" , 
    Std : "Fourth Year"
}

// for in loop 
// used to trverse over the object
// for of loop is use to iterate over the array  ,map , string 

for (const  key in obj){
    console.log(key);
}

// for in loop

for (const key in obj){
    value = obj[key];
    console.log(key+"  =  "+value);
}

// while loop

let count = 1;

while (count<=10){
    console.log(count)
    count = count + 1;
}


// do while loop 

let i =5; 

do{
    console.log(i);
    i = i+1;
}
while(i>=10);


// for of loop
// used to iterate over array , string map etc

let str = "Sahil";

// for (let i in str){
//     console.log(i);
// }  not possible by this it is giving output  = 0,1,2,3,4

for (let i of str){
    console.log(i);
}

let arr = [12,34,56,78,44]

for(let i of arr){
    console.log(i)
}