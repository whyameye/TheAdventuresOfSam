let currentIndex = 1;
let audioPlayer = document.getElementById("audio");

function updateContent() {
    fetch(currentIndex + ".html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            playAudio();
        });
}

function playAudio() {
    audioPlayer.pause();
    audioPlayer.src = currentIndex + ".mp3";
    audioPlayer.play();
}

function prevContent() {
    if (currentIndex > 1) currentIndex--;
    updateContent();
}

function nextContent() {
    if (currentIndex < 13) currentIndex++;
    updateContent();
}

updateContent();