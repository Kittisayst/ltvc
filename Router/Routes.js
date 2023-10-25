import employeeController from "../Controller/employeeController.js";
import homeController from "../Controller/homeController.js";
import navbarController from "../Controller/navbarController.js";
import relationshipController from "../Controller/relationshipController.js";
import respectController from "../Controller/respectController.js";
import workinController from "../Controller/workinController.js";
import workweekController from "../Controller/workweekController.js";
const root = document.getElementById("root");
const parm = window.location.search;
const url = new URLSearchParams(parm);
const page = url.get("page");

export default function Routes() {
  if (page) {
    setRoutes(page);
  } else {
    window.location.href = "?page=home";
  }
}

//ກຳນົດ Router
const setRoutes = async () => {
  await navbarController(root);
  switch (page) {
    case "home":
      homeController(root);
      break;
    case "employee":
      employeeController(root);
      break;
    case "respect":
      respectController(root);
      break;
    case "relationship":
      relationshipController(root);
      break;
    case "workweek":
      workweekController(root);
      break;
    case "workin":
      workinController(root);
      break;
    default:
      root.innerHTML = "Page not found";
      break;
  }
};
