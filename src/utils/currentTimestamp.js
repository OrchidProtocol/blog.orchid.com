const tempDate = new Date();

const currentTimestampUTC = tempDate.getTime();
let buildTimestampUTC = Number(process.env.BUILD_TIMESTAMP);
if (buildTimestampUTC === NaN) buildTimestampUTC = Date.now();
module.exports = {
	buildTimestampUTC,
	currentTimestampUTC,
};