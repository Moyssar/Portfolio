// create the work object
let worksObject = [
  {
    name: "Corona",
    link: "https://moyssar.github.io/",
    imglink: "images/",
  },
  {
    name: "Blog",
    link: "https://moyssar.github.io/",
    imglink: "images/",
  },
  {
    name: "SpecialTemplate",
    link: "https://moyssar.github.io/",
    imglink: "images/",
  },
  {
    name: "UST",
    link: "https://moyssar.github.io/",
    imglink: "images/",
  },
  {
    name: "Foody",
    link: "https://moyssar.github.io/",
    imglink: "images/",
  },
  {
    name: "NobodysFool",
    link: "https://moyssar.github.io/",
    imglink: "images/",
  },
];
// map on the work object
let worksContainer = document.getElementById("works-container");

worksObject.forEach((work) => {
  worksContainer.innerHTML += `
  <a href="https://moyssar.github.io/${work.name}" class="work">
    <div class="prev-img"><img src="${
      work.imglink + work.name + ".png"
    }" alt="" /></div>
  </a>
  `;
});

// declare the mode toggler icon
let modeToggler = document.querySelector("#mode");

// ******* ******* ******* local srotage
let textColor = localStorage.getItem("text_color");
let grayText = localStorage.getItem("gray_text");
let lightGrayText = localStorage.getItem("light_gray_text");
let mainColor = localStorage.getItem("main_color");
let headerColor = localStorage.getItem("header_color");
let lightBackgroundColor = localStorage.getItem("light_background_color");
let logo = localStorage.getItem("logo_color");
let modeTogglerLocal = localStorage.getItem("toggler");
let sectionColor = localStorage.getItem("section_color");

// check for localstorge values
if (
  textColor !== null ||
  grayText !== null ||
  lightGrayText !== null ||
  mainColor !== null ||
  headerColor !== null ||
  lightBackgroundColor !== null ||
  logo !== null ||
  modeTogglerLocal !== null ||
  sectionColor !== null
) {
  // get stored data
  localStorage.getItem(textColor);
  localStorage.getItem(grayText);
  localStorage.getItem(lightGrayText);
  localStorage.getItem(mainColor);
  localStorage.getItem(headerColor);
  localStorage.getItem(lightBackgroundColor);
  localStorage.getItem(logo);
  localStorage.getItem(modeTogglerLocal);
  localStorage.getItem(sectionColor);
  // apply stored data
  document.documentElement.style.setProperty("--text-color", textColor);
  document.documentElement.style.setProperty("--gray-text", grayText);
  document.documentElement.style.setProperty(
    "--light-gray-text",
    lightGrayText
  );
  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty("--header-color", headerColor);
  document.documentElement.style.setProperty(
    "--light-background-color",
    lightBackgroundColor
  );
  document.documentElement.style.setProperty("--logo", logo);
  document.documentElement.style.setProperty("--section-color", sectionColor);
  modeToggler.setAttribute("class", modeTogglerLocal);
}
// ******* ******* ******* local srotage
modeToggler.addEventListener("click", (e) => {
  e.preventDefault();

  modeToggler.classList.toggle("active");
  if (modeToggler.classList.contains("active")) {
    modeToggler.setAttribute("class", "fa fa-fw fa-sun active");
    modeTogglerLocal = "fa fa-fw fa-sun active";
    // change the body background color to black
    // change the :root css variables values
    document.documentElement.style.setProperty("--text-color", "#888");
    document.documentElement.style.setProperty("--gray-text", "#999");
    document.documentElement.style.setProperty("--light-gray-text", "#999");
    document.documentElement.style.setProperty("--main-color", "#8da26a");
    document.documentElement.style.setProperty("--header-color", "#ccc");
    document.documentElement.style.setProperty(
      "--light-background-color",
      "#151515"
    );
    document.documentElement.style.setProperty("--logo", "#fff");
    document.documentElement.style.setProperty("--section-color", "#000");
    // update data on localstorage
    localStorage.setItem("text_color", "#888");
    localStorage.setItem("gray_text", "#999");
    localStorage.setItem("light_gray_text", "#999");
    localStorage.setItem("main_color", "#8da26a");
    localStorage.setItem("header_color", "#ccc");
    localStorage.setItem("light_background_color", "#151515");
    localStorage.setItem("logo_color", "#fff");
    localStorage.setItem("section_color", "#000");
    localStorage.setItem("toggler", modeTogglerLocal);
  } else {
    modeToggler.setAttribute("class", "fa fa-fw fa-moon");
    modeTogglerLocal = "fa fa-fw fa-moon";
    // change the body background color to black
    // change the :root css variables values
    document.documentElement.style.setProperty("--text-color", "#070613");
    document.documentElement.style.setProperty("--gray-text", "#333");
    document.documentElement.style.setProperty("--light-gray-text", "#666");
    document.documentElement.style.setProperty("--main-color", "#7b8e5d");
    document.documentElement.style.setProperty("--header-color", "#000");
    document.documentElement.style.setProperty(
      "--light-background-color",
      "#ddddde"
    );
    document.documentElement.style.setProperty("--logo", "#000");
    document.documentElement.style.setProperty("--section-color", "#fff");
    // update data on localstorage
    localStorage.setItem("text_color", "#070613");
    localStorage.setItem("gray_text", "#333");
    localStorage.setItem("light_gray_text", "#666");
    localStorage.setItem("main_color", "#7b8e5d");
    localStorage.setItem("header_color", "#000");
    localStorage.setItem("light_background_color", "#ddddde");
    localStorage.setItem("logo_color", "#000");
    localStorage.setItem("section_color", "#fff");
    localStorage.setItem("toggler", modeTogglerLocal);
  }
});
