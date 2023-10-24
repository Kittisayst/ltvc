import WebsiteModel from "../Model/WebsiteModel.js";

export default async function homeController(root) {
  const html = await fetch("../Views/home.html");
  const content = document.createElement("div");
  content.innerHTML = await html.text();
  root.appendChild(content);
  showWebsite();
}

const showWebsite = async () => {
  const content = document.getElementById("website");
  const res = await loadWebsite();
  let str = "";
  res.forEach((data) => {
    str += `
    <a href="${data.link}" class="border rounded nav-link py-4 px-5 webcardbg col-12 col-xl-3">
    <img src="${data.icon}" width="40px"/>
    <span class="text-white">${data.website}</span>
    </a>
    `;
  });
  content.innerHTML = str;
};

const loadWebsite = async () => {
  setTimeout(() => {
    sessionStorage.removeItem("website");
  }, 1000);
  const website = sessionStorage.getItem("website");
  if (website) {
    return JSON.parse(sessionStorage.getItem("website"));
  } else {
    const res = await WebsiteModel();
    sessionStorage.setItem("website", JSON.stringify(res));
    return res;
  }
}
