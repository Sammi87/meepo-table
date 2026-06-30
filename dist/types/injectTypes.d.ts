import { ComputedRef, Ref } from "vue";
import { Row, RowId, SubTableStore, Table, TableOptions, SubTableOptions, ControlObject, Column, SubTable, TableService, TableId } from './tableTypes';
import { CommonProps } from './cellTypes';
export type InjectColumns<T, S> = {
    columns: Column<CommonProps, T>[];
    subColumns?: Column<CommonProps, S>[];
    updateColumns: <T, S>(table: Table<T, S>) => void;
    updateSubColumns: <T, S>(table: Table<T, S>) => void;
};
export type InjectRows = {
    rows: ComputedRef<Row[]>;
    updateRows: <T, S>(tableId: TableId, data: T[], columns: Column<CommonProps, T>[], options: TableOptions<T, S>) => void;
};
export type InjectSubStores<S> = {
    subStores?: Map<RowId, SubTableStore<S>>;
    updateSubTables: <T, S>(table: Table<T, S>, rawData: T[]) => void;
};
export type InjectOptions<T, S> = {
    options: TableOptions<T, S>;
    subOptions?: SubTableOptions<S>;
    updateOptions: <T, S>(table: Table<T, S>) => void;
    updateSubOptions: <S>(subTable: SubTable<S>) => void;
};
export type InjectData<T> = {
    data: ComputedRef<Map<RowId, T>>;
    updateData: <T, S>(table: Table<T, S>, rawData: T[]) => void;
};
export type InjectRawData<T> = {
    rawData: ComputedRef<T[]>;
};
export type InjectControl = {
    control: ControlObject;
    updateControl: <T, S>(table: Table<T, S>) => void;
};
export type InjectReady = {
    ready: Ref<Boolean>;
};
export type InjectService<T, S> = TableService<T, S>;
