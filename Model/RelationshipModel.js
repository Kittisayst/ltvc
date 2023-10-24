import getSheetData from "../api/GoogleAPI.js";

export default async function RelationshipModel() {
    const res = await getSheetData("1dUH5joLJS7z7RYG_slIQrvGedwSVNVnpPuaXdRFplJ0", "tb_Reactionship");
    const data = res.map(([a, b, c, d, e, f]) => {
        return { id: a, name: b, loaction: c, type: d, year: e, status: f };
    });
    return data;
}
