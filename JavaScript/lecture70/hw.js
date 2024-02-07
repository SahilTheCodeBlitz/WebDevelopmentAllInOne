function randomColor(){
    let buff =  '0123456789ABCDEF';
    let colorcode =  '#'
    

    for (let i  = 0 ; i <6 ; i++){
        let randomEle = Math.floor(Math.random()*15)
        let sel = buff[randomEle]
        colorcode+=sel


    }
    return colorcode
}

// selecting box by using dom

let boxes = document.getElementsByClassName("box")

for (let box of boxes){
    box.style.backgroundColor = randomColor()
}


