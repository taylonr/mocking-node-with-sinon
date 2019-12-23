const {readdirSync, readFileSync, unlinkSync, writeFileSync} = require('fs');

module.exports = {
    createFile: filename => {
        return writeFileSync(`./data/${filename}`, "");
    },
    deleteFile: filename => {
        return unlinkSync(`./data/${filename}`);
    },
    getFile: filename => {
        return readFileSync(`./data/${filename}`);
    },
    getAllFiles: () => {
        return readdirSync("./data");
    },
    saveFile: (filename, contents) => {
        return writeFileSync(`./data/${filename}`, contents);
    },
}