let drumsarray = document.querySelectorAll(".drum");

function playSound(keyword) {
    var audio;
    switch (keyword) {
        case 'w':
            audio = new Audio("/sounds/crash.mp3");
            break;
        case 'a':
            audio = new Audio("/sounds/kick-bass.mp3");
            break;
        case 's':
            audio = new Audio("/sounds/snare.mp3");
            break;
        case 'd':
            audio = new Audio("/sounds/tom-1.mp3");
            break;
        case 'j':
            audio = new Audio("/sounds/tom-2.mp3");
            break;
        case 'k':
            audio = new Audio("/sounds/tom-3.mp3");
            break;
        case 'l':
            audio = new Audio("/sounds/tom-4.mp3");
            break;
        default:
            return;
    }
    audio.play();
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