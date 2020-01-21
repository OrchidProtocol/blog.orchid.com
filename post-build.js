const fs = require('fs');

const rssData = fs.readFileSync(`${__dirname}/public/rss.xml`, {encoding: 'utf-8'});
fs.writeFileSync(`${__dirname}/public/rss`, rssData);