import DepartmentModel from "../Model/DepartmentModel.js";
import EmployeeModel from "../Model/EmployeeModel.js";
import MyDatatable from "../Utils/MyDataTable.js";

export default async function employeeController(root) {
  const res = await fetch("../Views/Employee.html");
  const html = await res.text();
  const content = document.createElement("div");
  content.innerHTML = html;
  root.appendChild(content);
  showDepartment();
  showDataTable();
}

const showDepartment = async () => {
  const cbDepartment = document.getElementById("cbDepartment");
  const res = await DepartmentModel();
  let str = "<option selected disabled value='0'>ເລືອກພະແນກ-ພາກວິຊາ</option>";
  res.forEach((data) => {
    str += `<option value="${data.id}">${data.department}</option>`;
  });
  cbDepartment.innerHTML = str;
};

const showDataTable = async () => {
  const tableData = document.getElementById("tableData");
  const employees = await EmployeeModel();
  let str = "";
  employees.forEach((data, index) => {
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
  MyDatatable("tbEmployee");
};
