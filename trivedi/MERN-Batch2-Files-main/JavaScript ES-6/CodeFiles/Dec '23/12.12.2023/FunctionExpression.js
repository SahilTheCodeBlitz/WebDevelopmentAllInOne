let addFunction = function(num1, num2)
                {
                    return (num1 + num2);
                };

// function addFunction(num1, num2)
// {
//     return (num1 + num2);
// //  return 14;
// };

// let result = addFunction(12,2);
// console.log(result);

// let result = 14;


let func = addFunction; // GIVE ANOTHER NAME TO THE FUNCTION 'addFunction()' as 'func'

let result = func(12,3);

console.log(result);

