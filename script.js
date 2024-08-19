"use strict";

// HEADER ↓ ↓ ↓

const XbtnNav = document.querySelector(".bx-x");
const showMenu = document.querySelector(".show-menu-moblie");
const sideMenu = document.querySelector(".nav-mobile");
const backdrop = document.querySelector(".backdrop");

XbtnNav.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

showMenu.addEventListener("click", () => {
  sideMenu.classList.toggle("show-menu");
  showMenu.classList.toggle("menu-active");
  backdrop.classList.remove("hidden");
});

function closeMenu() {
  sideMenu.classList.remove("show-menu");
  showMenu.classList.remove("menu-active");
  backdrop.classList.add("hidden");
}

document.addEventListener("scroll", () => {
  const header = document.querySelector("nav");
  const logoLaptop = document.querySelector("#logo-lp");

  if (document.documentElement.scrollTop > 5) {
    logoLaptop.style.width = "130px";
  } else {
    logoLaptop.style.width = "150px";
  }
});

const itemMenu = document.querySelectorAll(".li-m");

itemMenu.forEach((item) => {
  item.addEventListener("click", () => {
    sideMenu.classList.remove("show-menu");
    showMenu.classList.remove("menu-active");
    backdrop.classList.add("hidden");
  });
});


// LOADER ↓ ↓ ↓

const loader = document.querySelector(".loader-page");

window.addEventListener("load", () => {
  loader.classList.add("loader-hidden");
});


// HOME PAGE ↓ ↓ ↓

let type = new Typed(".auto-type", {
  strings: ["business", "online shop"],
  typeSpeed: 120,
  backSpeed: 100,
  loop: true,
  backDelay: 1000,
});

const homePageText = document.querySelector(".home-page-text");
const homePageImg = document.querySelector(".home-page-img");

window.addEventListener("load", () => {
  homePageImg.classList.remove("home-img-left");
  homePageText.classList.remove("home-page-text-left");
});


//  SERVICE ↓ ↓ ↓

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};


//  SWITCH THEME ↓ ↓ ↓

const switchTheme = document.querySelector(".switch-theme");

switchTheme.addEventListener("click", () => {
  switchTheme.classList.toggle("change-theme-mb");
  document.body.classList.toggle("dark");

  if (document.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

const darkModeMd = document.querySelector(".bxs-moon");

darkModeMd.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let result = localStorage.getItem("theme");
  if (result === "dark") {
    document.body.classList.add("dark");
  }
});


// ABOUT US ↓ ↓ ↓

const aboutImg = document.querySelector(".about-imgs");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1200) {
    aboutImg.classList.remove("about-img-down");
  }
});


// BACK TO TOP ↓ ↓ ↓

const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("to-top");
  } else {
    backToTopBtn.classList.remove("to-top");
  }
});


// POSITIVE FEATURE  ↓ ↓ ↓

const featureBox = document.querySelectorAll(".feature-box");

featureBox.forEach((box) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1850) {
      box.classList.remove("box-to-down");
    }
  });
});
