let playSongButton = document.querySelector(".current-play-song");
let audio = new Audio("audio/Despacito.mp3");
const progressBarContainer = document.getElementById("progressBarContainer");
const progressBar = document.getElementById("progressBar");

let isPlaying = false;

playSongButton.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playSongButton.innerHTML = "<i class='bx bx-pause' ></i>";
  } else if (isPlaying) {
    audio.pause();
    playSongButton.innerHTML = "<i class='bx bx-play' ></i>";
  }
  isPlaying = !isPlaying;
});

progressBarContainer.addEventListener("click", function (event) {
  const offsetX = event.offsetX; // Get the X coordinate of the click relative to the progress bar container
  const progressBarWidth = progressBarContainer.clientWidth; // Get the width of the progress bar container
  const seekTime = (offsetX / progressBarWidth) * audio.duration; // Calculate the seek time
  audio.currentTime = seekTime; // Set the current playback time of the audio

  if (!isPlaying) {
    audio.play(); // Start playing from the clicked position if not already playing
    isPlaying = true;
    playSongButton.innerHTML = "<i class='bx bx-pause' ></i>";
  }
});

audio.addEventListener("ended", function () {
  isPlaying = false; // Reset isPlaying state when audio ends
  playSongButton.innerHTML = "<i class='bx bx-play' ></i>";
  progressBar.style.width = 0 + "%"; // Update the progress bar width
});

audio.addEventListener("timeupdate", function () {
  const progress = (audio.currentTime / audio.duration) * 100; // Calculate progress percentage
  progressBar.style.width = progress + "%"; // Update the progress bar width
});
