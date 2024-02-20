alert('Welcome to my page');
let userName = prompt('What is your name?');
console.log(userName);

document.querySelector('h1').innerHTML = 'Hello' + ' ' + userName;
