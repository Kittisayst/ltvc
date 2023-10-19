import getSheetData from "../api/GoogleAPI.js";

export default async function EmployeeModel() {
  const res = await getSheetData(
    "1dUH5joLJS7z7RYG_slIQrvGedwSVNVnpPuaXdRFplJ0",
    "tbTeacher"
  );
  const data = res.map(([a, b, c, d, e, f, g]) => {
    return {
      id: a,
      name: b,
      department: c,
      phone: d,
      email: e,
      password: f,
      status: g,
    };
  });
  return data;
}
