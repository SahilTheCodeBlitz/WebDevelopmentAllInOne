let menu = 
{
    cuisine : 
    {
        south : 
        {
        type : "south indian",
        products : 3,
        productList : ["idli", "upma" , "medu vada"]
        } ,

        north :
        {
        type : "north indian",
        products : 3,
        productList : ["naan", "butter chicken" , "veg biryani"]
        }
    } ,

    inceptionYear : 2007,
    restaurantName : "Udupi Upahar"
}

// console.log(menu.inceptionYear);
// console.log(menu['inceptionYear']);

// let fName = "Raahul";
// let lName = "Trivedi";

// console.log(`My name is ${fName} ${lName}.`)

for(let properties in menu)
{
    console.log(properties + " : " + menu[`${properties}`]);
    // console.log(properties + " : " + menu['inceptionYear']);

}