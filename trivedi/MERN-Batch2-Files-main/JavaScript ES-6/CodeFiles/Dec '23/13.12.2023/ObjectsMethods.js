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

let keys = Object.keys(cars);
console.log(keys);

let vals = Object.values(cars);
console.log(vals);

let entries = Object.entries(cars);
// console.log(entries);

// HOW TO ADD A PROPERTY IN TO AN OBJECT

cars.color = "White";

keys = Object.keys(cars);
console.log(keys);