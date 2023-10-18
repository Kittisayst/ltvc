import getSheetData from "../api/GoogleAPI.js";

export default async function WebsiteModel() {
  const result = await getSheetData(
    "1dUH5joLJS7z7RYG_slIQrvGedwSVNVnpPuaXdRFplJ0",
    "tbWebsite"
  );
  const data = result.map(([a, b, c]) => {
    return { website: a, link: b, icon: c };
  });
  return data;
}
