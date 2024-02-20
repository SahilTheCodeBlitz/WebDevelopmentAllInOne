let num = 7;
let primeFlag = false;

if(num == 1)
{
    console.log("The number is NEITHER PRIME nor COMPOSITE");
}
else if (num == 2)
{
    console.log(num + " is a PRIME NUMBER");
}
else if (num > 2)
{
    for (let checker = 2; checker < num; checker++) 
    {
        if(num % checker == 0)
        {
            primeFlag = false;
            break;
        }
        else
        {
            primeFlag = true;
        }
    }

    if (primeFlag == true) 
    {
        console.log(num + " is a PRIME NUMBER");
    }
    else
    {
        console.log(num + " is NOT a PRIME NUMBER");
    }
}
