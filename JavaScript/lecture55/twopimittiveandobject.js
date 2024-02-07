// primitive datatype and object

// primitive data type are set of basic datatype in javascript
// object is not a primitive dATAtype it is userdefined datatype

// seven primitive datatype are null ,number ,string ,symbol,undefined, boolean,bigint

let x ="Sahil Khane";
let y = 23;
let z = null;
let p = true;
let q = 34.33;
let r = undefined;

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y ,typeof z,typeof p ,typeof q , typeof r)

// object 

//object in java script is combination of key value pair


// agr key me space hai toh double quote use karna compulsoary agar key single word ho to you may or may not use double qupte

let  o  = {
    name : "Sahil",
    "job role" : "Software Engineer",
}
console.log(o)

o.salary = 1000 // it checks whtehr salary key exists if not makes it

console.log(o)

o.salary = 90  // if exist as here the value of the key salary will be changed

console.log(o)

