const key =
  "AKfycbzkRT_iLj0wjmjIqfxqz-3eJ1pgmW3j6E5A9OZ2XTAmhRXxZ_n3W8p23XNBQUNjb-C8Jg";
const url = "https://script.google.com/macros/s/" + key + "/exec";

const getSheetData = async (sheetkey, sheetname) => {
  const res = await fetch(url + `?skey=${sheetkey}&sname=${sheetname}`);
  return res.json();
};

export default getSheetData;
