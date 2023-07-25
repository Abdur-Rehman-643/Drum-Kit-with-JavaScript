let drumsarray = document.querySelectorAll(".drum");

function playSound(keyword) {
    var audio = new Audio("sounds/" + keyword + ".mp3");
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