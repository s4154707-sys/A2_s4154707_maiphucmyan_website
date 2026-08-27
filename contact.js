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
// CONTACT là trang hiện tại
const activeRect = document.getElementById("rectangle-2");
activeRect.classList.add("nav-active");
activeRect.style.cursor = "default";

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

// ABOUT
setupRectangle("rectangle", "aboutme.html");

// WORKS
setupRectangle("rectangle-1", "works.html");
const circlePhone = document.getElementById("circle-phone");

circlePhone.addEventListener("click", () => {

    if(circlePhone.classList.contains("spin")) return;

    circlePhone.classList.add("spin");

    setTimeout(() => {
        circlePhone.classList.remove("spin");
    }, 1150);

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
/* =====================================================
   CONTACT LETTER
   ===================================================== */

const contactLetter =
    document.getElementById("bi-thu");

const contactPopup =
    document.getElementById("contact-popup");

const contactClose =
    document.getElementById("contact-close");


/* =====================================================
   OPEN CONTACT
   ===================================================== */

if (contactLetter && contactPopup) {

    contactLetter.addEventListener("click", () => {

        /* Không cho click liên tục */

        if (contactLetter.classList.contains("contact-click")) {
            return;
        }


        /* Click animation */

        contactLetter.classList.add("contact-click");


        /* Mở popup sau animation */

        setTimeout(() => {

            contactPopup.classList.add("show");

        }, 300);


        /* Xóa animation để có thể click lần sau */

        setTimeout(() => {

            contactLetter.classList.remove("contact-click");

        }, 520);

    });

}


/* =====================================================
   CLOSE BUTTON
   ===================================================== */

if (contactClose) {

    contactClose.addEventListener("click", () => {

        contactPopup.classList.remove("show");

    });

}


/* =====================================================
   CLICK OUTSIDE
   ===================================================== */

if (contactPopup) {

    contactPopup.addEventListener("click", (event) => {

        if (event.target === contactPopup) {

            contactPopup.classList.remove("show");

        }

    });

}


/* =====================================================
   ESC
   ===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (contactPopup) {

            contactPopup.classList.remove("show");

        }

    }

});

/* =====================================================
   COOKIE DISH - FREE DRAG
   ===================================================== */

const cookieDish = document.getElementById("cookie-dish");

let isDragging = false;

let startX = 0;
let startY = 0;

let startLeft = 0;
let startTop = 0;


/* =====================================================
   POINTER DOWN
   ===================================================== */

cookieDish.addEventListener("pointerdown", (e) => {

    isDragging = true;

    cookieDish.classList.add("dragging");

    /* Giữ pointer kể cả khi kéo nhanh ra ngoài object */
    cookieDish.setPointerCapture(e.pointerId);

    /* Vị trí chuột/touch lúc bắt đầu kéo */
    startX = e.clientX;
    startY = e.clientY;

    /* Vị trí hiện tại của object */
    const rect = cookieDish.getBoundingClientRect();

    startLeft = rect.left;
    startTop = rect.top;

    e.preventDefault();

});


/* =====================================================
   POINTER MOVE
   ===================================================== */

cookieDish.addEventListener("pointermove", (e) => {

    if (!isDragging) return;

    const moveX = e.clientX - startX;
    const moveY = e.clientY - startY;

    let newLeft = startLeft + moveX;
    let newTop = startTop + moveY;


    /* =================================================
       KHÔNG CHO KÉO RA NGOÀI MÀN HÌNH
       ================================================= */

    const rect = cookieDish.getBoundingClientRect();

    const maxLeft = window.innerWidth - rect.width;
    const maxTop = window.innerHeight - rect.height;


    newLeft = Math.max(
        0,
        Math.min(newLeft, maxLeft)
    );

    newTop = Math.max(
        0,
        Math.min(newTop, maxTop)
    );


    /* =================================================
       CẬP NHẬT VỊ TRÍ
       ================================================= */

    cookieDish.style.left = `${newLeft}px`;
    cookieDish.style.top = `${newTop}px`;

});


/* =====================================================
   POINTER UP
   ===================================================== */

cookieDish.addEventListener("pointerup", (e) => {

    isDragging = false;

    cookieDish.classList.remove("dragging");

    try {
        cookieDish.releasePointerCapture(e.pointerId);
    } catch (error) {}

});


/* =====================================================
   POINTER CANCEL
   ===================================================== */

cookieDish.addEventListener("pointercancel", () => {

    isDragging = false;

    cookieDish.classList.remove("dragging");

});
/* =====================================================
   CAPUCHINO - FREE DRAG
   Không cho kéo ra ngoài màn hình
   ===================================================== */

(function () {

    const capuchinoElement = document.getElementById("capuchino");

    if (!capuchinoElement) return;


    let capuchinoDragging = false;

    let capuchinoStartX = 0;
    let capuchinoStartY = 0;

    let capuchinoStartLeft = 0;
    let capuchinoStartTop = 0;


    /* =================================================
       BẮT ĐẦU KÉO
       ================================================= */

    capuchinoElement.addEventListener("pointerdown", function (event) {

        event.preventDefault();

        capuchinoDragging = true;

        capuchinoElement.classList.add("dragging");

        capuchinoElement.setPointerCapture(event.pointerId);


        const rect = capuchinoElement.getBoundingClientRect();

        capuchinoStartX = event.clientX;
        capuchinoStartY = event.clientY;

        capuchinoStartLeft = rect.left;
        capuchinoStartTop = rect.top;

    });


    /* =================================================
       KÉO
       ================================================= */

    capuchinoElement.addEventListener("pointermove", function (event) {

        if (!capuchinoDragging) return;

        event.preventDefault();


        const deltaX =
            event.clientX - capuchinoStartX;

        const deltaY =
            event.clientY - capuchinoStartY;


        let newLeft =
            capuchinoStartLeft + deltaX;

        let newTop =
            capuchinoStartTop + deltaY;


        /* =============================================
           KÍCH THƯỚC MÀN HÌNH
           ============================================= */

        const screenWidth =
            window.innerWidth;

        const screenHeight =
            window.innerHeight;


        /* =============================================
           KÍCH THƯỚC CAPUCHINO
           ============================================= */

        const capuchinoWidth =
            capuchinoElement.offsetWidth;

        const capuchinoHeight =
            capuchinoElement.offsetHeight;


        /* =============================================
           GIỚI HẠN TRÁI / PHẢI
           ============================================= */

        const minLeft = 0;

        const maxLeft =
            screenWidth - capuchinoWidth;


        newLeft = Math.max(
            minLeft,
            Math.min(newLeft, maxLeft)
        );


        /* =============================================
           GIỚI HẠN TRÊN / DƯỚI
           ============================================= */

        const minTop = 0;

        const maxTop =
            screenHeight - capuchinoHeight;


        newTop = Math.max(
            minTop,
            Math.min(newTop, maxTop)
        );


        /* =============================================
           CẬP NHẬT VỊ TRÍ
           ============================================= */

        capuchinoElement.style.left =
            newLeft + "px";

        capuchinoElement.style.top =
            newTop + "px";

    });


    /* =================================================
       THẢ CHUỘT / NGÓN TAY
       ================================================= */

    capuchinoElement.addEventListener("pointerup", function (event) {

        capuchinoDragging = false;

        capuchinoElement.classList.remove("dragging");


        if (
            capuchinoElement.hasPointerCapture(
                event.pointerId
            )
        ) {

            capuchinoElement.releasePointerCapture(
                event.pointerId
            );

        }

    });


    /* =================================================
       CANCEL
       ================================================= */

    capuchinoElement.addEventListener(
        "pointercancel",
        function (event) {

            capuchinoDragging = false;

            capuchinoElement.classList.remove("dragging");

        }
    );


})();
/* =====================================================
   PEN - FREE DRAG
   Không giới hạn khu vực
   Chỉ không cho cây bút ra khỏi màn hình
   ===================================================== */

(function () {

    const penElement = document.getElementById("pen");

    if (!penElement) return;


    let penDragging = false;

    let penStartX = 0;
    let penStartY = 0;

    let penStartLeft = 0;
    let penStartTop = 0;


    /* =================================================
       BẮT ĐẦU KÉO
       ================================================= */

    penElement.addEventListener("pointerdown", function (event) {

        event.preventDefault();

        penDragging = true;

        penElement.classList.add("dragging");

        penElement.setPointerCapture(event.pointerId);


        const rect = penElement.getBoundingClientRect();

        penStartX = event.clientX;
        penStartY = event.clientY;

        penStartLeft = rect.left;
        penStartTop = rect.top;

    });


    /* =================================================
       DI CHUYỂN
       ================================================= */

    penElement.addEventListener("pointermove", function (event) {

        if (!penDragging) return;

        event.preventDefault();


        const moveX =
            event.clientX - penStartX;

        const moveY =
            event.clientY - penStartY;


        let newLeft =
            penStartLeft + moveX;

        let newTop =
            penStartTop + moveY;


        /* =============================================
           VIEWPORT
           ============================================= */

        const screenWidth =
            window.innerWidth;

        const screenHeight =
            window.innerHeight;


        /* =============================================
           KÍCH THƯỚC PEN
           ============================================= */

        const penWidth =
            penElement.offsetWidth;

        const penHeight =
            penElement.offsetHeight;


        /* =============================================
           GIỚI HẠN TRÁI / PHẢI
           ============================================= */

        newLeft = Math.max(
            0,
            Math.min(
                newLeft,
                screenWidth - penWidth
            )
        );


        /* =============================================
           GIỚI HẠN TRÊN / DƯỚI
           ============================================= */

        newTop = Math.max(
            0,
            Math.min(
                newTop,
                screenHeight - penHeight
            )
        );


        /* =============================================
           CẬP NHẬT VỊ TRÍ
           ============================================= */

        penElement.style.left =
            newLeft + "px";

        penElement.style.top =
            newTop + "px";

    });


    /* =================================================
       THẢ RA
       ================================================= */

    penElement.addEventListener("pointerup", function (event) {

        penDragging = false;

        penElement.classList.remove("dragging");


        if (
            penElement.hasPointerCapture(
                event.pointerId
            )
        ) {

            penElement.releasePointerCapture(
                event.pointerId
            );

        }

    });


    /* =================================================
       CANCEL
       ================================================= */

    penElement.addEventListener(
        "pointercancel",
        function () {

            penDragging = false;

            penElement.classList.remove("dragging");

        }
    );

})();

/* =====================================================
   STAMP - FREE DRAG
   Không giới hạn khu vực
   Chỉ không cho stamp ra khỏi màn hình
   ===================================================== */

(function () {

    const stampElement = document.getElementById("stamp");

    if (!stampElement) return;


    let stampDragging = false;

    let stampStartX = 0;
    let stampStartY = 0;

    let stampStartLeft = 0;
    let stampStartTop = 0;


    /* =================================================
       BẮT ĐẦU KÉO
       ================================================= */

    stampElement.addEventListener("pointerdown", function (event) {

        event.preventDefault();

        stampDragging = true;

        stampElement.classList.add("dragging");

        stampElement.setPointerCapture(event.pointerId);


        const rect =
            stampElement.getBoundingClientRect();

        stampStartX = event.clientX;
        stampStartY = event.clientY;

        stampStartLeft = rect.left;
        stampStartTop = rect.top;

    });


    /* =================================================
       DI CHUYỂN
       ================================================= */

    stampElement.addEventListener("pointermove", function (event) {

        if (!stampDragging) return;

        event.preventDefault();


        const moveX =
            event.clientX - stampStartX;

        const moveY =
            event.clientY - stampStartY;


        let newLeft =
            stampStartLeft + moveX;

        let newTop =
            stampStartTop + moveY;


        /* =============================================
           KÍCH THƯỚC MÀN HÌNH
           ============================================= */

        const screenWidth =
            window.innerWidth;

        const screenHeight =
            window.innerHeight;


        /* =============================================
           KÍCH THƯỚC STAMP
           ============================================= */

        const stampWidth =
            stampElement.offsetWidth;

        const stampHeight =
            stampElement.offsetHeight;


        /* =============================================
           GIỚI HẠN TRÁI / PHẢI
           ============================================= */

        newLeft = Math.max(
            0,
            Math.min(
                newLeft,
                screenWidth - stampWidth
            )
        );


        /* =============================================
           GIỚI HẠN TRÊN / DƯỚI
           ============================================= */

        newTop = Math.max(
            0,
            Math.min(
                newTop,
                screenHeight - stampHeight
            )
        );


        /* =============================================
           CẬP NHẬT VỊ TRÍ
           ============================================= */

        stampElement.style.left =
            newLeft + "px";

        stampElement.style.top =
            newTop + "px";

    });


    /* =================================================
       THẢ RA
       ================================================= */

    stampElement.addEventListener("pointerup", function (event) {

        stampDragging = false;

        stampElement.classList.remove("dragging");


        if (
            stampElement.hasPointerCapture(
                event.pointerId
            )
        ) {

            stampElement.releasePointerCapture(
                event.pointerId
            );

        }

    });


    /* =================================================
       POINTER CANCEL
       ================================================= */

    stampElement.addEventListener(
        "pointercancel",
        function () {

            stampDragging = false;

            stampElement.classList.remove("dragging");

        }
    );

})();