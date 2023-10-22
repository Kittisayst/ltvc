import DepartmentModel from "../Model/DepartmentModel.js";
import EmployeeModel from "../Model/EmployeeModel.js";
import RespectModel from "../Model/RespectModel.js";
import { MyDatatabLength } from "../Utils/MyDataTable.js";
import { formatDate } from "../Utils/MyFormat.js";

let isDatable = false;
let employess;


export default async function respectController(root) {
    const res = await fetch("../Views/Respect.html");
    const html = await res.text();
    const content = document.createElement("div");
    content.innerHTML = html;
    root.appendChild(content);
    const textDate = document.getElementById("txtdate");
    var currentDate = new Date();
    textDate.value = currentDate.toISOString().split("T")[0];
    showDepartment();
    employess = await EmployeeModel();
    showDataTable("");
    handelSubmit();
}

const showDepartment = async () => {
    const cbDepartment = document.getElementById("cbDepartment");
    const res = await DepartmentModel();
    let str = "<option selected disabled value=''>ເລືອກພະແນກ-ພາກວິຊາ</option>";
    res.forEach((data) => {
        str += `<option value="${data.department}">${data.department}</option>`;
    });
    cbDepartment.innerHTML = str;
    // cbDepartment.addEventListener("change", (e) => {
    //     showDataTable(e.target.value);
    // });
};

const handelSubmit = () => {
    const frmsearch = document.getElementById("frmsearch");
    const cbDepartment = document.getElementById("cbDepartment");
    frmsearch.addEventListener("submit", (e) => {
        e.preventDefault();
        showDataTable(cbDepartment.value);
    });
}

const showDataTable = async (dpmName) => {
    const tableData = document.getElementById("tableData");
    let filterEmployee = dpmName == "" ? employess : employess.filter(data => data.department === dpmName);
    let str = "";
    try {
        for (let i = 0; i < filterEmployee.length; i++) {
            const data = filterEmployee[i];
            str += `
            <tr>
                <th scope="row" class="text-center">${i + 1}</th>
                <td>${data.name}</td>
                <td>${data.department}</td>
                <td class="text-center"><span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...</td>
            </tr>
            `;
        }
        tableData.innerHTML = str;
        loadRespect(dpmName);
    } catch (error) {
        console.log(error);
    } finally {
        if (isDatable == false) {
            MyDatatabLength("tbEmployee", -1);
            isDatable = true;
        }
    }
};

const loadRespect = async (dpmName) => {
    const textDate = document.getElementById("txtdate");
    const dataSelect = formatDate(textDate.value);
    const respectDatas = await RespectModel();
    const table = document.getElementById("tbEmployee");
    let filterEmployee = dpmName == "" ? employess : employess.filter(data => data.department === dpmName);
    console.log(filterEmployee);
    for (let i = 0; i < filterEmployee.length; i++) {
        const data = filterEmployee[i];
        var cell = table.rows[i + 1].cells[3];
        const res = respectDatas.find(respect => respect.teacher == data.name && respect.date == dataSelect);
        if (res) {
            cell.innerHTML = RespectStatus(res.status);
        } else {
            cell.innerHTML = `<span class="badge rounded-pill bg-secondary w-50">ຍັງບໍ່ບັນທຶກ</span>`;
        }
    }
}

const RespectStatus = (status) => {
    if (status == 0) {
        return `<span class="badge rounded-pill bg-danger w-50">ຂາດ</span>`;
    } else if (status == 1) {
        return `<span class="badge rounded-pill bg-warning text-dark w-50">ຄອບ</span>`;
    } else if (status == 2) {
        return `<span class="badge rounded-pill bg-success w-50">ມາ</span>`;
    } else {
        return `<span class="badge rounded-pill bg-secondary w-50">ຜິດພາດ</span>`;
    }
}
