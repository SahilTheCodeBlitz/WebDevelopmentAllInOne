let cars = 
{
    model : "Mercedes E330",
    modelYear : 2020,
    maxSpeed : 240,
    fuelType : "Petrol",
    drive : function () {
        console.log("I can drive with a max speed of : " + this.maxSpeed + " kmph.")
    }
}

// WHENEVER A FUNCTION IS INSIDE AN 'OBJECT' , IT IS KNOWN AS A 'METHOD' .

cars.drive();

// HOW TO INSERT A METHOD INSIDE AN OBJECT AFTER IT HAS BEEN CREATED? 

cars.autoAC = function () 
{
    console.log("I can cool at max 16 degrees and heat at 35 degrees");
}

cars.autoAC();


// let cars = 
// {
//     model : "Mercedes E330",
//     modelYear : 2020,
//     maxSpeed : 240,
//     fuelType : "Petrol",
//     drive : function () {
//         console.log("I can drive with a max speed of : " + this.maxSpeed + " kmph.")
//     }
//     autoAC : function () 
//     {
//         console.log("I can cool at max 16 degrees and heat at 35 degrees");
//     }
// } 