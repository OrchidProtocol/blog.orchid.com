const fs = require('fs');

const rssData = fs.readFileSync(`${__dirname}/public/rss.xml`, {encoding: 'utf-8'});
fs.writeFileSync(`${__dirname}/public/rss`, rssData);



let git_head_data = fs.readFileSync(`${__dirname}/.git/HEAD`, {encoding: 'utf-8'});
git_head_data = git_head_data.split('/');

const current_branch = git_head_data[git_head_data.length-1].split('\n')[0];

const current_branch_hash = fs.readFileSync(`${__dirname}/.git/refs/heads/${current_branch}`, {encoding: 'utf-8'}).split('\n')[0];

fs.writeFileSync(`${__dirname}/public/version.html`, `Deployed Hash: ${current_branch_hash}`);