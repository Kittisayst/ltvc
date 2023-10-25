import getSheetData from "../api/GoogleAPI.js";

export default async function WorkinModel() {
    const res = await getSheetData("1BjW9LW_G7ZMa94-aC3Bfnt1VvjtiDJgzUImhkXawaNI", "tbWorkin");
    const data = res.map(([a, b, c, d]) => {
        return { name: a, department: b, date: c, status: d };
    });
    return data;
}
