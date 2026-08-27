const cat = document.getElementById("chocolate-cat");
const chatbox = document.getElementById("chat-box");

cat.addEventListener("click", () => {
  cat.classList.remove("clicked");

  void cat.offsetWidth;

  cat.classList.add("clicked");

  chatbox.classList.toggle("show");
});
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => {
    window.location.href = "homepage.html";
});



const starField = document.getElementById("star-field");
const STAR_COUNT = 50;
const colors = [
  "#FFFDF5", // cream
  "#FFE8F0", // pastel pink
  "#E8F6FF"  // pastel blue
];
function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  const size = 8 + Math.random() * 18;
  const color = colors[Math.floor(Math.random() * colors.length)];
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.background = color;
  star.style.boxShadow = `
    0 0 ${size * 0.9}px ${color},
    0 0 ${size * 1.8}px rgba(255,255,255,.35)
  `;
  starField.appendChild(star);
  animateStar(star);
}
function animateStar(star){
  const duration = 9000 + Math.random() * 9000;
  const startX = Math.random() * 120 - 10;
  const drift = 8 + Math.random() * 18;
  const orbit = 6 + Math.random() * 18;
  const phase = Math.random() * Math.PI * 2;
  const rotateRange = 12 + Math.random() * 35;
  const scaleMin = .75 + Math.random() * .25;
  const scaleMax = scaleMin + .25;
  const startTime = performance.now();
  const startProgress = Math.random();
  function frame(now){
    const raw = (now - startTime) / duration + startProgress;
    const t = raw % 1;
    const x = startX + drift * t;
    const y = -20 + 130 * t;
    const orbitX = Math.sin(t * 8 + phase) * orbit;
    const orbitY = Math.cos(t * 8 + phase) * orbit * .35;
    const rotate = Math.sin(t * 5 + phase) * rotateRange;
    const scale =
      scaleMin +
      (scaleMax - scaleMin) *
      (.5 + .5 * Math.sin(t * 7 + phase));
    const opacity =
      .55 +
      .45 * (.5 + .5 * Math.sin(t * 6 + phase));
    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;
    star.style.transform = `
      translate(${orbitX}px,${orbitY}px)
      rotate(${rotate}deg)
      scale(${scale})
    `;
    star.style.opacity = opacity;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}
for(let i = 0; i < STAR_COUNT; i++){
  createStar();
}


