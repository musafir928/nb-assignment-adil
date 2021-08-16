const fs = require('fs')

module.exports.removeFile = path => {
    return new Promise((resolve, reject) => {

        if (fs.existsSync(path)) {
            console.warn('custom data reset')
            fs.unlinkSync(path);
            resolve();
        } else {
            resolve()
        }
        reject();
    })
}

module.exports.readFromFile = path => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data));
            }
        })
    })
}

module.exports.saveDataAsJson = (path, customData) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, customData, err => {
            if (err) {
                reject(err);
            }
            resolve();
        })
    })
}