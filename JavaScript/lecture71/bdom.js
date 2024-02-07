console.log(document.querySelector(".box").hasAttribute("style")); // used to check whether particular attribute is 
// applied on that tag or not

console.log(document.querySelector(".box").getAttribute("style")); // attribute konsa laga hai vo btata hai

// setting style i.e attribute through setAttribute

console.log(document.querySelector(".box").setAttribute("style","color:yellow"));

console.log(document.querySelector(".box").attributes);

// document.querySelector(".box").removeAttribute("style") style attribute will be removed

console.log(document.querySelector(".box").dataset)