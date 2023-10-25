import getSheetData from "../api/GoogleAPI.js";

export default async function EmployeeModel() {
  const res = await getSheetData(
    "1dUH5joLJS7z7RYG_slIQrvGedwSVNVnpPuaXdRFplJ0",
    "tbTeacher"
  );
  const data = res.map(([a, b, c, d, e, f, g, h, i]) => {
    return {
      id: a,
      name: b,
      position: c,
      department: d,
      phone: e,
      email: f,
      password: g,
      rule: h,
      status: i,
    };
  });
  return data;
}
