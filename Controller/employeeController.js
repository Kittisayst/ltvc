import DepartmentModel from "../Model/DepartmentModel.js";
import EmployeeModel from "../Model/EmployeeModel.js";
import MyDatatable from "../Utils/MyDataTable.js";

let isDatable = false;
let employess;

export default async function employeeController(root) {
  const res = await fetch("../Views/Employee.html");
  const html = await res.text();
  const content = document.createElement("div");
  content.innerHTML = html;
  root.appendChild(content);
  showDepartment();
  employess = await EmployeeModel();
  showDataTable("");
}

const showDepartment = async () => {
  const cbDepartment = document.getElementById("cbDepartment");
  const res = await DepartmentModel();
  let str = "<option selected disabled value='0'>ເລືອກພະແນກ-ພາກວິຊາ</option>";
  res.forEach((data) => {
    str += `<option value="${data.department}">${data.department}</option>`;
  });
  cbDepartment.innerHTML = str;
  cbDepartment.addEventListener("change", (e) => {
    showDataTable(e.target.value);
  });
};

const showDataTable = async (dpmName) => {
  let filterEmployee = dpmName == "" ? employess : employess.filter(data => data.department === dpmName);
  const tableData = document.getElementById("tableData");
  let str = "";
  try {
    filterEmployee.forEach((data, index) => {
      str += `
          <tr>
              <th scope="row" class="text-center">${index + 1}</th>
              <td>${data.name}</td>
              <td>${data.department}</td>
              <td>${data.email}</td>
          </tr>
          `;
    });
    tableData.innerHTML = str;
  } catch (error) {
    console.log(error);
  } finally {
    if (isDatable == false) {
      MyDatatable("tbEmployee");
      console.log("false");
      isDatable = true;
    }
  }
};
