const tempDate = new Date();

const timeOffset = tempDate.getTimezoneOffset()*60*1000;
const currentTimestampUTC = tempDate.getTime() + timeOffset;

const pacificTimeOffset = (tempDate.getTimezoneOffset() - 420)*60*1000;
const currentTimestampPacificTime = tempDate.getTime() + pacificTimeOffset;

const buildTimestampUTC = Number(process.env.BUILD_TIMESTAMP);

module.exports = {
	buildTimestampUTC,

	currentTimestampUTC,
	timeOffset,

	currentTimestampPacificTime,
	pacificTimeOffset,
};