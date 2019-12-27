const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("File Management Mocks", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("True should be true", () => {
    expect(true).to.be.true;
  });
});
