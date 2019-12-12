/*
    This script sets up the environment variables at build time which tell gatsby which language we'll be building into.
    
    If an environment variable starts with "GATSBY_" it will show up in production JS as well
*/

const fs = require('fs')

fs.writeFileSync('./.env.development', `GATSBY_TARGET_LANG=${process.env.TARGET_LANG}`);
fs.writeFileSync('./.env.production', `GATSBY_TARGET_LANG=${process.env.TARGET_LANG}`);