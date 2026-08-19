// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close menu after clicking navigation link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const whatsappNumber = "923224584859";


    const whatsappMessage =
        `Hello Saadi Networking!

Name: ${name}

Email: ${email}

Project / Service: ${subject}

Message:
${message}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");

    contactForm.reset();

});