const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("File Management Stub", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Should create a file", () => {
    const writeStub = sinon.stub(fs, "writeFileSync");

    const fileManagement = proxyquire("./file.management", { fs });

    fileManagement.createFile("test.txt");

    expect(writeStub.callCount).to.equal(1);
  });

  it("Should create a file", () => {
    const writeStub = sinon.stub(fs, "writeFileSync");
    writeStub.throws(new Error("FAIL"));
    const fileManagement = proxyquire("./file.management", { fs });

    expect(() => fileManagement.createFile("test.txt")).to.throw();
  });

  it("createFileSafe should create a file named test1.txt when test.txt already exists", () => {
    const writeStub = sinon.stub(fs, "writeFileSync");
    const readDirStub = sinon.stub(fs, "readdirSync");

    const fileManagement = proxyquire("./file.management", { fs });

    writeStub.withArgs("./data/test.txt").throws(new Error());
    writeStub.returns(undefined);
    readDirStub.returns(["test.txt"]);

    fileManagement.createFileSafe("test.txt");

    expect(writeStub.calledWith("./data/test1.txt")).to.be.true;
  });

  it("getAllFiles should return a list of files", () => {
    const readdir = sinon.stub(fs, "readdir");

    const fileManagement = proxyquire("./file.management", { fs });

    readdir.yields(null, ["test.txt"]);

    fileManagement.getAllFiles((err, data) => {
      expect(data).to.eql(["test.txt"]);
    });
  });

  it("getAllFilesPromise should return a list of files", () => {
    const readdir = sinon.stub(fs, "readdir");

    const util = {
      promisify: sinon.stub().returns(readdir)
    };

    const fileManagement = proxyquire("./file.management", { fs, util });

    readdir.resolves(["test.txt"]);

    return fileManagement
      .getAllFilesPromise()
      .then(files => expect(files).to.eql(["test.txt"]));
  });
});
