import getSheetData from "../api/GoogleAPI.js";

export default async function WorkweekModel() {
    const res = await getSheetData("1dUH5joLJS7z7RYG_slIQrvGedwSVNVnpPuaXdRFplJ0", "tb_Workweek");
    const data = res.map(([a, b, c, d, e]) => {
        return { worklist: a, department: b, startdate: c, enddate: d, status: e };
    });
    return data;
}
