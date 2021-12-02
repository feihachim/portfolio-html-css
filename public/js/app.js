const portfolio = [
  {
    name: "Testimonials Grid",
    screenshot: "./public/images/Testimonials-Grid-Section-Main.png",
    description:
      "Recueil de témoignages d'anciens étudiants en informatique représenté sous forme de grille.",
    code: "https://github.com/feihachim/testimonials-grid",
    website: "https://feihachim-testimonials-grid.netlify.app/",
  },
  {
    name: "Calculatrice",
    screenshot: "./public/images/Javascript-calculator.png",
    description:
      "Calculatrice qui effectue les 4 opérations sur les nombres entiers et décimaux. Projet réalisé avec Reactjs et Redux.",
    code: "https://github.com/feihachim/calculator-redux",
    website: "https://feihachim-freecodecamp-calculator.netlify.app/",
  },
  {
    name: "Falsebook",
    screenshot: "./public/images/Falsebook.png",
    description: "Prototype du site de facebook.",
    code: "https://github.com/feihachim/afpa-falsebook",
    website: "https://feihachim.github.io/afpa-falsebook/",
  },
  {
    name: "NFT Preview Card",
    screenshot: "./public/images/NFT-Preview-Card-Component-Main.png",
    description: "Prévisualisation d'une carte NFT avec overlay de l'image.",
    code: "https://github.com/feihachim/nft-preview-card",
    website: "https://feihachim-nft-card.netlify.app/",
  },
  {
    name: "Digital Studio",
    screenshot: "./public/images/Digital-Studio.png",
    description: "Page d'une plateforme fictive de services en informatique.",
    code: "https://github.com/feihachim/afpa-digital-studio",
    website: "https://feihachim.github.io/afpa-digital-studio/",
  },
  {
    name: "Product Announcement",
    screenshot: "./public/images/Product-Announcement.png",
    description: "Page vitrine d'un annoncement d'un produit fictif.",
    code: "https://github.com/feihachim/afpa-product-announcement",
    website: "https://feihachim.github.io/afpa-product-announcement/",
  },
  {
    name: "Ours",
    screenshot: "./public/images/Ours.png",
    description: "Tête d'animal réalisé en CSS et HTML.",
    code: "https://github.com/feihachim/afpa-ours-html-css",
    website: "https://feihachim.github.io/afpa-ours-html-css/",
  },
];

const projectSection = document.querySelector(".project-listing");
const skillsSection = document.querySelector("#skills div");
const menuLabel = document.querySelector(".about_link__menu");
const closeLabel = document.querySelector(".about_link__close");
const menuList = document.querySelector(".about_link ul");

function createHeadingThree(element) {
  const heading = document.createElement("h3");
  heading.textContent = element.name;
  return heading;
}

function createImage(element) {
  const image = document.createElement("img");
  image.setAttribute("src", element.screenshot);
  image.setAttribute("alt", element.name);
  return image;
}

function createParagraph(element) {
  const paragraph = document.createElement("div");
  paragraph.classList.add("paragraph");
  paragraph.textContent = element.description;
  return paragraph;
}

function createLinkCode(element) {
  const link = document.createElement("a");
  link.textContent = "Code Source";
  link.setAttribute("href", element.code);
  return link;
}

function createLinkSite(element) {
  const link = document.createElement("a");
  link.textContent = "Site web";
  link.setAttribute("href", element.website);
  return link;
}

function createUl(element) {
  const ul = document.createElement("ul");
  const liCode = document.createElement("li");
  const liSite = document.createElement("li");
  liCode.appendChild(createLinkCode(element));
  liSite.appendChild(createLinkSite(element));
  ul.appendChild(liCode);
  ul.appendChild(liSite);
  return ul;
}

function createProject(element) {
  const project = document.createElement("div");
  project.classList.add("project-element");
  project.appendChild(createHeadingThree(element));
  project.appendChild(createImage(element));
  project.appendChild(createParagraph(element));
  project.appendChild(createUl(element));
  return project;
}

function createListProjects(projects, element) {
  projects.forEach((item) => {
    element.appendChild(createProject(item));
  });
}

createListProjects(portfolio, projectSection);

menuLabel.addEventListener("click", (event) => {
  closeLabel.style.display = "block";
  menuLabel.style.display = "none";
  menuList.style.display = "flex";
});

closeLabel.addEventListener("click", (event) => {
  menuLabel.style.display = "block";
  closeLabel.style.display = "none";
  menuList.style.display = "none";
});
