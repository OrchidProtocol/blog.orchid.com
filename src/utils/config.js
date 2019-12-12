
const defaultConfig = require('./config.en');
const targetConfig = require(`./config.${process.env.GATSBY_TARGET_LANG}`);

const config = Object.assign(defaultConfig, targetConfig);


export default config;