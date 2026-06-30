import { Component, DefineComponent, ComputedRef } from "vue";
import { ComponentProps } from "vue-component-type-helpers";
import { AlignX, SortType, SortingDirection } from './enums';
import { CommonProps, Cell } from './cellTypes';
export type CustomComponent<T extends Component> = {
    component: T;
    props: ComponentProps<T>;
};
export type CustomFilterComponent<T extends Component> = CustomComponent<T>;
export type EZComponent<P> = DefineComponent<P, any, any, any, any, any, any, any, any, any, 'type', 'type'>;
export type TableId = string;
export type RowId = string;
export type ColumnId = string;
export type CellId = string;
export type Filter = <C extends Component, T, S>(store: TableStore<T, S>, component: C, props: ComponentProps<T>) => CustomFilterComponent<C>;
export type HeaderColumn = {
    columnId: ColumnId;
    gridSpace: string;
    tableId: TableId;
    type: string;
    align?: AlignX;
    editable?: boolean;
    header?: string;
    index?: number;
    searchable?: boolean;
    sortable?: boolean;
    minimize?: boolean;
    externalAttributes?: Record<string, any>;
};
export type HeaderComponent<P extends HeaderColumn> = EZComponent<P>;
export type AlternativeValue<T, P extends CommonProps, K extends string> = {
    value: (data: T) => P[K];
    key: K;
};
export type Column<P extends CommonProps, T> = {
    columnId: ColumnId;
    component: EZComponent<P>;
    getValue?: ((data: T) => P['value']) | AlternativeValue<T, P, string>;
    gridSpace: string;
    type: P['type'];
    align?: AlignX;
    classes?: string | string[];
    editComponent?: EZComponent<P>;
    filter?: Filter[];
    getProps?: (data: T) => Partial<Omit<P, 'value'>>;
    header?: ComputedRef<string>;
    onClick?: ((args?: any) => void) | boolean;
    priority?: number;
    searchable?: boolean;
    sortable?: boolean;
    visible?: boolean;
    tooltip?: string;
    headerComponent?: HeaderComponent<HeaderColumn>;
};
export type PartialColumn<T, P extends CommonProps> = Partial<Column<P, T>> & {
    columnId: ColumnId;
};
export type Row = {
    cells: Cell<string>[];
    rowId: RowId;
};
/*** External ***/
export type TableOptions<T, S> = {
    setRowId: (data: T) => RowId;
    accordion?: boolean;
    filter?: Filter[];
    hideHeaderCells?: boolean;
    initialSorting?: {
        column: string;
        direction: SortingDirection;
        sortingType?: SortType;
    };
    inputBorders?: boolean;
    locale?: string;
    onRowClick?: (arg: T) => void;
    pagination?: Pagination;
    searchFilter?: (<P extends CommonProps>(filter: string, columns: Column<P, T>[], rows: Row[], control: ControlObject, subStores?: Map<RowId, SubTableStore<S>>) => void) | boolean;
    sortFn?: (store: TableStore<T, S>) => () => void;
    tableEmptyMessage?: string | ComputedRef<string>;
};
export type SubTableOptions<S> = {
    setRowId: (data: S) => RowId;
    accordion?: boolean;
    hideHeaderCells?: boolean;
    initialSorting?: {
        column: string;
        direction: SortingDirection;
    };
    onRowClick?: (arg: S) => void;
};
export type Table<T, S> = {
    columns: Column<CommonProps, T>[];
    options: TableOptions<T, S>;
    subData?: (r: T) => S[];
    subTable?: SubTable<S>;
    tableId: TableId;
};
export type SubTable<S> = {
    columns: Column<CommonProps, S>[];
    options: SubTableOptions<S>;
};
/****/
export type StoreOptions<T, S> = Omit<TableOptions<T, S>, 'initialSortingColumn' | 'setRowId'>;
export type SubStoreOptions<S> = Omit<TableOptions<S, unknown>, 'filter' | 'pagination' | 'searchFilter' | 'sortFn' | 'setRowId'>;
export type ControlObject = {
    activeColumn: ColumnId | undefined;
    activePage: Set<RowId>;
    activePageNumber: number;
    filteredRows: Set<RowId>;
    sortedRows: RowId[];
    paginationPages: Map<number, {
        id: string;
        page: RowId[];
    }>;
    rowsSelected: Set<RowId>;
    sortingDirection?: SortingDirection;
    subTablesVisible: Set<RowId>;
    tableId: string;
};
export type TableStore<T, S> = {
    activeColumn: ColumnId | undefined;
    columns: Column<CommonProps, T>[];
    data: Map<RowId, T>;
    rows: readonly Row[];
    subStores?: Map<RowId, SubTableStore<S>>;
    tableId: TableId;
    options: StoreOptions<T, S>;
};
export type SubTableStore<S> = {
    activeColumn: ColumnId | undefined;
    columns: Column<CommonProps, S>[];
    data: Map<RowId, S>;
    rows: Row[];
    tableId: TableId;
    options?: SubStoreOptions<S>;
};
export type TableServiceArgs<T, S> = {
    data: ComputedRef<Map<string, T>>;
    rawData: T[];
    options: TableOptions<T, S>;
    columns: Column<CommonProps, T>[];
    rows: ComputedRef<Row[]>;
    control: ControlObject;
    subOptions?: SubTableOptions<S>;
    subColumns?: Column<CommonProps, S>[];
    subStores?: Map<RowId, SubTableStore<S>>;
};
export type TableService<T, S> = {
    data: ComputedRef<Map<string, T>>;
    rawData: T[];
    options: TableOptions<T, S>;
    subOptions?: SubTableOptions<S>;
    columns: Column<CommonProps, T>[];
    rows: ComputedRef<Row[]>;
    subColumns?: Column<CommonProps, S>[];
    subStores?: ComputedRef<Map<RowId, SubTableStore<S>>>;
    control: ControlObject;
    createCellId: (columnId: ColumnId, rowId: RowId) => CellId;
    divideCellId: (cellId: CellId) => {
        columnId: ColumnId;
        rowId: RowId;
    };
    checkRow: (rowId: RowId) => void;
    getActiveColumn: () => ColumnId;
    getCell: (rowId: RowId, columnId: ColumnId) => Cell<string>;
    getColumn: (columnId: ColumnId) => Column<CommonProps, T>;
    getColumnIndex: (columnId: ColumnId) => number | undefined;
    getRow: (rowId: RowId) => Row;
    getRowIndex: (rowId: RowId) => number;
    getSubRows: (substores: Map<string, SubTableStore<S>>) => Row[];
    getTopLevelVisibleRowIds: () => Set<RowId>;
    hasSubRows: (rowId: RowId) => boolean;
    toggleFold: (rowId: RowId) => void;
    subTableIsOpen: (rowId: RowId) => boolean;
    updatePages: () => void;
};
export type CustomFilter = <T, S>(tableservice: TableService<T, S>, callback: () => void) => {};
export type Pagination = {
    rowsPerPage: number;
    align?: AlignX;
    filteredRows?: Set<RowId>;
    goToFirstLast?: boolean;
    goToPrevNext?: boolean;
    pagesToShow?: number;
    truncatePages?: number;
};
export type Page = {
    id: string;
    type: string;
    active?: boolean;
    value?: string;
    fn?: ((event: Event, page: number) => void);
};
