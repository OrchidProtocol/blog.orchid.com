const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function currentYear () {
    const date = new Date();
    return date.getFullYear();
}
function getCustomFormatedDate (timestamp) {
    const date = new Date(timestamp);
    const month = months[date.getMonth()],
        day = date.getDay(),
        year = date.getFullYear();

        return `${month} ${day}, ${year}`;
}

export default getCustomFormatedDate;
