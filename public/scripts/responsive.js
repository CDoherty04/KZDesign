const drawerBtnElement = document.getElementById("drawer-btn");
const mobileDarwerElement = document.getElementById("mobile-drawer");
const header = document.querySelector("header");

function toggleDrawer() {
  mobileDarwerElement.classList.toggle("open");
  header.classList.toggle("fixed")
}

drawerBtnElement.addEventListener("click", toggleDrawer);