const { expect } = require("chai");
const { createSandbox, spy } = require("sinon");
const fs = require("fs");
const fileManagement = require("./file.management");

describe("File Management", () => {
  const sandbox = createSandbox();

  beforeEach(() => {});

  afterEach(() => {
    sandbox.restore();
  });

  describe("When creating a file", () => {
    it("Should create a new file", () => {
      const writeSpy = sandbox.spy(fs, "writeFileSync");
      const fileManagement = require("./file.management");

      fileManagement.createFile("test.txt");
      expect(writeSpy.calledWith("./data/test.txt", "")).to.be.true;
    });

    it.skip("Should create a new file", () => {
      const writeSpy = sandbox.spy(fs, "writeFileSync");

      fileManagement.createFileInjected("test.txt", fs);
      expect(writeSpy.calledWith("./data/test.txt", "")).to.be.true;
    });

    it("Should not create a new file if no name is specified", () => {
      const writeSpy = sandbox.spy(fs, "writeFileSync");
      const fileManagement = require("./file.management");

      try {
        fileManagement.createFile();
      } catch (err) {}
      expect(writeSpy.notCalled).to.be.true;
    });

    it("Should throw an exception if the file exists", () => {
      const writeSpy = sandbox.spy(fs, "writeFileSync");
      const fileManagement = require("./file.management");

      try {
        fileManagement.createFile("test.txt");
      } catch (error) {
        console.log(writeSpy.exceptions);
      }

      expect(writeSpy.threw()).to.be.true;
    });
  });
});