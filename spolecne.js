
const menu = document.querySelector("#menu-tlacitko")
const icon = document.querySelector(".fa-bars")
const menuNav = document.querySelector("#menu-polozky")


let showMenu = false;

function toggleMenu() {
    if (!showMenu) {
        icon.classList.replace("fa-bars","fa-xmark");
        menuNav.classList.add("show");

        showMenu = true;
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
        menuNav.classList.remove("show");

        showMenu = false;
    }
}
    
menu.addEventListener("click", toggleMenu)