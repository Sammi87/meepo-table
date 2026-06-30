import { fn } from './mockUtils';
import { Color } from '..';

export type SubData = { id: string, type: string, cough: string, dentures: string };

export type MockType1 = {
  id: string,
  name: Record<'firstname' | 'surename', string[]>,
  age: number,
  luckyDate: Date,
}

export type MockType2 = {
  id: string,
  name: Record<'firstname' | 'surename', string[]>,
  age: number,
  luckyDate: Date,
  favoriteColor: Color,
  extraData?: SubData[]
}

export const mockDataFn1 = (rows: number): MockType1[] => new Array(rows).fill(null).map((r, i) => {
  return {
    id: `rowId${i.toString()}`,
    name: {
      firstname: [
        "Cosmo", "Giggles",
        "Lovejoy", "Peaches",
      ],
      surename: [
        "Wigglebottom", "Butterbaugh",
        "Snickersnee", "Bubbleworks",
      ]
    },
    age: fn.rndNum(18, 65),
    luckyDate: fn.rndDate(),
  }
});

export const mockDataFn2 = (rows: number): MockType2[] => new Array(rows).fill(null).map((r, i) => {
  return {
    id: `rowId${i.toString()}`,
    name: {
      firstname: [
        "Cosmo", "Giggles",
        "Lovejoy", "Peaches",
      ],
      surename: [
        "Wigglebottom", "Butterbaugh",
        "Snickersnee", "Bubbleworks",
      ]
    },
    age: fn.rndNum(18, 65),
    luckyDate: fn.rndDate(),
    favoriteColor: fn.rndColor() as Color,
    extraData: (fn.rndBoolean() ? new Array(fn.rndNum(1,4)).fill(null).map((r, ii) =>  ({ id: `rowId${i}subId${ii.toString()}`, type: fn.rndArr(['horse', 'sheep', 'duck', 'girafe', 'bear']), cough: 'loud', dentures: ['yes', 'no'][fn.rndNum(0,1)]})) : []) as SubData[]
  }
});