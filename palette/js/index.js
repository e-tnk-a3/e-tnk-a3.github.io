// GSAP TimeLine
// tl = new TimelineMax();
// tl.to(".load", 1, { height: "0%", ease: "power2.out" })
//   .to(".load", 0, { display: "none" })
//   .fromTo(
//     ".bg-wrapper",
//     1,
//     { height: "0%", scale: "0.8" },
//     { height: "100%", scale: "1", ease: "power1.out" },
//   )
//   .from(".g-fade", 1, { y: -50, opacity: 0, ease: Power2.easeOut });

// ===========================
// Header scroll effect
// ===========================
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("is-scrolled");
  } else {
    header.classList.remove("is-scrolled");
  }
});

// ===========================
// Hamburger menu
// ===========================
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  hamburger.classList.toggle("is-active");
  hamburger.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
});

function closeMenu() {
  mobileNav.classList.remove("is-open");
  hamburger.classList.remove("is-active");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

// ===========================
// Scroll reveal animations
// ===========================
const fadeElements = document.querySelectorAll(".fade-in-up");

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach((el) => observer.observe(el));

// ===========================
// Smooth active nav
// ===========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.style.background = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.background = "var(--color-primary-pale)";
    }
  });
});
