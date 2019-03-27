// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const tabSwitch = document.querySelectorAll(".w3-button");

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

tabSwitch.forEach(function(tab) {
  tab.addEventListener("click", function() {
    var active = tab.classList.contains("current");
    if (!active) tab.classList.add("current");
    var appear = tab.id + "-projects";
    document.getElementsByClassName(appear)[0].style.display = "grid";

    tabSwitch.forEach(othertab => {
      if (othertab != tab) {
        othertab.classList.remove("current");
        var disappear = othertab.id + "-projects";
        console.log(disappear);
        document.getElementsByClassName(disappear)[0].style.display = "none";
      }
    });
  });
});

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    console.log("run");

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}
