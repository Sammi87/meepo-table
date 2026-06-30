import { TableService, RowId, Column, Row, ControlObject, SubTableStore, TableOptions, SubTableOptions } from '../types/tableTypes';
import { ComputedRef } from 'vue';
import { CommonProps } from '../types/cellTypes';
export declare const useTableService: <T, S>(data: ComputedRef<Map<string, T>>, rawData: T[], options: TableOptions<T, S>, columns: Column<CommonProps, T>[], rows: ComputedRef<Row[]>, control: ControlObject, subOptions?: SubTableOptions<S> | undefined, subColumns?: Column<CommonProps, S>[] | undefined, subStores?: ComputedRef<Map<string, SubTableStore<S>>> | undefined) => TableService<T, S>;
