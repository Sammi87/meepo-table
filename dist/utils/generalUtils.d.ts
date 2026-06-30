import { SubTableStore, TableStore } from '../types/tableTypes';
export declare const uid: () => string;
export declare const formatDate: (date: Date, locale?: string) => string;
export declare const formatNumber: (number: number, locale?: string) => string;
export declare const getCssVar: (variable: string) => string;
export declare const isObject: (input: any) => boolean;
export declare const hexToRgb: (hex: string) => {
    r: number;
    g: number;
    b: number;
};
export declare const lumen: (r: number, g: number, b: number) => number;
export declare function formatDateInput(ev: Event): void;
export declare const throttle: <T extends any[]>(func: (...args: T) => void, limit: number) => (...args: T) => void;
export declare const debounce: <T extends any[]>(func: (...args: T) => void, delay: number) => (...args: T) => void;
export declare const focusAdjcentElement: (element: HTMLElement, travelIndex: number) => void;
export declare const hasSubStore: <T, S>(props: TableStore<T, S> | SubTableStore<S>) => Map<string, SubTableStore<S>> | undefined;
