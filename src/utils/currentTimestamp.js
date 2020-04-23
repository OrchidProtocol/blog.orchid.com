const tempDate = new Date();
const timeOffset = tempDate.getTimezoneOffset()*60*1000;
const currentTimestampUTC = tempDate.getTime() + timeOffset;

const pacificTimeOffset = (tempDate.getTimezoneOffset() - 420)*60*1000;
const currentTimestampPacificTime = tempDate.getTime() + pacificTimeOffset;

module.exports = {
	currentTimestampUTC,
	timeOffset,

	currentTimestampPacificTime,
	pacificTimeOffset,
};