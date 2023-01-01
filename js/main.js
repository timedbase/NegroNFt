// icon bars
let iconNav = document.getElementById("icon-nav");
let navLinks = document.getElementById("nav-links");
let iconClose = document.getElementById("close-nav");
iconNav.addEventListener("click", function () {
  navLinks.classList.toggle("active-nav");
});
// Close Nav icon
iconClose.addEventListener("click", function () {
  navLinks.classList.remove("active-nav");
});

// Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    1200: {
      items: 2,
    },
  },
});

// Accordion
const acc = document.querySelectorAll(".accordion-btn");
acc.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.classList.contains("is-open")) {
      ele.classList.remove("is-open");
    } else {
      const accWithIsOpen = document.querySelectorAll(".is-open");
      accWithIsOpen.forEach((eleWithIsOpen) => {
        eleWithIsOpen.classList.remove("is-open");
      });
      ele.classList.add("is-open");
    }
  });
});

let btnDark = document.querySelector(".dark-light");
let icon = document.getElementById("icon-mode");

console.log(icon);
btnDark.addEventListener("click", () => {
  btnDark.classList.toggle("active");
  if (btnDark.classList.contains("active")) {
    document.documentElement.style.setProperty("--bodyColor", "#0F051D");
    document.documentElement.style.setProperty("--navColor", "transparent");
    document.documentElement.style.setProperty("--linksNav", "#fff");
    document.documentElement.style.setProperty("--secondDark", "#fff");
    document.documentElement.style.setProperty("--dark-Color", "#fff");
    document.documentElement.style.setProperty("--dark-btn", "#e348ff");
    document.documentElement.style.setProperty(
      "--whiteBorder",
      "rgba(255,255,255,.1)"
    );
    document.documentElement.style.setProperty(
      "--backgroundWhite",
      "rgba(255,255,255,.05)"
    );
  } else {
    document.documentElement.style.setProperty("--bodyColor", "#fff");
    document.documentElement.style.setProperty("--navColor", "transparent");
    document.documentElement.style.setProperty("--linksNav", "#0F051D");
    document.documentElement.style.setProperty("--dark-Color", "#0F051D");
    document.documentElement.style.setProperty("--whiteBorder", "#fff");
    document.documentElement.style.setProperty("--secondDark", "#131316");
    document.documentElement.style.setProperty("--backgroundWhite", "#fff");
    document.documentElement.style.setProperty("--dark-btn", "#0f051d");
  }
});

$(".dark-light").click(function () {
  // $("#display_advance").toggle("1000");
  $("i", this).toggleClass("fa-solid fa-sun fa-solid fa-moon");
});
