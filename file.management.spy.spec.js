const { expect } = require("chai");
const { createSandbox, spy } = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");
const fileManagement = require("./file.management");

describe("File Management", () => {
  it("true should be true", () => {
    expect(true).to.be.true;
  });
});
