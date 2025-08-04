const filePicker = document.getElementById("filePicker");
const audioPlayer = document.getElementById("audioPlayer");
const lyricsText = document.getElementById("lyricsText");

filePicker.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    audioPlayer.play();
  }
});

function toggleTheme() {
  document.body.classList.toggle("light");
}

function toggleLanguage() {
  const isEnglish = lyricsText.innerText.includes("Tum hi ho");
  lyricsText.innerText = isEnglish ? "تم ہی ہو...
جب تک ہے جان..." : "Tum hi ho...
Jab tak hai jaan...";
}

function startSleepTimer() {
  const minutes = prompt("Sleep after how many minutes?");
  const ms = parseInt(minutes) * 60000;
  if (!isNaN(ms)) {
    setTimeout(() => {
      audioPlayer.pause();
      alert("Sleep timer activated. Music paused.");
    }, ms);
  }
}
