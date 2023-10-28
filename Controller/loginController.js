export default async function loginController(root) {
    const res = await fetch("../Views/Login.html");
    const html = await res.text();
    const content = document.createElement("div");
    content.innerHTML = html;
    root.appendChild(content);
}
