let drumsarray = document.querySelectorAll(".drum");

function playSound(keyword){
    switch (keyword) {
        case 'w':
            var audio = new Audio("../sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("../sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("../sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("../sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("../sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("../sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("../sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            return;
    }
}

function addTransitions(keyword){
    document.querySelector('.'+keyword).classList.add('pressed');
    setTimeout(()=>{
        document.querySelector('.'+keyword).classList.remove('pressed');
    },100)
}


for (let index = 0; index < drumsarray.length; index++) {
    drumsarray[index].addEventListener('click',()=>{
        playSound(drumsarray[index].innerHTML);
        addTransitions(drumsarray[index].innerHTML)
    })
}


document.addEventListener('keypress',(event)=>{
    playSound(event.key);
    addTransitions(event.key)
})