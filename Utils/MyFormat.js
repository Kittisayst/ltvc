const formatDate = (dateValue) => {
    var parts = dateValue.split("-");
    var year = parts[0];
    var month = parts[1];
    var day = parts[2];
    return `${day}/${month}/${year}`;
}

const formatDateData = (date) => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    // Format the date as "day/month/year"
    var formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
}

const formatSplitDate = (date) => {
    // Split the string into day, month, and year parts
    var parts = date.split('/');
    // Rearrange the parts to the desired format
    var outputString = parts[1] + '/' + parts[0] + '/' + parts[2];
    return outputString;
}

const getDayNow = () => {
    const date = new Date();
    var day = date.getDate();
    return day;
}

const getMonthNow = () => {
    const date = new Date();
    var month = date.getMonth() + 1;
    return month;
}

const getYearNow = () => {
    const date = new Date();
    var year = date.getFullYear();
    return year;
}

export { formatDate, formatDateData, formatSplitDate, getDayNow, getMonthNow, getYearNow };