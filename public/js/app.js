"use strict";

function createHeadingThree(element) {
  const heading = document.createElement("h3");
  heading.textContent = element.name;
  return heading;
}

function createImage(element,folder) {
  const image = document.createElement("img");
  const screenshot=`${folder}/${element.screenshot}`;
  image.setAttribute("src", screenshot);
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
  link.setAttribute("target","_blank");
  return link;
}

function createLinkSite(element) {
  const link = document.createElement("a");
  link.textContent = "Site web";
  link.setAttribute("href", element.website);
  link.setAttribute("target","_blank");
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

function createProject(element,folder) {
  const project = document.createElement("div");
  project.classList.add("project-element");
  project.appendChild(createHeadingThree(element));
  project.appendChild(createImage(element,folder));
  project.appendChild(createParagraph(element));
  project.appendChild(createUl(element));
  return project;
}

function createListProjects(projects, element,folder=imagesFolder) {
  projects.forEach((item) => {
    element.appendChild(createProject(item,folder));
  });
}

function createListSkills(skills,element,folder=iconsFolder){
  skills.forEach((item)=>{
    element.appendChild(createImage(item,folder));
  });
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

const imagesFolder = "./public/images";
const iconsFolder = "./public/icons";
let data;

const projectSection = document.querySelector(".project-listing");
const skillsSection = document.querySelector("#skills div");
const skillsListing = document.querySelector(".skill-listing");
const menuLabel = document.querySelector(".about_link__menu");
const closeLabel = document.querySelector(".about_link__close");
const menuList = document.querySelector(".about_link ul");

let xhr = new XMLHttpRequest();
xhr.open("GET",'./public/data/data.json');
xhr.responseType = 'json';
xhr.send();

xhr.onload = function(){
  if(xhr.status != 200){
    alert(`Error ${xhr.status}:${xhr.statusText}`);
  }
  else{
    data = xhr.response;
    createListSkills(data.skills,skillsListing);
    createListProjects(data.projects, projectSection);
  }
};

xhr.onerror = function(){
  alert('Request fauled!');
};

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
