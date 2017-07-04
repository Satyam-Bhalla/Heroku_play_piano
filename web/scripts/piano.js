// JavaScript source code
window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-keyboard="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-keyboard="${e.keyCode}"]`);
    if (!audio) return;
    console.log(key);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(function () {
        key.classList.remove('playing');
    }, 1);
    
});
function play(id) {
    var audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
}
function showInstruction() {
    alert('Click on any piano key or type any key in the middle line of your keyboard');
}