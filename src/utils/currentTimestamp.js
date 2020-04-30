const tempDate = new Date();

const currentTimestampUTC = tempDate.getTime();
const buildTimestampUTC = Number(process.env.BUILD_TIMESTAMP);

module.exports = {
	buildTimestampUTC,
	currentTimestampUTC,
};