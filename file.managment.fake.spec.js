const { expect } = require("chai");
const { sinon, replace } = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe.skip("File Management Fake", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("Should create a new file", () => {
    const writeSpy = sinon.fake();
    replace(fs, "writeFileSync", writeSpy);
    const fileManagement = proxyquire("./file.management", { fs });

    fileManagement.createFile("test.txt");
    expect(writeSpy.calledWith("./data/test.txt", "")).to.be.true;
  });

  //   it("Should create a new file", () => {
  //     const writeFake = sinon().fake.returns(1);

  //     replace(fs, "writeFileSync", writeFake);

  //     const fileManagement = proxyquire("./file.management", { fs });

  //     fileManagement.createFile("test.txt");

  //     expect(writeFake.callCount).to.eql(1);
  //   });
});
