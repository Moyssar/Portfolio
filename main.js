// create the work object
let worksObject = [
  {
    name: "Blog",
    link: "https://moyssar.github.io/",
    imglink: "images/",
    // worklink:"",
  },
  {
    name: "Corona",
    link: "https://moyssar.github.io/",
    imglink: "images/",
    // worklink:"",
  },
  {
    name: "Foody",
    link: "https://moyssar.github.io/",
    imglink: "images/",
    // worklink:"",
  },
  {
    name: "NobodysFool",
    link: "https://moyssar.github.io/",
    imglink: "images/",
    // worklink:"",
  },
  {
    name: "SpecialTemplate",
    link: "https://moyssar.github.io/",
    imglink: "images/",
    // worklink:"",
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
