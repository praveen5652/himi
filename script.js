const elements = document.querySelectorAll(".typewriter");
let currentIndex = 0;

function typeWriterSequential() {
  if (currentIndex >= elements.length){
   document.querySelector(".cta-button").classList.add("show");
  return;
}
   const el = elements[currentIndex];
  const text = el.getAttribute("data-text");
  let charIndex = 0;
  el.textContent = "";

  const typing = setInterval(() => {
    if (charIndex < text.length) {
      el.textContent += text.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typing);
      setTimeout(() => {
        currentIndex++;
        typeWriterSequential();
      }, 1200);
    }
  }, 60);
}

window.addEventListener("load", typeWriterSequential);

// Modal
const modal = document.getElementById("modal");
document.getElementById("openCard").onclick = () => modal.classList.add("show");
modal.onclick = e => { if(e.target === modal) modal.classList.remove("show"); };




