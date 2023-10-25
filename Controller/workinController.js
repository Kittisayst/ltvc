import DepartmentModel from "../Model/DepartmentModel.js";
import WorkinModel from "../Model/WorkinModel.js";
import { MyDatatabLength } from "../Utils/MyDataTable.js";
import { getMonthNow, getYearNow } from "../Utils/MyFormat.js";

let isDatable = false;
let workins;

export default async function workinController(root) {
    const res = await fetch("../Views/Workin.html");
    const html = await res.text();
    const content = document.createElement("div");
    content.innerHTML = html;
    root.appendChild(content);
    const year = document.getElementById("year");
    const month = document.getElementById("month");
    year.value = getYearNow();
    month.value = getMonthNow();
    workins = await WorkinModel();
    showDepartment();
    showDataTable("");
    handelSubmit();
}

const handelSubmit = () => {
    const frmsearch = document.getElementById("frmsearch");
    const cbDepartment = document.getElementById("cbDepartment");
    frmsearch.addEventListener("submit", (e) => {
        e.preventDefault();
        showDataTable(cbDepartment.value);
    });
}

const showDataTable = async (search) => {
    const tableData = document.getElementById("tableData");
    let filterWorkin = search == "" ? workins : workins.filter(data => data.department === search);
    let str = "";
    try {
        for (let i = 0; i < filterWorkin.length; i++) {
            const data = filterWorkin[i];
            str += `
            <tr>
                <th scope="row" class="text-center">${i + 1}</th>
                <td>${data.name}</td>
                <td>${data.department}</td>
                <td class="w-10 text-center">${data.date}</td>
                <td class="text-center">${workinType(data.status)}</td>
            </tr>
            `;
        }

        tableData.innerHTML = str;
    } catch (error) {
        console.log(error);
    } finally {
        if (isDatable == false) {
            MyDatatabLength("tbWorkin", 25);
            isDatable = true;
        }
    }
};

const showDepartment = async () => {
    const cbDepartment = document.getElementById("cbDepartment");
    const res = await DepartmentModel();
    let str = "<option selected disabled value=''>ເລືອກພະແນກ-ພາກວິຊາ</option>";
    res.forEach((data) => {
        str += `<option value="${data.department}">${data.department}</option>`;
    });
    cbDepartment.innerHTML = str;
};

const workinType = (type) => {
    if (type == 0) {
        return `<span class="badge rounded-pill bg-danger text-dark w-50 text-white">ຂາດ</span>`;
    } else if (type == 1) {
        return `<span class="badge rounded-pill bg-warning w-50">ຄອບ</span>`;
    } else if (type == 2) {
        return `<span class="badge rounded-pill bg-success w-50">ມາ</span>`;
    }
}
