
import { Row, Column, ControlObject, ColumnId, TableOptions, RowId, SubTableOptions } from "@/types/tableTypes";
import { SortType, SortingDirection } from "@/types/enums";
import { CommonProps } from "@/types/cellTypes";
import { update } from "@/utils/buildUtils";

export const sortRows = <T, S>(active: ColumnId, locale: string = 'sv', columns: Column<CommonProps, T>[], rows: Row[], control: ControlObject): { columnId: string, direction: SortingDirection } | void => {
  
  const index = columns.findIndex(c => c?.sortable && c.columnId === active);
  
  if (typeof index !== 'number') return;

  if(active === control.activeColumn) {
    control.sortingDirection = control.sortingDirection === SortingDirection.ASCEND 
    ? SortingDirection.DESCEND
    : SortingDirection.ASCEND
  } else {
    control.activeColumn = active;
    control.sortingDirection = SortingDirection.DESCEND;
  }

  control.sortedRows = rows.sort((a: Row, b: Row) => {
    return a.cells[index].value.toString().toLocaleUpperCase().localeCompare(b.cells[index].value.toString().toLocaleUpperCase(), locale, { sensitivity: 'base' }) * (control.sortingDirection === SortingDirection.DESCEND ? 1 : -1);
  }).map(r => r.rowId);

  return { columnId: active, direction: control.sortingDirection };
};

const sort = <T, S>(rows: Row[], columns: Column<CommonProps, T>[], options: TableOptions<T, S>) => {
  const init1 = columns.findIndex(c => c.columnId === options.initialSorting?.column);
  const init2 = columns.findIndex(c => c?.sortable)
  const index = init1 > 0 ? init1 : init2 > 0 ? init2 : -1;
  
  if (typeof index !== 'number' || index < 0) return rows.map(r => r.rowId);
  const dir: SortingDirection = options.initialSorting?.direction ?? SortingDirection.DESCEND;
  const locale = options.locale ?? 'sv';

  return rows.sort((a: Row, b: Row) => {
    return a.cells[index].value.toString().toLocaleUpperCase().localeCompare(b.cells[index].value.toString().toLocaleUpperCase(), locale, { sensitivity: 'base' }) * (dir ? 1 : -1);
  }).map(r => r.rowId);
}

export const initialSort = <T, S>(rows: Row[], columns: Column<CommonProps, T>[], options: TableOptions<T, S>, subRows?: Row[], subColumns?: Column<CommonProps, S>[], subOptions?: SubTableOptions<S>): RowId[]  => {
 return subColumns && subRows && subOptions
  ? [...sort(rows, columns, options), ...sort(subRows, subColumns, subOptions)]
  : [...sort(rows, columns, options)]
}