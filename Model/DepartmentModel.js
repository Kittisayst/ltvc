import getSheetData from "../api/GoogleAPI.js";

export default async function DepartmentModel() {
    const res = await getSheetData("1dUH5joLJS7z7RYG_slIQrvGedwSVNVnpPuaXdRFplJ0", "tbDepartment");
    const data = res.map(([a, b]) => {
        return { id: a, department: b }
    });
    return data;
}