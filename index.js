const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  //  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  // Responsive breakpoints
  breakpoints: {
    1500: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1160: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

const circleType = new CircleType(document.getElementById("rotated")).radius(
  50
);

window.addEventListener("scroll", function () {
  var offset = window.scrollY;
  offset = offset + 0.4;

  var circularText = document.querySelector(".circular-text");
  circularText.style.transform = "rotate(" + offset + "deg)";
});

document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".headline", { delay: 500 });
  gsap
    .timeline({ delay: 3 })
    // 1. .text-wrapperクラスが付与された要素のtranslateYを0%に変更
    .to(".text-wrapper", {
      duration: 1,
      opacity: 1,
      ease: "power3.out",
    })
    // 2. headerをやや上からフェードインする形で表示
    .to("header", {
      duration: 0.5,
      y: "0",
      opacity: 1,
      ease: "power2.out",
    })
    // 2. headerをやや上からフェードインする形で表示
    .to(".circular-text", {
      duration: 0.5,
      opacity: 1,
      ease: "power1.inOut",
    })
    .to(".flow", {
      duration: 0.5,
      opacity: 1,
      ease: "power1.inOut",
    });
});
