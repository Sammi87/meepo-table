
export type HSL = `hsl(${number}, ${number}%, ${number}%)` | `hsl(${number},${number}%,${number}%)`;
export type HSLA = `hsla(${number}, ${number}%, ${number}%, ${number})` | `hsla(${number},${number}%,${number}%,${number})`;
export type RGB = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number},${number},${number},${number})`;
export type HEX = `#${string}`;
export type Color =  HSL | HSLA | RGB | RGBA | HEX;
export type ColorOrEnum<T extends Record<string, string> | {} = Record<string, string> | Color> =  keyof T | Color;
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;