
const logoParts = document.querySelectorAll("#MY, #AN");
logoParts.forEach((part) => {
part.addEventListener("click", () => {
logoParts.forEach((el) => {
el.style.pointerEvents = "none";
el.classList.add("clicked");
});
setTimeout(() => {
window.location.href = "homepage.html";
}, 320);
    });
});
const worksRectangle =
    document.getElementById("rectangle-1");
if (worksRectangle) {
    worksRectangle.classList.add("nav-active");
}
function setupNavigation(rectId, url) {
    const rect =
        document.getElementById(rectId);
    if (!rect) return;
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
setupNavigation(
    "rectangle",
    "aboutme.html"
);
setupNavigation(
    "rectangle-2",
    "contact.html"
);
const cdCover =
    document.getElementById("cd-cover");
const boardOverlay =
    document.getElementById("illustration-board");
const closeBoard =
    document.getElementById("close-board");
if (cdCover && boardOverlay) {
    cdCover.addEventListener("click", () => {
        cdCover.classList.add("object-click");
        setTimeout(() => {
            boardOverlay.classList.add("show");
            cdCover.classList.remove(
                "object-click"
            );
        }, 320);
    });
}
if (closeBoard && boardOverlay) {
    closeBoard.addEventListener("click", () => {
        boardOverlay.classList.remove("show");

    });
}
if (boardOverlay) {
    boardOverlay.addEventListener("click", (event) => {
        if (event.target === boardOverlay) {
            boardOverlay.classList.remove("show");

        }
    });
}
const hamburgerBtn =
    document.getElementById("hamburger-btn");
const mobileMenu =
    document.getElementById("mobile-menu");
if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        hamburgerBtn.classList.toggle("open");
        mobileMenu.classList.toggle("show");

    });
    document.addEventListener("click", (event) => {
        if (
            !mobileMenu.contains(event.target) &&
            !hamburgerBtn.contains(event.target)
        ) {
            mobileMenu.classList.remove("show");
            hamburgerBtn.classList.remove("open");
        }
    });
}
const sets = [
    {
        dish: document.getElementById("dish"),
        cd:
            document.getElementById("cd-cover"),
        youtube: null
    },
    {
        dish:
            document.getElementById("dish-1"),
        cd:
            document.getElementById("cd-cover-1"),
        youtube:
            "https://www.youtube.com/watch?v=EVoMATPdnPI"
    },
    {
        dish:
            document.getElementById("dish-2"),
        cd:
            document.getElementById("cd-cover-2"),
        youtube:
            "https://www.youtube.com/watch?v=HZ3_I0RkWVE"
    }
];
const arrowNext =
    document.getElementById("arrow-1");
const arrowPrevious =
    document.getElementById("arrow-2");
