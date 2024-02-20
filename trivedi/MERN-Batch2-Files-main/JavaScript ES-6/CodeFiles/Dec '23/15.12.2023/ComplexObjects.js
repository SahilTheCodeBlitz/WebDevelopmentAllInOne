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

    restaurantName : "Udupi Upahar"
}

console.log(menu.cuisine.south.productList);