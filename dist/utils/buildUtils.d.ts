import { Row, Table } from '../types/tableTypes';
import { Column, ControlObject, RowId, SubTableStore, TableId, TableOptions } from '../types/tableTypes';
import { CommonProps } from '../types/cellTypes';
export declare const update: {
    data: <T, S>(rawData: T[], options: TableOptions<T, S>) => Map<any, any>;
    rows: <T_1, S_1>(tableId: TableId, data: T_1[], columns: Column<CommonProps, T_1>[], options: TableOptions<T_1, S_1>) => Row[];
    subStores: <T_2, S_2>(table: Table<T_2, S_2>, rawData: T_2[]) => Map<string, SubTableStore<S_2>>;
    pages: <T_3, S_3>(options: TableOptions<T_3, S_3>, control: ControlObject, subStores?: Map<string, SubTableStore<S_3>> | undefined) => void;
    getSubRows: <S_4>(subStores?: Map<string, SubTableStore<S_4>> | undefined) => Row[];
};
export declare const updateRowsFn: <T, S>(tableId: TableId, data: T[], columns: Column<CommonProps, T>[], options: TableOptions<T, S>) => Row[];
