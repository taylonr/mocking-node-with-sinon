const { expect } = require("chai");
const { createSandbox, replace } = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("File Management Fake", () => {
  const sandbox = createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it("Should create a new file", () => {
    const writeFake = createSandbox().fake.returns(1);

    replace(fs, "writeFileSync", writeFake);

    const fileManagement = proxyquire("./file.management", { fs });

    fileManagement.createFile("test.txt");

    expect(writeFake.callCount).to.eql(1);
  });
});
