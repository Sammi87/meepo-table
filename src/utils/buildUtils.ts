import { Row, Table } from "@/types/tableTypes";
import { Column, ControlObject, RowId, SubTableStore, TableId, TableOptions } from "@/types/tableTypes";
import { CommonProps } from "@/types/cellTypes";

export const update = {
  data: <T, S>(rawData: T[], options: TableOptions<T, S>) => {
    const dataset = new Map();
    rawData.forEach((d) => dataset.set(options.setRowId(d), d))
    return dataset
  },
  rows: <T, S>(tableId: TableId, data: T[], columns: Column<CommonProps, T>[], options: TableOptions<T, S>): Row[] => {
    const rows = data.map(d => {
      const rowId = options.setRowId(d);
      return {
        rowId,
        cells: columns.map((c) => {
          const value =
            typeof c?.getValue === 'object'
              ? { [c.getValue.key]: c.getValue.value(d) } 
              : { value: c?.getValue ? c.getValue(d) : [] };
          return {
            tableId: tableId,
            rowId,
            columnId: c.columnId,
            type: c.type,
            ...value,
            ...(c?.getProps?.(d) ?? {}),
          }
        }),
      };
  });
  return rows;
  },
  subStores: <T, S>(table: Table<T, S>, rawData: T[]): Map<RowId, SubTableStore<S>> => {
    const subStores: Map<RowId, SubTableStore<S>> = new Map();
    if(table.subTable?.options && table.subData) {
      const subTable = table.subTable;
      const subData = table.subData;

      rawData.forEach(d => {
        const data = subData(d);
        const tableId = table.options.setRowId(d);
        const options = subTable.options;
        const columns = subTable.columns;
        const mappedData: Map<RowId, S> = new Map();
        
        data.forEach((subData: S) => mappedData.set(options.setRowId(subData), subData))

        const substore = {
          activeColumn: columns.find(c => c.sortable)?.columnId ?? '',
          columns: columns,
          data: mappedData,
          rows: updateRowsFn(tableId, data, columns, options),
          tableId,
          options: table.subTable?.options
        };
        if (substore.rows.length) (subStores as Map<RowId, SubTableStore<S>>).set(tableId, substore);
      });
      return subStores;
    }
    return subStores;
  },
  pages: <T, S>(options: TableOptions<T, S>, control: ControlObject, subStores?: Map<RowId, SubTableStore<S>> | undefined): void => {
    if (!options?.pagination) return;
  
    const getTopLevelVisibleRowIds = <S>(subStores: Map<RowId, SubTableStore<S>> | undefined): RowId[] => {
      const rows: RowId[] = [];
      if(subStores?.size) {
        const subTableRows = [...subStores.values()].map(t => t.rows.map(r => r.rowId)).flat();
        return [...control.filteredRows].filter(r => !subTableRows.includes(r))
      }
      return rows
    }
    control.paginationPages?.clear();
    const rowIds = getTopLevelVisibleRowIds(subStores);
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
  },
  getSubRows: <S>(subStores?: Map<string, SubTableStore<S>>) => subStores ? [...subStores.values()].map(s => s.rows).flat() : [],
}

// Table rows
export const updateRowsFn = <T, S>(tableId: TableId, data: T[], columns: Column<CommonProps, T>[], options: TableOptions<T, S>): Row[] => {
  const rows = data.map(d => {
    const rowId = options.setRowId(d);
    return {
      rowId,
      cells: columns.map((c) => {
        const value =  
          typeof c?.getValue === 'object'
            ? { [c.getValue.key]: c.getValue.value(d) } 
            : { value: c?.getValue ? c.getValue(d) : [] };
        return {
          tableId: tableId,
          rowId,
          columnId: c.columnId,
          type: c.type,
          ...value,
          ...(c?.getProps?.(d) ?? {}),
        }
      }),
    };
});
return rows;
};
