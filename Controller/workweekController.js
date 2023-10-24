import WorkweekModel from "../Model/WorkweekModel.js";
import { MyDatatabLength } from "../Utils/MyDataTable.js";
import { formatDateData, formatSplitDate } from "../Utils/MyFormat.js";

let isDatable = false;
let workweeks;

export default async function workweekController(root) {
    const res = await fetch("../Views/Workweek.html");
    const html = await res.text();
    const content = document.createElement("div");
    content.innerHTML = html;
    root.appendChild(content);
    workweeks = await WorkweekModel();
    showDataTable("");
}

const showDataTable = async (search) => {
    const tableData = document.getElementById("tableData");
    let filterWorkweek = search == "" ? workweeks : workweeks.filter(data => data.name === search);
    let str = "";
    try {
        for (let i = 0; i < filterWorkweek.length; i++) {
            const data = filterWorkweek[i];
            const date = formatSplitDate(data.startdate);
            const numDay = countDay(date);
            str += `
            <tr>
                <th scope="row" class="text-center">${i + 1}</th>
                <td>${data.worklist}</td>
                <td>${data.department}</td>
                <td class="w-10">
                    <span class="d-flex justify-content-center gap-2">
                    <span>${data.startdate}</span>
                    <span class="badge bg-info py-2 shadow-sm text-dark">${numDay} ມື້</span>
                    </span>
                </td>
                <td class="text-center">${workweekType(data.status)}</td>
            </tr>
            `;
        }

        tableData.innerHTML = str;
    } catch (error) {
        console.log(error);
    } finally {
        if (isDatable == false) {
            MyDatatabLength("tbworkweek", 25);
            isDatable = true;
        }
    }
};

const workweekType = (type) => {
    if (type == 0) {
        return `<span class="badge rounded-pill bg-warning text-dark w-50">ກຳລັງດຳເນີນ</span>`;
    } else if (type == 1) {
        return `<span class="badge rounded-pill bg-primary w-50">ມອບໝາຍ</span>`;
    } else if (type == 2) {
        return `<span class="badge rounded-pill bg-success w-50">ສຳເລັດ</span>`;
    }
}

const countDay = (day) => {
    // Define the start date
    var startDate = new Date(day);

    // Define the end date
    const datenow = formatDateData(new Date());
    var endDate = new Date(datenow);

    // Calculate the time difference in milliseconds
    var timeDiff = endDate.getTime() - startDate.getTime();

    // Convert the time difference from milliseconds to days
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysDiff;
}
