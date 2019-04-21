import { Y } from "./index";

it("fac(5) = 120", () => {
  expect(
    Y((rec: (x: number, y: number) => number) => (x: number, y = 1) =>
      x === 1 ? y : rec(x - 1, x * y)
    )(5)
  ).toBe(120);
});
