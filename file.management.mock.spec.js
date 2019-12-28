const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("File Management Mocks", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Should call writeFileSync when creating a test", () => {
    const writeMock = sinon.mock(fs);
    writeMock.expects("writeFileSync").once();

    const fileManagement = proxyquire("./file.management", { fs });

    fileManagement.createFile("test.txt");

    writeMock.verify();
  });

  it("createFileSafe should create a new file with a number appended", () => {
    const writeMock = sinon.mock(fs);
    writeMock
      .expects("writeFileSync")
      .withArgs("./data/test.txt")
      .throws();

    writeMock
      .expects("writeFileSync")
      .withArgs("./data/test1.txt")
      .returns(1);

    writeMock
      .expects("readdirSync")
      .returns(["test.txt"])
      .once();

    const fileManagement = proxyquire("./file.management", { fs });

    fileManagement.createFileSafe("test.txt");

    writeMock.verify();
  });

  it("createFile should never call writeFileSync when the file is empty", () => {
    const writeMock = sinon.mock(fs);
    writeMock.expects("writeFileSync").never();

    const fileManagement = proxyquire("./file.management", { fs });

    try {
      fileManagement.createFile();
    } catch (err) {}

    writeMock.verify();
  });
});
