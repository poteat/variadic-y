export const Y = (a: any) =>
  ((b: any) => a((...c: any[]) => b(b)(...c)))((b: any) =>
    a((...c: any[]) => b(b)(...c))
  );
