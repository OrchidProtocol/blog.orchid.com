const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const tempDate = new Date();
const pacificTimeOffset = (tempDate.getTimezoneOffset() - 420)*60*1000; //Pacific time offest
export const currentTimestampPacificTime = Date.now() + pacificTimeOffset;

export function currentYear () {
    const date = new Date();
    return date.getFullYear();
}

export function getCustomFormatedDateEN (timestamp) {
    const date = new Date(timestamp + pacificTimeOffset);
    const month = months[date.getMonth()],
        day = date.getDate(),
        year = date.getFullYear();

    return `${month} ${day}, ${year}`;
}
export function getCustomFormatedDateKO (timestamp) {
    const date = new Date(timestamp + pacificTimeOffset);
    const month = date.getMonth()+1,
        day = date.getDate(),
        year = date.getFullYear();

    return `${year}년 ${month}월 ${day}일`;
}
export function getCustomFormatedDateJA (timestamp) {
    const date = new Date(timestamp + pacificTimeOffset);
    const month = date.getMonth()+1,
        day = date.getDate(),
        year = date.getFullYear();

    return `${year}年 ${month}月 ${day}日`;
}
export function getCustomFormatedDateZH (timestamp) {
    const date = new Date(timestamp + pacificTimeOffset);
    const month = date.getMonth()+1,
        day = date.getDate(),
        year = date.getFullYear();

    return `${year}年 ${month}月 ${day}日`;
}

let getCustomFormatedDate = getCustomFormatedDateEN;
switch (process.env.GATSBY_TARGET_LANG) {
    case 'ja':
        getCustomFormatedDate = getCustomFormatedDateJA;
    break;
    case 'ko':
        getCustomFormatedDate = getCustomFormatedDateKO;
    break;
    case 'zh':
        getCustomFormatedDate = getCustomFormatedDateZH;
    break;
    default: 
        getCustomFormatedDate = getCustomFormatedDateEN;
    break;
}

export default getCustomFormatedDate;
