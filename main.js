const audio = document.getElementById("bg-music");
const button = document.getElementById("mute-btn");
const playButton = document.getElementById("play-btn")

playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        button.textContent = "mute";
        playButton.style.display = "none";
    }
})

button.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        button.textContent = "mute";
    } else {
        audio.pause();
        button.textContent = "unmute";
    }
});