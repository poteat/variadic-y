# variadic-y

[![license](https://img.shields.io/github/license/poteat/variadic-y.svg?)](https://choosealicense.com/licenses/mit/)
[![build](https://travis-ci.org/poteat/variadic-y.svg?branch=master)](https://travis-ci.org/poteat/variadic-y)
[![coverage](https://img.shields.io/codecov/c/github/poteat/variadic-y.svg)](https://codecov.io/gh/poteat/variadic-y)

Variadic y-combinator for recursive anonymous functions.

## Installation

```shell
npm i variadic-y
```

## Usage

Define your recursive function to take in a reference to itself. Here, `f`.

```ts
import { Y } from "variadic-y";

Y(f => (x, y = 1) => (x == 1 ? y : f(x - 1, x * y)))(5); // 120
```

## Design

Unmemoized to enable usage with objects and referentially opaque functions.

```ts
export const Y = (a: any) =>
  ((b: any) => a((...c: any[]) => b(b)(...c)))((b: any) =>
    a((...c: any[]) => b(b)(...c))
  );
```

If anyone knows how to properly type this combinator in TypeScript, let me know.
