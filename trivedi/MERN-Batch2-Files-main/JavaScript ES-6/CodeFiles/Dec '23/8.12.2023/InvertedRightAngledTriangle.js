let totalLines = 5;

let initialBlankSpaces = ((totalLines * 2) - 2);

// console.log(initialBlankSpaces);

let starPattern = "";

for (let line = 1; line <= totalLines; line++) 
{
    for (let spaces = initialBlankSpaces; spaces > 0; spaces--) 
    {
        starPattern = starPattern + " ";
    }

    for (let stars = 1; stars <= line; stars++) 
    {
        starPattern = starPattern + "* ";
    }

    starPattern = starPattern + "\n";
    initialBlankSpaces = initialBlankSpaces - 2;
}
console.log(starPattern);
