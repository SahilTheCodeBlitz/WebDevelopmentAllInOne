// accessing element by class name

let boxes = document.getElementsByClassName("box")

console.log(boxes)

boxes[2].style.backgroundColor = "red"

// accessing element by id

document.getElementById("Sahil").style.backgroundColor = "blue"

// query selector

document.querySelector(".box").style.backgroundColor = "yellow"

document.querySelector("#Sahil").style.backgroundColor = "yellow"

// only one element that is first element will be selected

// if you want to select all elements  we have to use for loop because  queryslelectorall is retur
// rinign list of element i.e array of elements

console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor="aqua"
})


// accessing by tag name

console.log(document.getElementsByTagName("div"));


