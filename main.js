// get all keys

const keys = document.querySelectorAll(".key")

// play notes

function getKeycode (event) {
    let type = event.type
    let keyCode;
    const isKeyBoard = type === "keydown"
    if (isKeyBoard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode
}
function playNote(event) {
    let audioKeyCode = getKeycode(event)
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    const cantFoundAnyKey = !key
    if(cantFoundAnyKey) {
        return
    }
    addPlayingClass(key)
    playAudio(audioKeyCode)
    

}
function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`).play()
    audio.play()
}

function addPlayingClass(key) {
    key.classList.add('playing')
}
function removePlayingClass(event) {
    event.target.classList.remove("playing")
}
// click with mouse

keys.forEach( key => {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})
// keyboard type


window.addEventListener("keydown", playNote)