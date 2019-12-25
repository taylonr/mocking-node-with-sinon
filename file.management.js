const { readdirSync, readFileSync, unlinkSync, writeFileSync } = require("fs");

module.exports = {
  createFile: filename => {
    if (!filename) {
      throw new Error("Must supply file name");
    }

    return writeFileSync(`./data/${filename}`, "", { flag: "wx" });
  },
  createFileInjected: (filename, fs) => {
    if (!filename) {
      throw new Error("Must supply file name");
    }

    return fs.writeFileSync(`./data/${filename}`, "", { flag: "wx" });
  },
  deleteFile: filename => {
    if (!filename) {
      throw new Error("Must supply file name");
    }

    return unlinkSync(`./data/${filename}`);
  },
  getFile: filename => {
    if (!filename) {
      throw new Error("Must supply file name");
    }

    return readFileSync(`./data/${filename}`);
  },
  getAllFiles: () => {
    return readdirSync("./data");
  },
  saveFile: (filename, contents) => {
    if (!filename) {
      throw new Error("Must supply file name");
    }

    return writeFileSync(`./data/${filename}`, contents);
  }
};
