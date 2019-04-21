"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
it("fac(5) = 120", () => {
    expect(index_1.Y((rec) => (x, y = 1) => x === 1 ? y : rec(x - 1, x * y))(5)).toBe(120);
});
