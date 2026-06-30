
import { TableService, ColumnId, RowId, Column, Row, ControlObject, SubTableStore, CellId, TableOptions, SubTableOptions } from '@/types/tableTypes';
import { ComputedRef } from 'vue';
import { Cell, CommonProps } from '@/types/cellTypes';

export const useTableService = <T, S>(
  data: ComputedRef<Map<string, T>>,
  rawData: T[],
  options: TableOptions<T, S>,
  columns: Column<CommonProps, T>[],
  rows: ComputedRef<Row[]>,
  control: ControlObject,
  subOptions?: SubTableOptions<S>,
  subColumns?: Column<CommonProps, S>[],
  subStores?: ComputedRef<Map<RowId, SubTableStore<S>>>,
): TableService<T, S> => {

  const createCellId = (columnId: ColumnId, rowId: RowId): CellId => `${columnId}@${rowId}`;
  const divideCellId = (cellId: CellId): { columnId: ColumnId, rowId: RowId } => {
    const split = cellId.split('@');
    return { columnId: split[0], rowId: split[1] }
  }

  const getRow = (rowId: RowId): Row => {
    const row = rows.value.find(row => row.rowId === rowId);
    columns
    if (row) return row;
    else return [...subStores!.value.values()].find(s => s.rows.find(r => r.rowId === rowId)) as unknown as Row
  }

  const getColumn = (columnId: ColumnId) => columns.find(c => c.columnId === columnId)!;

  const getCell = <C extends Column<CommonProps, T>>(rowId: RowId, columnId: C['columnId']): Cell<C['type']> => getRow(rowId).cells.find(c => c.columnId === columnId)!

  const getColumnIndex = (columnId: ColumnId) => columns.map(col => col.columnId).indexOf(columnId);

  const getRowIndex = (rowId: RowId) => rows.value.map(row => row.rowId).indexOf(rowId);

  const getActiveColumn = () => control.activeColumn ?? '';

  const checkRow = (rowId: RowId) => 
    control.rowsSelected?.has(rowId) ? control.rowsSelected.delete(rowId) : control.rowsSelected?.add(rowId);

  const toggleFold = (rowId: RowId) => {
    control.subTablesVisible?.has(rowId) ? control.subTablesVisible.delete(rowId) : control.subTablesVisible?.add(rowId);
  }
  const subTableIsOpen = (rowId: RowId) => control.subTablesVisible?.has(rowId);
  const hasSubRows = (rowId: RowId) => !!subStores?.value.has(rowId);
  const getSubRows = (subStores: Map<string, SubTableStore<S>>) => [...subStores.values()].map(s => s.rows).flat()
  const getTopLevelVisibleRowIds = () => {
    if(subStores?.value.size) {
      const subTableRows = getSubRows(subStores.value).map(r => r.rowId);
      return new Set(control.sortedRows.filter(r => control.filteredRows.has(r) && !subTableRows.includes(r)))
    } else return new Set(control.sortedRows.filter(r => control.filteredRows.has(r)));
  }

  const updatePages = (): void => {
    if (!options?.pagination) return;

    control.paginationPages?.clear();
    const rowIds = [...getTopLevelVisibleRowIds()];
    const rowsPerPage = options.pagination?.rowsPerPage ?? 1;
    const numberOfPages = Math.ceil(rowIds.length / rowsPerPage);
    let index = control.activePageNumber ?? 0;

    control.activePageNumber = index > (numberOfPages - 1) ? (numberOfPages - 1) : index;
  
    for(let i = 0; i < numberOfPages; i++) {
      const page = rowIds.slice(i * rowsPerPage, (rowsPerPage * (i + 1)));
      control.paginationPages?.set(i, { id: `page${i}`, page: page });
    }

    const page = control.paginationPages?.get(control?.activePageNumber)?.page
    if (page) control.activePage = new Set(page);
  };

  return {
    data,
    rawData,
    options,
    subOptions,
    columns,
    rows,
    subColumns,
    subStores,
    control,
    createCellId,
    divideCellId,
    checkRow,
    getActiveColumn,
    getCell,
    getColumn,
    getColumnIndex,
    getRow,
    getRowIndex,
    getSubRows,
    getTopLevelVisibleRowIds,
    hasSubRows,
    subTableIsOpen,
    toggleFold,
    updatePages,
  }
}
