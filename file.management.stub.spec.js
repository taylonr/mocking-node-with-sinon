const { expect } = require("chai");
const { createSandbox } = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("File Management", () => {
  it("true should be true", () => {
    expect(true).to.be.true;
  });
});
