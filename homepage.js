document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       PANCAKE
       ===================================================== */

    const pancake = document.getElementById("pancake");

    if (pancake) {

        /* ---------- CLICK → ABOUT ---------- */

        pancake.addEventListener("click", () => {

            pancake.style.pointerEvents = "none";

            pancake.classList.add("clicked");

            setTimeout(() => {
                window.location.href = "aboutme.html";
            }, 320);

        });


        /* ---------- CLICK ME CURSOR ---------- */

        const cursorText = document.createElement("div");

        cursorText.id = "pancake-cursor-text";

        cursorText.textContent = "CLICK ME!";

        document.body.appendChild(cursorText);


        /* ---------- MOUSE ENTER ---------- */

        pancake.addEventListener("mouseenter", (event) => {

            cursorText.style.left =
                `${event.clientX + 12}px`;

            cursorText.style.top =
                `${event.clientY + 8}px`;

            cursorText.classList.add("show");

        });


        /* ---------- MOUSE MOVE ---------- */

        pancake.addEventListener("mousemove", (event) => {

            cursorText.style.left =
                `${event.clientX + 12}px`;

            cursorText.style.top =
                `${event.clientY + 8}px`;

        });


        /* ---------- MOUSE LEAVE ---------- */

        pancake.addEventListener("mouseleave", () => {

            cursorText.classList.remove("show");

        });

    }


    /* =====================================================
       PARFAIT
       ===================================================== */

    const parfait = document.getElementById("parfait");

    if (parfait) {

        parfait.addEventListener("click", () => {

            parfait.style.pointerEvents = "none";

            parfait.classList.add("clicked");

            setTimeout(() => {
                window.location.href = "works.html";
            }, 320);

        });

    }


    /* =====================================================
       BANANA SPLIT
       ===================================================== */

    const bananaSplit =
        document.getElementById("banana-split");

    if (bananaSplit) {

        bananaSplit.addEventListener("click", () => {

            bananaSplit.style.pointerEvents = "none";

            bananaSplit.classList.add("clicked");

            setTimeout(() => {
                window.location.href = "contact.html";
            }, 320);

        });

    }


    /* =====================================================
       ME CIRCLE
       ===================================================== */

    const meCircle =
        document.getElementById("me-circle");

    if (meCircle) {

        meCircle.addEventListener("mouseenter", () => {

            meCircle.style.transform =
                "rotate(360deg)";

        });

        meCircle.addEventListener("mouseleave", () => {

            meCircle.style.transform =
                "rotate(0deg)";

        });

    }


    /* =====================================================
       BACK ARROW
       ===================================================== */

    const backArrow =
        document.getElementById("back-arrow");

    if (backArrow) {

        backArrow.addEventListener("click", () => {

            backArrow.style.pointerEvents = "none";

            backArrow.classList.add("clicked");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 320);

        });

    }


    /* =====================================================
       SCROLL HINT
       ===================================================== */

    const scrollHint =
        document.getElementById("scroll-hint");

    let hidden = false;

    if (scrollHint) {

        window.addEventListener("scroll", () => {

            if (!hidden && window.scrollY > 0) {

                hidden = true;

                scrollHint.classList.add("hide");

            }

        });

    }


    /* =====================================================
       FALLING STARS
       ===================================================== */

    const starField =
        document.getElementById("star-field");

    const STAR_COUNT = 50;

    const colors = [
        "#FFFDF5",
        "#FFE8F0",
        "#E8F6FF"
    ];


    function createStar() {

        if (!starField) return;


        const star =
            document.createElement("div");

        star.className = "star";


        /* ---------- SIZE ---------- */

        const size =
            8 + Math.random() * 18;


        /* ---------- COLOR ---------- */

        const color =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        star.style.width =
            `${size}px`;

        star.style.height =
            `${size}px`;

        star.style.background =
            color;
        star.style.boxShadow = `
            0 0 ${size * 0.9}px ${color},
            0 0 ${size * 1.8}px rgba(255,255,255,.35)
        `;
        starField.appendChild(star);
        animateStar(star);
    }
    function animateStar(star) {
        const duration =
            9000 + Math.random() * 9000;
        const startX =
            Math.random() * 120 - 10;
        const drift =
            8 + Math.random() * 18;
        const orbit =
            6 + Math.random() * 18;
        const phase =
            Math.random() * Math.PI * 2;
        const rotateRange =
            12 + Math.random() * 35;
        const scaleMin =
            0.75 + Math.random() * 0.25;
        const scaleMax =
            scaleMin + 0.25;
        const startTime =
            performance.now();
        const startProgress =
            Math.random();
        function frame(now) {
            const raw =
                (now - startTime) /
                duration +
                startProgress;
            const t =
                raw % 1;
            const x =
                startX + drift * t;
            const y =
                -20 + 130 * t;
            const orbitX =
                Math.sin(
                    t * 8 + phase
                ) * orbit;
            const orbitY =
                Math.cos(
                    t * 8 + phase
                ) * orbit * 0.35;
            const rotate =
                Math.sin(
                    t * 5 + phase
                ) * rotateRange;
            const scale =
                scaleMin +
                (scaleMax - scaleMin) *
                (
                    0.5 +
                    0.5 *
                    Math.sin(
                        t * 7 + phase
                    )
                );
            const opacity =
                0.55 +
                0.45 *
                (
                    0.5 +
                    0.5 *
                    Math.sin(
                        t * 6 + phase
                    )
                );
            star.style.left =
                `${x}vw`;
            star.style.top =
                `${y}vh`;
            star.style.transform = `
                translate(
                    ${orbitX}px,
                    ${orbitY}px
                )
                rotate(${rotate}deg)
                scale(${scale})
            `;
            star.style.opacity =
                opacity;
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }
    if (starField) {
        for (
            let i = 0;
            i < STAR_COUNT;
            i++
        ) {
            createStar();
        }
    }
});
const parfait =
    document.getElementById("parfait");
