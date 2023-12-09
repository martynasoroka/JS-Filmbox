
const menu = document.querySelector("#menu-tlacitko")

const showMenu = () => {
    const menuP = document.querySelector("#menu-polozky")
    menuP.classList.toggle("show")
}

menu.addEventListener("click", showMenu)

//tady pridat by hamburger menu melo "x"