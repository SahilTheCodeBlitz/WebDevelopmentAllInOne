console.log(document.querySelector(".container").innerText); // container ke andar ka text return karta hai in form of strinf

console.log(document.querySelector(".container").outerHTML);// gives entire html from start of tag whose class is container
// till end of that tag 

// output

//<div class="container">
/* <div class="box">Hello Sir , Myself First Box </div>
<div class="box">Hello Sir , Myself second Box</div>
</div> */  

console.log(document.querySelector(".container").innerHTML)

// only returns tag inside container along with text

 
console.log(document.querySelector(".container").tagName) // return tag name in this case it will be div

console.log(document.querySelector(".container").nodeName);

console.log(document.querySelector(".container").textContent); // shows text content no tags

console.log(document.querySelector(".container").hidden) // false as tag is not hidden

// document.querySelector(".container").hidden = true   // we have set tag to hidden so ye html me div tag me hidden attribute 
// //add karega so ab apna div element hide ho jayega  


// change content of html

document.querySelector(".box").innerHTML = "changing content of the html through javascript"

// queryselector first element aselect karega jiski class .box ho and action performed on it
// return list hogi par select first lement hi hoga 



