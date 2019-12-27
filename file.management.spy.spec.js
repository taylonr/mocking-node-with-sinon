const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("File Management", () => {
  beforeEach(() => {});

  afterEach(() => {
    sinon.restore();
  });

  describe("When creating a file", () => {
    it("Should create a new file", () => {
      const writeSpy = sinon.spy(fs, "writeFileSync");
      const fileManagement = proxyquire("./file.management", { fs });

      fileManagement.createFile("test.txt");
      expect(writeSpy.calledWith("./data/test.txt", "")).to.be.true;
    });

    it.skip("Should create a new file", () => {
      const writeSpy = sinon.spy(fs, "writeFileSync");

      fileManagement.createFileInjected("test.txt", fs);
      expect(writeSpy.calledWith("./data/test.txt", "")).to.be.true;
    });

    it("Should not create a new file if no name is specified", () => {
      const writeSpy = sinon.spy(fs, "writeFileSync");
      const fileManagement = proxyquire("./file.management", { fs });

      try {
        fileManagement.createFile();
      } catch (err) {}
      expect(writeSpy.notCalled).to.be.true;
    });
  });
});
