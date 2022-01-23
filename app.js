import getData from "./scripts/getData.js";

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

const selectDestiny = {
  moon: document.getElementById("moon"),
  mars: document.getElementById("mars"),
  europa: document.getElementById("europa"),
  titan: document.getElementById("titan")
};

const editData = {
  title: document.getElementById("destiny_name"),
  info: document.getElementById("destiny_info"),
  distance: document.getElementById("destiny_distance"),
  time: document.getElementById("destiny_time"),
  image: document.getElementById("planet_imagen")
};

const dataDestiny = {
  moon: "",
  mars: "",
  europa: "",
  titan: ""
};

getData().then(({ destinations }) => {
  dataDestiny.moon = destinations[0];
  dataDestiny.mars = destinations[1];
  dataDestiny.europa = destinations[2];
  dataDestiny.titan = destinations[3];
});
const isActive = document.getElementsByClassName(
  "main__menu__destination__item"
);

const renderData = (value) => {
  editData.title.innerText = dataDestiny[value].name;
  editData.info.innerText = dataDestiny[value].description;
  editData.distance.innerText = dataDestiny[value].distance;
  editData.time.innerText = dataDestiny[value].travel;
  editData.image.setAttribute("src", dataDestiny[value].images.png);

  for (let i = 0; i <= 3; i++) {
    if (isActive[i].getAttribute("id") !== value) {
      isActive[i].classList.remove("main__menu__destination__item--active");
    } else {
      selectDestiny[value].classList.add(
        "main__menu__destination__item--active"
      );
    }
  }
};

selectDestiny.moon.addEventListener("click", () => {
  renderData("moon");
});
selectDestiny.mars.addEventListener("click", () => {
  renderData("mars");
});
selectDestiny.europa.addEventListener("click", () => {
  renderData("europa");
});
selectDestiny.titan.addEventListener("click", () => {
  renderData("titan");
});