let currentSet = 0;
let isSwitching = false;
function getObjects(set) {
    return [
        set.dish,
        set.cd
    ].filter(Boolean);
}
function updateArrowState() {
    if (!arrowNext || !arrowPrevious) {
        return;
    }
    arrowNext.classList.remove(
        "arrow-hidden"
    );
    arrowPrevious.classList.remove(
        "arrow-hidden"
    );
    if (currentSet === 0) {
        arrowPrevious.classList.add(
            "arrow-hidden"
        );
    }
    else if (currentSet === 2) {
        arrowNext.classList.add(
            "arrow-hidden"
        );
    }
}
function setInitialState() {
    sets.forEach((set, index) => {
        const objects =
            getObjects(set);
        objects.forEach((object) => {
            object.classList.remove(
                "work-active",
                "work-inactive",
                "work-in",
"work-out",
"object-click"
            );
if (index === currentSet) {
                object.classList.add("work-active");
} else {
                object.classList.add(
                    "work-inactive"
                );
            }
        });
    });
    updateArrowState();
}
function switchSet(newSet) {
    if (newSet < 0) {
        return;
    }
    if (newSet > 2) {
        return;
    }
    if (newSet === currentSet) {
        return;
    }
    if (isSwitching) {
        return;
    }
    isSwitching = true;
    const oldSet =
        sets[currentSet];
    const newSetData =
        sets[newSet];
    const oldObjects =
        getObjects(oldSet);
    const newObjects =
        getObjects(newSetData);
    newObjects.forEach((object) => {
        object.classList.remove(
            "work-active",
            "work-inactive",
            "work-out",
            "work-in"
        );
        object.classList.add(
            "work-inactive"
        );
        void object.offsetWidth;
    });
    oldObjects.forEach((object) => {

        object.classList.remove(
            "work-in",
            "work-active",
            "work-inactive"
        );
        void object.offsetWidth;
        object.classList.add(
            "work-out"
        );

    });
    newObjects.forEach((object) => {
        object.classList.remove(
            "work-inactive"
        );
        object.classList.add(
            "work-in"
        );
    });
    currentSet = newSet;
    updateArrowState();
    setTimeout(() => {
oldObjects.forEach((object) => {
object.classList.remove(
"work-out",
"work-active",
"work-in"
);
object.classList.add(
"work-inactive"
);
        });
        newObjects.forEach((object) => {
            object.classList.remove(
                "work-in",
                "work-out",
                "work-inactive"
            );
            object.classList.add(
                "work-active"
            );
        });
        isSwitching = false;
        updateArrowState();
    }, 560);
}
if (arrowNext) {
    arrowNext.addEventListener("click", () => {
        if (isSwitching) {
            return;
}
        if (currentSet < 2) {
            switchSet(
                currentSet + 1
            );
        }
    });
}
if (arrowPrevious) {
    arrowPrevious.addEventListener("click", () => {
        if (isSwitching) {
            return;
        }
        if (currentSet > 0) {
            switchSet(
                currentSet - 1
            );
        }
    });
}
function playObjectClick(object) {
    if (!object) {
        return;
    }
    object.classList.remove(
        "object-click"
    );
    void object.offsetWidth;
    object.classList.add(
        "object-click"
    );
    object.addEventListener(
        "animationend",
        () => {
            object.classList.remove(
                "object-click"
            );
        },
        {
            once: true
        }
    );
}
const youtubePopup =
    document.getElementById("youtube-popup");
const youtubeLink =
    document.getElementById("youtube-link");
const youtubeClose =
    document.getElementById("youtube-close");
function openYoutubePopup(url) {
if (!youtubePopup) {
 return;
    }
if (!youtubeLink) {
return;
}
youtubeLink.href = url;
youtubePopup.classList.add(
        "show"
    );
}
function closeYoutubePopup() {
    if (!youtubePopup) {
        return;
    }
    youtubePopup.classList.remove(
        "show"
    );
    if (youtubeLink) {
        youtubeLink.href = "#";
    }
}
sets.forEach((set, setIndex) => {
    const objects =
        getObjects(set);
    objects.forEach((object) => {
        object.addEventListener(
            "click",
            () => {
                if (setIndex !== currentSet) {
                    return;
                }
                if (setIndex === 0) {
                    if (object === cdCover) {
                        playObjectClick(object);
                        if (boardOverlay) {
                            setTimeout(() => {
                                boardOverlay.classList.add(
                                    "show"
                                );
                            }, 180);
}
} else {
  playObjectClick(object);
}
return;
}
playObjectClick(object);
if (set.youtube) {
setTimeout(() => {
openYoutubePopup(
set.youtube
);
}, 180);
}
}
);
});
});
if (youtubeClose) {
    youtubeClose.addEventListener(
        "click",
        () => {
            closeYoutubePopup();
        }
    );
}
if (youtubePopup) {

    youtubePopup.addEventListener(
        "click",
        (event) => {
            if (
                event.target === youtubePopup
            ) {
                closeYoutubePopup();
            }
        }
    );
}
document.addEventListener(
"keydown",
(event) => {
if (event.key === "Escape") {
closeYoutubePopup();
        }
    }
);
setInitialState();
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