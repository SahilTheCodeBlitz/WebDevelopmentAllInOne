let array = [2,3,4,2,3,4,5,6,7] 

let frequencyArr= new Array(100); 

let newArr= [];

for(let i = 0 ; i<frequencyArr.length ; i++){

    frequencyArr[i]=0;

}

for(let i = 0 ;i<array.length ; i++){

    frequencyArr[array[i]]=frequencyArr[array[i]]+1;

}

for(let i = 0 ; i<frequencyArr.length ; i++){

    if(frequencyArr[i]>=1){

        newArr.push(i)

    }

}

console.log(newArr);