document.addEventListener("DOMContentLoaded", function () {
if (
window.matchMedia("(pointer: coarse)").matches
) {
return;
}
const glow =
document.createElement("div");
glow.className =
"cursor-glow";
document.body.appendChild(glow);
let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;
document.addEventListener(
"mousemove",
function (event) {
mouseX = event.clientX;
mouseY = event.clientY;
},
{ passive: true }
);
function updateGlow() {
glowX +=
(mouseX - glowX) * 0.18;
glowY +=
(mouseY - glowY) * 0.18;
glow.style.left =
glowX + "px";
glow.style.top =
glowY + "px";
  requestAnimationFrame(
updateGlow
);
}
updateGlow();
let lastX = 0;
let lastY = 0;
document.addEventListener(
"mousemove",
function (event) {
const x =
event.clientX;
const y =
event.clientY;
const distance =
 Math.hypot(
x - lastX,
y - lastY
);
if (distance < 15) {
return;
}
lastX = x;
lastY = y;
createTrailStar(x, y);
},
{ passive: true }
);
function createTrailStar(x, y) {
const star =
document.createElement("div");
star.className =
"cursor-star";
star.style.left =
x + "px";
star.style.top =
y + "px";
const randomX =
(Math.random() - .5) * 55;
const randomY =
25 + Math.random() * 45;
star.style.setProperty(
"--x",
randomX + "px"
);
star.style.setProperty(
            "--y",
            randomY + "px"
        );
        const size =
            5 + Math.random() * 5;
        star.style.width =
            size + "px";
        star.style.height =
            size + "px";
        document.body.appendChild(
            star
        );
        setTimeout(
            function () {
                star.remove();
            },
            950
        );
    }
    document.addEventListener(
        "mousedown",
        function (event) {
            createClickEffect(
                event.clientX,
                event.clientY
            );
        }
    );
    function createClickEffect(x, y) {
        const flash =
            document.createElement("div");
        flash.className =
            "cursor-click-flash";
        flash.style.left =
            x + "px";
        flash.style.top =
            y + "px";
        document.body.appendChild(
            flash
        );
        setTimeout(
            function () {
                flash.remove();
            },
            450
        );
        const ring =
            document.createElement("div");
        ring.className =
            "cursor-click-ring";
        ring.style.left =
            x + "px";
        ring.style.top =
            y + "px";
        document.body.appendChild(
            ring
        );
        setTimeout(
            function () {

                ring.remove();

            },
            700
        );
        const starCount = 10;
        for (
            let i = 0;
            i < starCount;
            i++
        ) {
            const star =
                document.createElement("div");
            star.className =
                "cursor-click-star";
            star.style.left =
                x + "px";
            star.style.top =
                y + "px";
            const angle =
                (Math.PI * 2 / starCount) * i
                +
                (Math.random() - .5) * .5;
            const distance =
                35 + Math.random() * 55;
            const burstX =
                Math.cos(angle) * distance;
            const burstY =
                Math.sin(angle) * distance;
            star.style.setProperty(
                "--burst-x",
                burstX + "px"
            );
            star.style.setProperty(
                "--burst-y",
                burstY + "px"
            );
            const size =
                5 + Math.random() * 5;
            star.style.width =
                size + "px";
            star.style.height =
                size + "px";
            star.style.animationDelay =
                Math.random() * .06 + "s";
            document.body.appendChild(
                star
            );
            setTimeout(
                function () {
                    star.remove();
                },
                800
            );
        }
    }
});