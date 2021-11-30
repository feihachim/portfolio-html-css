const Portfolio = [
  {
    name: "Testimonials Grid",
    screenshot: "./public/images/Testimonials-Grid-Section-Main.png",
    description: "",
    code: "https://github.com/feihachim/testimonials-grid",
    website: "https://feihachim-testimonials-grid.netlify.app/",
  },
  {
    name: "Calculatrice",
    screenshot: "./public/images/Javascript-calculator.png",
    description: "",
    code: "https://github.com/feihachim/calculator-redux",
    website: "https://feihachim-freecodecamp-calculator.netlify.app/",
  },
  {
    name: "Falsebook",
    screenshot: "./public/images/Falsebook.png",
    description: "",
    code: "https://github.com/feihachim/afpa-falsebook",
    website: "https://feihachim.github.io/afpa-falsebook/",
  },
  {
    name: "NFT Preview Card",
    screenshot: "./public/images/NFT-Preview-Card-Component-Main.png",
    description: "",
    code: "https://github.com/feihachim/nft-preview-card",
    website: "https://feihachim-nft-card.netlify.app/",
  },
  {
    name: "Digital Studio",
    screenshot: "./public/images/Digital-Studio.png",
    description: "",
    code: "https://github.com/feihachim/afpa-digital-studio",
    website: "https://feihachim.github.io/afpa-digital-studio/",
  },
  {
    name: "Product Announcement",
    screenshot: "./public/images/Product-Announcement.png",
    description: "",
    code: "https://github.com/feihachim/afpa-product-announcement",
    website: "https://feihachim.github.io/afpa-product-announcement/",
  },
  {
    name: "Ours",
    screenshot: "./public/images/Ours.png",
    description: "",
    code: "https://github.com/feihachim/afpa-ours-html-css",
    website: "https://feihachim.github.io/afpa-ours-html-css/",
  },
];

const projectSection = document.querySelector(".project-listing");

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
  const paragraph = document.createElement("p");
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

function createProject(element) {
  const project = document.createElement("div");
  project.appendChild(createHeadingThree(element));
  project.appendChild(createImage(element));
  project.appendChild(createParagraph(element));
  project.appendChild(createLinkCode(element));
  project.appendChild(createLinkSite(element));
  return project;
}

function createListProjects(projects, element) {
  projects.forEach((item) => {
    element.appendChild(createProject(item));
  });
}

createListProjects(Portfolio, projectSection);
