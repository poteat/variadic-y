export const Y = (a: any) =>
  ((b: any) => a(async (...c: any[]) => (await b(b))(...c)))((b: any) =>
    a(async (...c: any[]) => (await b(b))(...c))
  );
