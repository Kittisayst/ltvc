import getSheetData from "../api/GoogleAPI.js";

export default async function RespectModel() {
    const res = await getSheetData("1BjW9LW_G7ZMa94-aC3Bfnt1VvjtiDJgzUImhkXawaNI", "tbrespect");
    const data = res.map(([a, b, c]) => {
        return { date: a, teacher: b, status: c };
    });
    return data;
}
