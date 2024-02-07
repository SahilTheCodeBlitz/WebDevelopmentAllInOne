// children parent and sibling nodes
console.log("hello world")

console.log(document.body.childNodes) // will return the child nodes 

console.log(document.body.childNodes[0]) // first child element of body

console.log(document.body.childNodes[1]) // second child element of body

// here we got container as the second element of the body is container

console.log(document.body.childNodes[1].childNodes) // accesing the child eleements of container

let cont = document.body.childNodes[1] // container 

console.log(cont.firstChild) 

console.log(cont.lastChild)

// hume text nodes, comment nodes ko ignore karna hai bas direct box1 box2 ko access karte hai
// we only want element nodes
console.log(document.body.firstElementChild);

console.log(document.body.firstElementChild.childENodes);

// only getting elemets of container ignroing textnodes and comment nodes
// children give only html elements

console.log(document.body.firstElementChild.children);

console.log(document.body.firstElementChild.children[2]);

// accessing next element sibling of box3

console.log(document.body.firstElementChild.children[2].nextElementSibling);

// accessing previous element sibling of box3

console.log(document.body.firstElementChild.children[2].previousElementSibling);

// accessing the parent element of the child

console.log(cont.firstChild.parentElement);
