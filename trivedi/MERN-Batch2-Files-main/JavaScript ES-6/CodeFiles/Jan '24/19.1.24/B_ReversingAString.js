let str = 'NODE';
let revStr = '';

for (let index = str.length - 1; index >= 0; index--) {
  revStr += str.charAt(index);
}

console.log(revStr);
