function seclarEle(array){

    let largestElement = array[0];
    let secondLargestElement = array[1];

    if (secondLargestElement > largestElement) {
        let temp = secondLargestElement
        secondLargestElement = largestElement
        largestElement = temp
    }

    for (let i = 2; i < array.length; i++) {
        if (array[i] > largestElement) {
            secondLargestElement = largestElement;
            largestElement = array[i];
        } else if (array[i] > secondLargestElement && array[i] !== largestElement) {
            secondLargestElement = array[i];
        }
    }

    return secondLargestElement;
}


let array = [1, 2, 3, 4, 5, 6, 7];
let ans = seclarEle(array);
console.log(ans); 