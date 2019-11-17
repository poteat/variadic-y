type GType = (...args: any[]) => any;
type G2Type = (fcn: GType) => GType;

export const Y = <T extends G2Type>(fcn: T) =>
  ((b: any) => fcn((...c: any[]) => b(b)(...c)))((b: any) =>
    fcn((...c: any[]) => b(b)(...c))
  ) as ReturnType<T>;
