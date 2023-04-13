import "./mystyle.css";

const hamburger = document.querySelector("#see-menu");
const menu = document.querySelector("#menu-content");

function seeMenu() {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("d-none");
  });
}

function onMobileMenuElementClicked() {
  const menuElements = document.querySelectorAll("#menu li");

  menuElements.forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector(".animated-icon").classList.remove("open");
      hamburger.classList.remove("active");
      menu.classList.add("d-none");
    });
  });
}

seeMenu();
onMobileMenuElementClicked();
