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
  moon: document?.getElementById("moon"),
  mars: document?.getElementById("mars"),
  europa: document?.getElementById("europa"),
  titan: document?.getElementById("titan")
};

const editData = {
  title: document?.getElementById("destiny_name"),
  role: document?.getElementById("destiny_role"),
  info: document?.getElementById("destiny_info"),
  distance: document?.getElementById("destiny_distance"),
  time: document?.getElementById("destiny_time"),
  image: document?.getElementById("planet_imagen")
};

const dataDestiny = {
  moon: "",
  mars: "",
  europa: "",
  titan: ""
};

const dataCrew = {
  one: "",
  two: "",
  three: "",
  four: ""
};

getData().then(({ destinations, crew }) => {
  dataDestiny.moon = destinations[0];
  dataDestiny.mars = destinations[1];
  dataDestiny.europa = destinations[2];
  dataDestiny.titan = destinations[3];

  dataCrew.one = crew[0];
  dataCrew.two = crew[1];
  dataCrew.three = crew[2];
  dataCrew.four = crew[3];
});

// Select Destiny
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

if (selectDestiny.moon) {
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
}

// Select Crew
const selectCrew = document.getElementsByClassName(
  "main__container__selector__item"
);

const renderDataCrew = (value) => {
  editData.title.innerText = dataCrew[value].name;
  editData.role.innerText = dataCrew[value].role;
  editData.info.innerText = dataCrew[value].bio;
  editData.image.setAttribute("src", dataCrew[value].images.png);

  for (let i = 0; i <= 3; i++) {
    if (selectCrew[i].getAttribute("id") !== value) {
      selectCrew[i].classList.remove("main__container__selector__item--active");
    } else {
      selectCrew[i].classList.add("main__container__selector__item--active");
    }
  }
};

for (let crew of selectCrew) {
  crew.addEventListener("click", (e) => {
    renderDataCrew(crew.getAttribute("id"));
  });
}
