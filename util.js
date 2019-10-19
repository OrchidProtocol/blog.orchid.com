const fs = require('fs');
const request = require('request');

async function parseFile (url) {
    try {
        if (url.match(/orchid-ghost-admin.circleclick.com\/content/i) === null) return url;
        path = new URL(url);
        const result = await downloadImage(url);
        return result;
    } catch (e) {
        return url;
    }
}

function downloadImage (url) {
    return new Promise((resolve, reject) => {
        const parsedURL = new URL(url);
        const endResult = `/content${parsedURL.pathname.split('/content')[1]}`;
        const dest = `${__dirname}/public${endResult}`;
        if (fs.existsSync(dest)) {
            resolve(endResult); //file already exists.
            return;
        }

        const directories = parsedURL.pathname.split('/');
        let build = __dirname+'/public';
        debugger;
        directories.forEach(directory => {
            if (directory !== '') {
                build+='/'+directory;
                
                if (!fs.existsSync(build) && !directory.includes('.')) {
                    fs.mkdirSync(build);
                }
            }
        })
        request(url).pipe(fs.createWriteStream(dest)).on('close', () => {resolve(endResult);});
        
    })
}

async function downloadAndReplaceFiles (string) {
    let output = string;
    const matches = string.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g);
    //console.log(matches);
    if (matches === null) return string;

    for (let index = 0; index < matches.length; index++) {
        const url = matches[index];
        const result = await parseFile(url);
        output = output.replace(new RegExp(url, 'g'), result);
    }
    return output;
}


module.exports = {
    downloadAndReplaceFiles: downloadAndReplaceFiles,
}