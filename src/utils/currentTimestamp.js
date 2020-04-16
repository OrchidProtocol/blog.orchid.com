const tempDate = new Date();
const pacificTimeOffset = (tempDate.getTimezoneOffset() - 420)*60*1000;
const currentTimestampPacificTime = Date.now() + pacificTimeOffset;

module.exports = {
	currentTimestampPacificTime,
	pacificTimeOffset
};