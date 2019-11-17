import { Y } from "./index";

it("fac(5) = 120", async () => {
  expect(
    Y(
      (f: (x: number, y: number) => number) => (
        x: number,
        y: number = 1 as any
      ) => (x === 1 ? y : f(x - 1, x * y))
    )(5)
  ).toBe(120);
});

it("Async functions", async () => {
  expect(
    await Y(
      (f: (x: number, y: number) => Promise<number>) => async (
        x: number,
        y = 1
      ) => (x === 1 ? y : f(x - 1, x * y))
    )(5)
  ).toBe(120);
});
