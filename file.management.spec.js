const { expect } = require("chai");
const fileManagement = require("./file.management");

describe("File Management", () => {
  it("Should delete the file specified", () => {
    const result = fileManagement.deleteFile("test.delete.txt");
    expect(result).to.be.undefined;
  });
});
