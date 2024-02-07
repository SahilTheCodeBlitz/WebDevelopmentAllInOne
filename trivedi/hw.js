function perfectSquare(number){
    let value = number**0.5;
    let floorval = Math.floor(value)

    if(value === floorval){
        return number+" is the perfect square "
    }
    else{
        return number+" is not the perfect square "
    }
}

let ans = perfectSquare(24)
console.log(ans)

ans = perfectSquare(25)
console.log(ans)

ans = perfectSquare(12)
console.log(ans)

ans = perfectSquare(16)
console.log(ans)

