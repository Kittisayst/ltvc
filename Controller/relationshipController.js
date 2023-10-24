import RelationshipModel from "../Model/RelationshipModel.js";
import { MyDatatabLength } from "../Utils/MyDataTable.js";

let isDatable = false;
let relationships;

export default async function relationshipController(root) {
    const res = await fetch("../Views/Reactionship.html");
    const html = await res.text();
    const content = document.createElement("div");
    content.innerHTML = html;
    root.appendChild(content);
    relationships = await RelationshipModel();
    showDataTable("");
}

const showDataTable = async (search) => {
    const tableData = document.getElementById("tableData");
    let filterRelationship = search == "" ? relationships : relationships.filter(data => data.name === search);
    let str = "";
    try {
        for (let i = 0; i < filterRelationship.length; i++) {
            const data = filterRelationship[i];
            str += `
            <tr>
                <th scope="row" class="text-center">${i + 1}</th>
                <td>${data.name}</td>
                <td class="text-center">${Relationtype(data.type)}</td>
                <td class="text-center">${data.year}</td>
            </tr>
            `;
        }
        tableData.innerHTML = str;
    } catch (error) {
        console.log(error);
    } finally {
        if (isDatable == false) {
            MyDatatabLength("tbRelationship", -1);
            isDatable = true;
        }
    }
};

const Relationtype = (type) => {
    return type == 0 ? `<span class="badge rounded-pill bg-primary">ພາຍໃນປະເທດ</span>` : `<span class="badge rounded-pill bg-success">ຕ່າງປະເທດ</span>`;
}
