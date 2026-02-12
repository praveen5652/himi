const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const music = document.getElementById("bgMusic");

let state = 0; 
// 0 = closed
// 1 = envelope open
// 2 = letter out
// 3 = full open

envelope.addEventListener("click", () => {

  // 🎵 FIRST CLICK → start music smoothly
  if (state === 0 && music.paused) {
    music.volume = 0;
    music.play();

    let fade = setInterval(function() {
      if (music.volume < 1) {
        music.volume += 0.05;
      } else {
        clearInterval(fade);
      }
    }, 200);
  }

  // STEP 1 → open envelope
  if (state === 0) {
    envelope.classList.add("open");
    state = 1;
    return;
  }

  // STEP 2 → letter out
  if (state === 1) {
    const letterHeight = letter.offsetHeight;
    const visiblePart = Math.min(letterHeight * 0.85, 140);

    letter.style.transform =
      `translate(-50%, -${visiblePart}px)`;

    state = 2;
    return;
  }

  if (state === 2) {
    const letterHeight = letter.offsetHeight;
    const visiblePart = Math.min(letterHeight * 1.85, 210);

    letter.style.transform =
      `translate(-50%, -${visiblePart}px)`;

    state = 3;
    return;
  }

  // STEP 3 → reverse (close everything)
  if (state === 3) {
    letter.style.transform = "translate(-50%, 0)";
    envelope.classList.remove("open");
    state = 0;
  }

});
