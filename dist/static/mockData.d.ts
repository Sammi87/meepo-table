import { Color } from '..';
export type SubData = {
    id: string;
    type: string;
    cough: string;
    dentures: string;
};
export type MockType1 = {
    id: string;
    name: Record<'firstname' | 'surename', string[]>;
    age: number;
    luckyDate: Date;
};
export type MockType2 = {
    id: string;
    name: Record<'firstname' | 'surename', string[]>;
    age: number;
    luckyDate: Date;
    favoriteColor: Color;
    extraData?: SubData[];
};
export declare const mockDataFn1: (rows: number) => MockType1[];
export declare const mockDataFn2: (rows: number) => MockType2[];
