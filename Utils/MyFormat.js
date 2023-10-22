const formatDate = (dateValue) => {
    var parts = dateValue.split("-");
    var year = parts[0];
    var month = parts[1];
    var day = parts[2];
    return `${day}/${month}/${year}`;
}

export { formatDate };