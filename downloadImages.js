const downloadAndReplaceFiles = require('./util').downloadAndReplaceFiles;

const fs = require('fs');


async function search (directory, base) {
    for (let index = 0; index < directory.length; index++) {
        const item = directory[index];
        if (fs.lstatSync(`${base}/${item}`).isDirectory()) {
            search(fs.readdirSync(`${base}/${item}`), `${base}/${item}`);
        } else if (item.includes('.html') || item.includes('.json') || item.includes('.js') || item.includes('.svg') || item.includes('.xml')) {
            let contents = fs.readFileSync(`${base}/${item}`, 'utf8');
                if (typeof contents === "string") {
                contents = await downloadAndReplaceFiles(contents);
                setTimeout(()=>{
                    fs.writeFileSync(`${base}/${item}`, contents);
                }, 1000)
            }
            
        }
    }
}

console.log("Downloading external files...");
search(fs.readdirSync(`${__dirname}/public`), `${__dirname}/public`);

