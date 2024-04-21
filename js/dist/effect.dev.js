"use strict";

/*----- sticky menu-----*/
var navBar = document.querySelector('nav');
var sticky = navBar.offsetTop;

window.scroll = function () {
  stickyMenu();
};

function stickyMenu() {
  if (window.pageYOffset >= 100) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
} // close Responsive Menu


function closeResMenu() {
  document.getElementById("ResponsiveMenu").style.width = "0%";
  document.getElementById("ResponsiveMenu").style.display = "none";
}

function openResMenu() {
  document.getElementById("ResponsiveMenu").style.width = "100%";
  document.getElementById("ResponsiveMenu").style.display = "unset";
}