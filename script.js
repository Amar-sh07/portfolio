/* ==========================
   TYPEWRITER EFFECT
========================== */

var app = document.getElementById("typing");

if (app) {
    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 70,
        deleteSpeed: 40
    });

    typewriter
        .typeString("Python Developer")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Future Django Developer")
        .pauseFor(1500)
        .deleteAll()
        .typeString("Frontend Developer")
        .pauseFor(1500)
        .start();
}

/* ==========================
   AOS
========================== */

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}

/* ==========================
   SCROLL TO TOP BUTTON
========================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (topBtn) {

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    }

});

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* ==========================
   ACTIVE NAVBAR
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
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

/* ==========================
   DARK MODE
========================== */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

    });

}
/* ==========================
   EMAILJS CONTACT FORM
========================== */

if (typeof emailjs !== "undefined") {

    emailjs.init("YOUR_PUBLIC_KEY");

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            emailjs.sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                this
            )
            .then(() => {

                alert("Message sent successfully ✅");

                contactForm.reset();

            })
            .catch((error) => {

                alert("Message sending failed ❌");

                console.log(error);

            });

        });

    }

}