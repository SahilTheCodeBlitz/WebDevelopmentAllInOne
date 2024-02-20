/* 
TARGET :               

*
* * 
* * * 
* * * * 
* * * * *

*/ 

// let horizontalPattern = "";

// for(let i = 1; i < 6 ; i++)
// {
//     horizontalPattern = horizontalPattern + "* ";
// }

// console.log(horizontalPattern);

let starPattern = "";

for (let line = 1; line <= 5; line++) 
{
    for (let stars = 1; stars <= line; stars++) 
    {
        starPattern  = starPattern + stars + " "; // Concatenated String gets created
    }
    starPattern = starPattern + "\n";
}

console.log(starPattern);

