
import { BaseCellType, Cell, CheckboxProps, ChipProps, CommonProps, ContextButtonProps, DateProps, NumberProps, TextProps } from "@/types/cellTypes";
import { ColumnId, Row, RowId, TableId } from "@/types/tableTypes";
import { uid, formatDate, formatNumber, lumen } from "@/utils/generalUtils";

export const cell: Record<string, (r: RowId, c: ColumnId) => Cell<string>> = {
  checkbox: (c, r): CheckboxProps => {
    return {
      columnId: c,
      rowId: r,
      type: 'checkbox',
      value: Math.random() > .5,
    }
  },
  text: (c, r): TextProps => {
    const value: string = fn.rndString(16, 32, 2);
    return {
      columnId: c,
      rowId: r,
      type: 'text',
      value,
    }
  },
  number: (c, r): NumberProps => {
    const value: number = Math.round((Math.random() * 10000000));
    return {
      columnId: c,
      rowId: r,
      type: 'number',
      value,
      format: formatNumber,
    }
  },
  date: (c, r): DateProps => {
    const value: Date = new Date(new Date().setFullYear(Math.random() * 10 + 2015, Math.random() * 12, Math.random() * 31));
    return {
      columnId: c,
      rowId: r,
      type: 'date',
      value,
      format: formatDate,
    }
  },
  chip: (c, r): ChipProps => {
    const rndStatus = fn.rndVal(['#b20068', '#e20057', '#ff0095']);
    return {
      columnId: c,
      rowId: r,
      type: 'chip',
      statusColor: rndStatus,
      value: rndStatus,
    }
  },
  contextbutton: (c, r): ContextButtonProps => {
    return {
      columnId: c,
      rowId: r,
      type: 'context-button',
      options: [{ label: "action 1", action: () => console.log(r) }],
    }
  },
};
type Year = `${number}${number}${number}${number}`;
export const fn = {
  rndString(min: number, max: number, type: number): string {
    const allCharacters = 'abcdefghijklmnopqrstuvwxyz' + (type > 0 ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ' : '') + (type > 1 ? '0123456789': '') + (type > 2 ? '!@#$%^&*()-_=+[]{}|;:,.<>?' : '');  
    const length = fn.rndNum(min, max);
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      randomString += allCharacters[randomIndex];
    }
  
    return randomString;
  },
  rndBoolean: (): Boolean => !!Math.round(Math.random()),
  rndVal: (v: object) => {
    const keys = Object.values(v);
    return keys[Math.floor(Math.random() * keys.length)];
  },
  rndNum: (min: number, max: number) => min <= max ? Math.floor(Math.random() * (max - min + 1)) + min : min,
  arr: (size: number, fn: () => unknown) =>
    new Array(size).fill(null).map(i => fn()),
  rndArr: <T>(arr: T[]): T => arr[fn.rndNum(0, arr.length - 1)],
  rndDate: (min?:number, max?:number) => new Date(fn.rndNum(min ?? 0, max ?? new Date().valueOf())),
  rndColor: () =>  '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'),
  row: ( rowId: RowId, cells: string[]): Row => ({
    rowId,
    cells: cells.map((c, i) => {
      return cell[c](rowId, `column${i}`);
    }),
  }),
  columnTypeArray: (size: number) => {
    return new Array(size).fill(null).map(() => Object.values(['fold', 'checkbox', 'text', 'number', 'date', 'chip', 'contextbutton'])[Math.floor(Math.random() * 7)])
  },
  rows: (size: number, columns: string[]): Row[] => new Array(size).fill(null).map(() => fn.row(`rowId${uid()}`, fn.columnTypeArray(size))),
};


const colorRation = (r: number, g: number, b: number): { r: number, g: number, b: number } => ({r: r/(r+g+b), g: g/(r+g+b), b: b/(r+g+b)});

const getHue = (r: number, g: number, b: number) => {
  const h = Math.atan2(Math.sqrt(3) * (g - b), 2 * r - g - b) * (180 / Math.PI);
  return h >= 0 ? h : h + 360
}

export const estimateColor = (hexColor: string): string  => {
  if (!/^#[0-9A-Fa-f]{6}$/.test(hexColor)) throw new Error("Invalid hex color format");
  const [r, g, b] = [1, 3, 5].map((start) => parseInt(hexColor.substring(start, start + 2), 16));
  const l = lumen(r, g, b);
  const cr = colorRation(r,g,b);
  const h = getHue(r, g, b);
  
  const thresholds = [
    { color: 'white', condition: l > .95 },
    { color: 'black', condition: l < .10 },
    { color: 'gray', condition: cr.r > .29 && cr.g > .29 && cr.b > .29 }, // Fallback to gray if no other conditions met
    { color: 'red', condition: h > 360 },
    { color: 'rosé', condition: h > 330 },
    { color: 'magenta', condition: h > 300 },
    { color: 'violet', condition: h > 270},
    { color: 'blue', condition: h > 240},
    { color: 'azure', condition: h > 210 },
    { color: 'cyan', condition: h > 180 },
    { color: 'turquoise', condition: h > 150},
    { color: 'green', condition: h > 100},
    { color: 'chartreuse', condition: h > 80},
    { color: 'yellow', condition: h > 40 },
    { color: 'orange', condition: h > 30 },
    { color: 'red', condition: h > 0 },
  ];

  return thresholds.find(({ condition }) => condition)?.color ?? 'red';
}




