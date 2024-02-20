let elements = document.querySelector('.set')
console.log(elements);

buttonslength = document.querySelectorAll('.drum').length

console.log(buttonslength);

console.log(document.getElementsByClassName("drum"));

for (let i = 0; i < buttonslength; i++) {
    document.getElementsByClassName("drum")[i].addEventListener('click',()=>{
        console.log(document.getElementsByClassName("drum")[i].innerHTML);
        
        makeSound(document.getElementsByClassName('drum')[i].innerHTML)
    })

    document.getElementsByClassName("drum")[i].addEventListener('mouseenter',()=>{
        document.getElementsByClassName('drum')[i].classList.add('hoveradd') 
    })
    document.getElementsByClassName("drum")[i].addEventListener('mouseleave',()=>{
        document.getElementsByClassName("drum")[i].classList.remove('hoveradd')
    })
}

// make sound function will play the song
function makeSound(identifier){

    switch(identifier){
        case 'w':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();

        case 'a':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();  
        case 's':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();  
        case 'd':
            var audio = new Audio('./sounds/tom1.mp3');
            audio.play();
    
        case 'j':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();  
        case 'k':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();                      
        case 'l':
            var audio = new Audio('./sounds/tom-4.mp3')       
            audio.play()
           
        default:
            console.log('problem arising'); 
            break   

 
    }

}

// document.getElementsByClassName("drum")[2].addEventListener('click',()=>{
//     console.log('hello');
// })
