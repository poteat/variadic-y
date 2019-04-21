import { parseLine } from "./main";

describe("parseLine", () => {
  it("parses the header part of the line", () => {
    expect(parseLine("test data")).toBe("abc");
  });
});
