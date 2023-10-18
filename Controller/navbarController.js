export default async function navbarController(root) {
  const res = await fetch("../Views/navbar.html");
  const html = await res.text();
  const content = document.createElement("div");
  content.innerHTML = html;
  root.appendChild(content);
}
