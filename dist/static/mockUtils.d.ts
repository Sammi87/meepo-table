import { Cell } from '../types/cellTypes';
import { ColumnId, Row, RowId } from '../types/tableTypes';
export declare const cell: Record<string, (r: RowId, c: ColumnId) => Cell<string>>;
export declare const fn: {
    rndString(min: number, max: number, type: number): string;
    rndBoolean: () => Boolean;
    rndVal: (v: object) => any;
    rndNum: (min: number, max: number) => number;
    arr: (size: number, fn: () => unknown) => unknown[];
    rndArr: <T>(arr: T[]) => T;
    rndDate: (min?: number, max?: number) => Date;
    rndColor: () => string;
    row: (rowId: RowId, cells: string[]) => Row;
    columnTypeArray: (size: number) => string[];
    rows: (size: number, columns: string[]) => Row[];
};
export declare const estimateColor: (hexColor: string) => string;
