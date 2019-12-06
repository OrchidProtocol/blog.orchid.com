const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function currentYear () {
    const date = new Date();
    return date.getFullYear();
}
export function getCustomFormatedDate (timestamp) {
    const date = new Date(timestamp);
    const month = months[date.getMonth()],
        day = date.getDate(),
        year = date.getFullYear();

        return `${month} ${day}, ${year}`;
}

export default getCustomFormatedDate;
