
import { Row, Column, ControlObject, ColumnId, TableOptions, RowId, SubTableOptions } from "@/types/tableTypes";
import { SortingDirection } from "@/types/enums";
import { CommonProps } from "@/types/cellTypes";
import { compareStrings } from "@/utils/generalUtils";

// The table renders rows in the order of the `rows` array (see TableSection's
// `visibleRows`, which filters `props.rows` rather than mapping `sortedRows`).
// Sorting therefore reorders that array in place so the change is visible.
// (A cleaner design is to make `visibleRows` map over `control.sortedRows` and
// keep `rows` immutable — noted as a follow-up.)
const compareRows = <T>(
  column: Column<CommonProps, T>,
  index: number,
  locale: string,
) => (a: Row, b: Row): number => {
  const av = a.cells[index]?.value;
  const bv = b.cells[index]?.value;
  // The column owns how it sorts (dates by time, numbers numerically, ...).
  // Untyped columns fall back to a locale-aware string comparison.
  return column.compare ? column.compare(av, bv) : compareStrings(av, bv, locale);
};

export const sortRows = <T, S>(active: ColumnId, locale: string = 'sv', columns: Column<CommonProps, T>[], rows: Row[], control: ControlObject): { columnId: string, direction: SortingDirection } | void => {

  const index = columns.findIndex(c => c?.sortable && c.columnId === active);

  if (index < 0) return; // column not found or not sortable

  if (active === control.activeColumn) {
    control.sortingDirection = control.sortingDirection === SortingDirection.ASCEND
    ? SortingDirection.DESCEND
    : SortingDirection.ASCEND
  } else {
    control.activeColumn = active;
    control.sortingDirection = SortingDirection.DESCEND;
  }

  const direction = control.sortingDirection === SortingDirection.DESCEND ? 1 : -1;
  const compare = compareRows(columns[index], index, locale);

  control.sortedRows = rows.sort((a, b) => compare(a, b) * direction).map(r => r.rowId);

  return { columnId: active, direction: control.sortingDirection };
};

const sort = <T, S>(rows: Row[], columns: Column<CommonProps, T>[], options: TableOptions<T, S>) => {
  const init1 = columns.findIndex(c => c.columnId === options.initialSorting?.column);
  const init2 = columns.findIndex(c => c?.sortable)
  const index = init1 >= 0 ? init1 : init2; // findIndex returns -1 when none match

  if (index < 0) return rows.map(r => r.rowId);

  const dir: SortingDirection = options.initialSorting?.direction ?? SortingDirection.DESCEND;
  const direction = dir === SortingDirection.DESCEND ? 1 : -1;
  const locale = options.locale ?? 'sv';
  const compare = compareRows(columns[index], index, locale);

  return rows.sort((a, b) => compare(a, b) * direction).map(r => r.rowId);
}

export const initialSort = <T, S>(rows: Row[], columns: Column<CommonProps, T>[], options: TableOptions<T, S>, subRows?: Row[], subColumns?: Column<CommonProps, S>[], subOptions?: SubTableOptions<S>): RowId[]  => {
 return subColumns && subRows && subOptions
  ? [...sort(rows, columns, options), ...sort(subRows, subColumns, subOptions)]
  : [...sort(rows, columns, options)]
}
