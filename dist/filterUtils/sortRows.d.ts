import { Row, Column, ControlObject, ColumnId, TableOptions, RowId, SubTableOptions } from '../types/tableTypes';
import { SortingDirection } from '../types/enums';
import { CommonProps } from '../types/cellTypes';
export declare const sortRows: <T, S>(active: ColumnId, locale: string | undefined, columns: Column<CommonProps, T>[], rows: Row[], control: ControlObject) => {
    columnId: string;
    direction: SortingDirection;
} | void;
export declare const initialSort: <T, S>(rows: Row[], columns: Column<CommonProps, T>[], options: TableOptions<T, S>, subRows?: Row[], subColumns?: Column<CommonProps, S>[] | undefined, subOptions?: SubTableOptions<S> | undefined) => RowId[];
