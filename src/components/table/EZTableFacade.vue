<script setup lang="ts" generic="T, S">
import TableComponent from '@/components/table/Table.vue';
import { CellId, ColumnId, ControlObject, Row, RowId, SubTableStore, Table, TableService } from '@/types/tableTypes';
import { Injector, SortingDirection } from '@/types/enums';
import { update } from '@/utils/buildUtils';
import { ComputedRef, computed, provide, reactive, ref, watch } from 'vue';
import FilterRow from "@/components/table/FilterRow.vue";
import { useTableService } from '@/services/tableService';
import { initialSort } from '@/filterUtils/sortRows';

const props = defineProps<{
  table: Table<T, S>;
  data: T[] | undefined;
}>();

const emit = defineEmits<{
  (e: 'update:allSelected', rowId: RowId[]): void;
  (e: 'update:selected', rowId: RowId): void;
  (e: 'update:cellValue', returnValue: { cellId: CellId, value: any }): void
  (e: 'tableService', service: TableService<T, S>): void;
}>();

const ready = ref(false);

const rows = computed<Row[]>(() =>  props.data ? update.rows(props.table.tableId, props.data, props.table.columns, props.table.options) : [])

const data: ComputedRef<Map<RowId, T>> = computed(() => {
  const dataset = new Map();
  props.data?.forEach((d) => dataset.set(props.table.options.setRowId(d), d))
  return dataset as Map<RowId, T>;
});

const subStores = computed(() => props.data ? update.subStores(props.table, props.data) : (new Map() as Map<RowId, SubTableStore<S>>));

const control: ControlObject = reactive({
  tableId: props.table.tableId,
  activeColumn: ref<ColumnId>(props.table.options?.initialSorting?.column ?? props.table.columns.find(c => c.sortable)?.columnId ?? ''),
  activePageNumber: ref(0),
  activePage: ref<Set<RowId>>(new Set()),
  filteredRows: ref<Set<RowId>>(new Set()),
  sortedRows: ref<RowId[]>([]),
  rowsSelected: ref<Set<RowId>>(new Set()),
  subTablesVisible: ref<Set<RowId>>(new Set()),
  paginationPages: ref<Map<number, { id: string, page: RowId[] }>>(new Map()),
  sortingDirection: props.table.options.initialSorting?.direction ?? SortingDirection.DESCEND,
});

const tableService = useTableService(data, props.data as T[], props.table.options, props.table.columns, rows, control, props.table.subTable?.options, props.table.subTable?.columns, subStores);

emit('tableService', tableService);

watch(() => props.data, (d, od) => {
  if (d) {
    [...rows.value.map(r => r.rowId), ...(subStores.value ? update.getSubRows(subStores.value).map(r => r.rowId) : [])].forEach(s => control.filteredRows.add(s))
    control.sortedRows = initialSort(rows.value, props.table.columns, props.table.options, update.getSubRows(subStores.value),  props.table.subTable?.columns,  props.table.subTable?.options);
    if(tableService) tableService.updatePages();
    ready.value = true;
  }
}, {
  immediate: true,
  deep: true
});

provide(Injector.RAWDATA, { rawData: props.data });
provide(Injector.DATA, { data });
provide(Injector.OPTIONS, { options: props.table.options, subOption: props.table.subTable?.options });
provide(Injector.ROWS, { rows });
provide(Injector.SUBSTORES, { subStores });
provide(Injector.COLUMNS, { columns: props.table.columns, subColumns: props.table.subTable?.columns });
provide(Injector.CONTROL, { control });
provide(Injector.READY, { ready });
provide(Injector.TABLESERVICE, tableService);

</script>

<template>
  <div
    v-if="ready"
    :id="props.table.tableId"
    class="ez-ez"
  >
    <slot name="filters">
      <FilterRow />
    </slot>
    <table-component
      @update:cell-value="(v) => emit('update:cellValue', v)"
      @update:all-selected="(v) => emit('update:allSelected', v)" 
      @update:selected="(v) => emit('update:selected', v)"
    />
  </div>
</template>

<style lang="scss">

.ez-ez {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  * {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    font-family: inherit;
  }
  
  .left {
    text-align: left;
    justify-content: flex-start;
  }
  .center {
    text-align: center;
    justify-content: center;
  }
  .right {
    text-align: right;
    justify-content: flex-end;
  }

  [contentEditable],
  .overlay-textfield,
  button,
  .ez-td {
    // &:active,
    // &:focus,
    // &:focus-within,
    // &:target,
    &:focus-within { outline: var(--focus-color) auto 1px; }
    &:focus-visible { outline: var(--focus-visible-color) auto 1px; }
  }
}
</style>ColumnId, , SortingDirection, ref
