const { expect } = require("chai");
const sinon = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("File Management Stub", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("True should be true", () => {});
});
