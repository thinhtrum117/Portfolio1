let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
function showContent(contentId) {
  let contents = document.querySelectorAll(".content");
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  let selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add("active");
  }
}
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});
function showContent(id, btn) {
  document.querySelectorAll(".content").forEach(function (el) {
    el.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".intro-tab").forEach(function (tab) {
    tab.classList.remove("active");
  });
  btn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var text = "Hoàng Trọng Thịnh";
  var i = 0;
  var isDeleting = false;
  var speed = 90;
  var delayAfterTyping = 1000;
  var delayAfterDeleting = 500;

  function typeLoop() {
    var el = document.getElementById("typing-name");
    if (!isDeleting) {
      el.innerHTML = text.substring(0, i + 1);
      i++;
      if (i === text.length) {
        setTimeout(() => {
          isDeleting = true;
          typeLoop();
        }, delayAfterTyping);
        return;
      }
    } else {
      el.innerHTML = text.substring(0, i - 1);
      i--;
      if (i === 0) {
        setTimeout(() => {
          isDeleting = false;
          typeLoop();
        }, delayAfterDeleting);
        return;
      }
    }
    setTimeout(typeLoop, speed);
  }
  typeLoop();
});
