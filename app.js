const MENU_ICON_OPEN = document.getElementById("menu_icon_open");
const MENU_ICON_CLOSE = document.getElementById("menu_icon_close");
const MENU_MOBILE = document.getElementById("menu_mobile");

MENU_ICON_OPEN.addEventListener("click", () => {
  MENU_MOBILE.style.display = "block";
  // console.log("Click");
});
MENU_ICON_CLOSE.addEventListener("click", () => {
  MENU_MOBILE.classList.add("nav--animate-close");

  setTimeout(() => {
    MENU_MOBILE.removeAttribute("style");
    MENU_MOBILE.classList.remove("nav--animate-close");
  }, 1000);
});
