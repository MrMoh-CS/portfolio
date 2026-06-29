// ===============================
// Navbar Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(11,15,25,0.85)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.4)";

    } else {

        header.style.background = "rgba(11,15,25,0.55)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Scroll Reveal
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Smooth Buttons Animation
// ===============================

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// Floating Background
// ===============================

const blur1 = document.querySelector(".blur1");
const blur2 = document.querySelector(".blur2");

window.addEventListener("mousemove", e => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blur1.style.transform = `translate(${x * 40}px, ${y * 40}px)`;

    blur2.style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;

});

// ===============================
// Typing Effect
// ===============================

const text = "Building Artificial Intelligence & Modern Software";

const title = document.querySelector(".hero h1");

let i = 0;

title.innerHTML = "";

function typing() {

    if (i < text.length) {

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 40);

    }

}

typing();

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    topBtn.style.display = window.scrollY > 400 ? "block" : "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
