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
