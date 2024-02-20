let str = "RAHUL";
// console.log(str.length);

// let letter = str[4];

// console.log(letter);

// slice() method

// let output = str.slice(1);
let output = str.slice(-1);
console.log(output);

let revStr = "";

for(let i = (str.length - 1) ; i >=0 ; i--)
{
    revStr = revStr + str[i];
}

console.log(revStr);



