"use strict";

const menuIcon = document.querySelector(`.menu-icon`);
const navBar = document.querySelector(`nav`);

menuIcon.onclick = () => {
  menuIcon.classList.toggle("close");
  if (menuIcon.getAttribute("name") === "menu-outline") {
    menuIcon.setAttribute("name", "close");
    navBar.classList.toggle("active");
  } else if (menuIcon.getAttribute("name") === "close") {
    menuIcon.setAttribute("name", "menu-outline");
    navBar.classList.toggle("active");
  }
};

const sections = document.querySelectorAll(`section`);
const navLinks = document.querySelectorAll(`header nav a`);
const spanElement = () => {
  const newSpan = document.createElement("span");
  newSpan.setAttribute("style", "position: absolute");
  newSpan.setAttribute("style", "top: 0");
  newSpan.setAttribute("style", "left: 0");
  newSpan.setAttribute("style", "background: linear-gradient(#2e3192, #0ef)");
  newSpan.setAttribute("style", "border-radius: 0.75rem");
  newSpan.setAttribute("style", "transition: 0.5s ease;");
  return newSpan;
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("nav-bar-active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("nav-bar-active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("close");
  menuIcon.setAttribute("name", "menu-outline");
  navBar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  ".home-content, .heading, .home-content div a.facebook, .home-content div a.instagram, .home-content div a.git",
  {
    origin: "top",
  }
);
ScrollReveal().reveal(
  ".home-img, form .btn, .projects-container, .home-content div a.twitter, .home-content div a.linkedin",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(
  ".home-content h1, #about img, form div .full-name, form .message",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(
  ".home-content p, .about-content, form div .email-address",
  {
    origin: "right",
  }
);

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "JS Enthusiast", "Tailwind Lover"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const projectsContainer = document.querySelector(".projects-container");
projectsContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  projectsContainer.scrollLeft += evt.deltaY;
});
