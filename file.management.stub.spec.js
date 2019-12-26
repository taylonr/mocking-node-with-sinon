const { expect } = require("chai");
const { createSandbox } = require("sinon");
const fs = require("fs");

describe.only("File Management Stub", () => {
  const sandbox = createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it("Should create a file", () => {
    const writeStub = sandbox.stub(fs, "writeFileSync");

    const fileManagement = require("./file.management");

    fileManagement.createFile("test.txt");

    expect(writeStub.callCount).to.equal(1);
  });
});
