const copyBtn = document.getElementById("copyBtn");
const shareBtn = document.getElementById("shareBtn");


// ================= FALLING HEARTS =================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("falling-heart");

    const hearts = ["❤️", "💗", "💕", "🌸", "💖"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    heart.style.fontSize =
        (15 + Math.random() * 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}


// يبدأ نزول القلوب
setInterval(createHeart, 700);


// ================= COPY LINK =================

copyBtn.addEventListener("click", async function () {

    try {

        await navigator.clipboard.writeText(
            window.location.href
        );

        copyBtn.innerText = "COPIED ✓";

        setTimeout(() => {
            copyBtn.innerText = "COPY LINK";
        }, 2000);

    } catch {

        alert("Copy the link from the browser ❤️");

    }

});


// ================= SHARE =================

shareBtn.addEventListener("click", async function () {

    if (navigator.share) {

        await navigator.share({

            title: "Digital Bouquet 💐",

            text: "I made this bouquet for you ❤️",

            url: window.location.href

        });

    } else {

        alert(
            "Share is not available here. " +
            "Copy the link and send it ❤️"
        );

    }

});