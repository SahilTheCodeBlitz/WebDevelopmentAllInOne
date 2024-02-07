let str = "Sahil";

let sum = 0;

for(let i in str){

    sum+=i.charCodeAt()

}

console.log(`sum of the unicode value of the string ${str} is =  ${sum}`);