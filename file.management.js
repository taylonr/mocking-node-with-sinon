const {
  readdir,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync
} = require("fs");
const util = require("util");

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
  createFileSafe: filename => {
    if (!filename) {
      throw new Error("Must supply file name");
    }

    try {
      const result = writeFileSync(`./data/${filename}`, "", { flag: "wx" });
    } catch (error) {
      const files = readdirSync("./data");
      const [name, extension] = filename.split(".");

      let max =
        files
          .filter(f => f.match(/test[1-9]/))
          .map(f => Number(f.replace(name, "").replace(`.${extension}`, "")))
          .sort()
          .pop() || 0;

      const newName = `${name}${++max}.${extension}`;
      writeFileSync(`./data/${newName}`, "", { flag: "wx" });
    }
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
  getAllFiles: cb => {
    readdir("./data", cb);
  },
  getAllFilesPromise: () => {
    const readPromise = util.promisify(readdir);
    return readPromise("./data");
  },
  saveFile: (filename, contents) => {
    if (!filename) {
      throw new Error("Must supply file name");
    }

    return writeFileSync(`./data/${filename}`, contents);
  }
};
