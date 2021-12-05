"use strict";

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

function createSkill(element) {
  const skill = createImage(element);
  return skill;
}

function createSocialLink(element) {
  const socialLink = document.createElement("a");
  const socialLinkImage = createImage(element);
  socialLink.setAttribute("href", element.link);
  socialLink.appendChild(socialLinkImage);
  return socialLink;
}

function createListProjects(projects, element) {
  projects.forEach((item) => {
    element.appendChild(createProject(item));
  });
}

function createListSkills(skills, element) {
  skills.forEach(item => {
    element.appendChild(createSkill(item));
  })
}

function createListSocialLinks(socialLinks, element) {
  socialLinks.forEach(item => {
    element.appendChild(createSocialLink(item));
  })
}

function redimension() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    closeLabel.style.display = "none";
    menuLabel.style.display = "none";
    menuList.style.display = "flex";
  } else {
    closeLabel.style.display = "none";
    menuLabel.style.display = "block";
    menuList.style.display = "none";
  }
}

function displaySkills(file, section, callback) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', file);
  xhr.onload = function () {
    let response = xhr.response;
    callback(response.skills, section);
  };
  xhr.send(null);
}

function displayProjects(file, section, callback) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', file);
  xhr.onload = function () {
    let response = xhr.response;
    callback(response.projects, section);
  };
  xhr.send(null);
}

function displaySocialLinks(file, section, callback) {
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', file);
  xhr.onload = function () {
    let response = xhr.response;
    callback(response.socialLinks, section);
  };
  xhr.send(null);
}

const projectSection = document.querySelector(".project-listing");
const skillsSection = document.querySelector("#skills div");
const socialLinksSection = document.querySelector("#social-icons");
const menuLabel = document.querySelector(".about_link__menu");
const closeLabel = document.querySelector(".about_link__close");
const menuList = document.querySelector(".about_link ul");

window.addEventListener('load', event => {
  displaySkills("./public/data/data.json", skillsSection, createListSkills);
  displayProjects("./public/data/data.json", projectSection, createListProjects);
  displaySocialLinks("./public/data/data.json", socialLinksSection, createListSocialLinks);
});

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

window.addEventListener("resize", redimension, false);
