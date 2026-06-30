import { Column, ControlObject, Row, RowId, SubTableStore } from "@/types/tableTypes";
import { CommonProps } from "@/types/cellTypes";

const searchFn = <T, P extends CommonProps>(filter: string, columns: Column<P, T>[], rows: Row[], control: ControlObject): boolean => {
  
  const searchableColumns = columns.map(c => !!c.searchable)
  let rowsAdded = false;
  rows
    .filter((row: Row) => !!row.cells.find((c,i) => (
      c.value && searchableColumns[i] 
        ? c.format
          ? c.format(c.value)
          : c.value
        : '' ).toString().toLocaleUpperCase().indexOf(filter.toLocaleUpperCase()) > -1))
  .forEach(r => {
    control.filteredRows.add(r.rowId);
    rowsAdded = !!r.rowId
  });
  return rowsAdded;
}

export default <T, S, P extends CommonProps>(filter: string, columns: Column<P, T>[], rows: Row[], control: ControlObject, subStores?:  Map<RowId, SubTableStore<S>>): void => {
  control.filteredRows.clear();
  searchFn(filter, columns, rows, control)
  subStores?.forEach((s, r) => {
      searchFn(filter, columns, rows, control)
      if (control.filteredRows.has(s.tableId)) {
        s.rows.forEach(sr => {
          control.filteredRows.add(sr.rowId);
        });
      }
  });
};
