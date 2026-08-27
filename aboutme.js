const logoParts = document.querySelectorAll("#MY, #AN");

logoParts.forEach(part => {
    part.addEventListener("click", () => {
        // chặn click nhiều lần
        logoParts.forEach(el => el.style.pointerEvents = "none");

        // animate cả MY và AN cùng lúc
        logoParts.forEach(el => el.classList.add("clicked"));

        setTimeout(() => {
            window.location.href = "homepage.html";
        }, 320);
    });
});

function setupRectangle(rectId, url){

    const rect = document.getElementById(rectId);

    rect.addEventListener("mouseenter", () => {
        rect.classList.add("nav-hover");
    });

    rect.addEventListener("mouseleave", () => {
        rect.classList.remove("nav-hover");
    });

    rect.addEventListener("click", () => {

        rect.classList.remove("nav-hover");
        rect.classList.add("nav-click");

        setTimeout(() => {
            window.location.href = url;
        }, 320);
    });
}

// ABOUT không có click
setupRectangle("rectangle-1", "works.html");
setupRectangle("rectangle-2", "contact.html");

const arrow1 = document.getElementById("arrow-1");

const texts = [
    document.getElementById("intro-text"),
    document.getElementById("intro-text-1"),
    document.getElementById("intro-text-2")
];

let current = 0;

// Hiện đoạn đầu tiên khi tải trang
texts[current].classList.add("active");

arrow1.addEventListener("click", () => {

    arrow1.classList.add("clicked");

    texts[current].classList.remove("active");

    current = (current + 1) % texts.length;

    texts[current].classList.add("active");

    setTimeout(() => {
        arrow1.classList.remove("clicked");
    }, 300);

});
const backArrow = document.getElementById("back-arrow");

const cupcakeTexts = [
    document.getElementById("cupcake-text"),
    document.getElementById("cupcake-text-1"),
    document.getElementById("cupcake-text-2")
];

let cupcakeCurrent = 0;

// Hiện câu đầu tiên khi tải trang
cupcakeTexts[cupcakeCurrent].classList.add("active");

backArrow.addEventListener("click", () => {

    backArrow.classList.add("clicked");

    cupcakeTexts[cupcakeCurrent].classList.remove("active");

    cupcakeCurrent = (cupcakeCurrent + 1) % cupcakeTexts.length;

    cupcakeTexts[cupcakeCurrent].classList.add("active");

    setTimeout(() => {
        backArrow.classList.remove("clicked");
    }, 300);

});
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    hamburgerBtn.classList.toggle("open");
    mobileMenu.classList.toggle("show");

});

document.addEventListener("click", (e) => {

    if(
        !mobileMenu.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
    ){

        mobileMenu.classList.remove("show");
        hamburgerBtn.classList.remove("open");

    }

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