if (parfait) {
    const parfaitCursorText =
        document.createElement("div");
    parfaitCursorText.id =
        "parfait-cursor-text";
    parfaitCursorText.textContent =
        "CLICK ME!";
    document.body.appendChild(
        parfaitCursorText
    );
    parfait.addEventListener(
        "mouseenter",
        function(event) {
            parfaitCursorText.style.left =
                event.clientX + "px";
            parfaitCursorText.style.top =
                event.clientY + "px";
            parfaitCursorText.classList.add(
                "show"
            );
        }
    );
    parfait.addEventListener(
        "mousemove",
        function(event) {
            parfaitCursorText.style.left =
                event.clientX + "px";
            parfaitCursorText.style.top =
                event.clientY + "px";
        }
    );
    parfait.addEventListener(
        "mouseleave",
        function() {
            parfaitCursorText.classList.remove(
                "show"
            );
        }
    );
}
const bananaSplit =
    document.getElementById("banana-split");
if (bananaSplit) {
    const bananaSplitCursorText =
        document.createElement("div");
    bananaSplitCursorText.id =
        "banana-split-cursor-text";
    bananaSplitCursorText.textContent =
        "CLICK ME!";
    document.body.appendChild(
        bananaSplitCursorText
    );
    bananaSplit.addEventListener(
        "mouseenter",
        function(event) {
            bananaSplitCursorText.style.left =
                event.clientX + "px";
            bananaSplitCursorText.style.top =
                event.clientY + "px";

            bananaSplitCursorText.classList.add(
                "show"
            );
        }
    );
    bananaSplit.addEventListener(
        "mousemove",
        function(event) {
            bananaSplitCursorText.style.left =
                event.clientX + "px";
            bananaSplitCursorText.style.top =
                event.clientY + "px";
        }
    );
    bananaSplit.addEventListener(
        "mouseleave",
        function() {
            bananaSplitCursorText.classList.remove(
                "show"
            );
        }
    );
}