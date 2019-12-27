const { expect } = require("chai");
const { createSandbox } = require("sinon");
const fs = require("fs");
const proxyquire = require("proxyquire");

describe("File Management Stub", () => {
  const sandbox = createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it("True should be true", () => {});
});
