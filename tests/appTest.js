const assert = require("chai").assert;
const app = "../src/App.js";

describe("App", function() {
  it("it should contain a h1 for title", function() {
    assert.equal(app(), "Test");
  });
});
