<script setup lang="ts" generic="T, S">
import { Column, ColumnId, Row, RowId, StoreOptions, SubStoreOptions, SubTableStore, TableId, TableStore } from "@/types/tableTypes";
import HeaderCell from "@/components/table/headerCell.vue";
import CellButton from "@/components/inputs/CellButton.vue";
import { ComputedRef, Ref, computed, inject, isRef, onMounted, ref } from "vue";
import { accordionizer } from "@/utils/partials";
import { getCssVar, hasSubStore } from "@/utils/generalUtils";
import { CommonProps } from "@/types/cellTypes";
import { Injector } from "@/types/enums";
import { InjectService } from "@/types/injectTypes";

const props = defineProps<{
    activeColumn: ColumnId | undefined;
    columns: readonly Column<CommonProps, T>[];
    data: Map<RowId, T>;
    options: StoreOptions<T, S>;
    rows: ComputedRef<Row[]>;
    tableId: TableId;
    subStores?: Map<string, SubTableStore<S>> | undefined;
} | {
    activeColumn: ColumnId | undefined;
    columns: readonly Column<CommonProps, S>[];
    data: Map<RowId, S>;
    rows: Row[];
    tableId: TableId;
    options?: SubStoreOptions<S> | undefined;
}>();

const emit = defineEmits<{
  (e: 'update:allSelected', rowId: RowId[]): void;
  (e: 'update:selected', rowId: RowId): void;
}>();

const subStores = (props as unknown as TableStore<T, S>).subStores as Map<string, SubTableStore<S>> | undefined

const { control, createCellId } = inject(Injector.TABLESERVICE) as InjectService<T, S>;
const isSubTable = control.subTablesVisible.has(props.tableId)
const hasSubs = hasSubStore<T, S>(props as unknown as TableStore<T, S> | SubTableStore<S>);
// const subStores = computed(() => hasSubStore<T, S>(props as unknown as TableStore<T, S> | SubTableStore<S>))
const isMobile = computed(() => parseInt(getCssVar('--mobile-max-width') ?? '0') > window.innerWidth);

const grid = computed(() => {
  return props.columns.filter((c) => c.visible)
    .map(c => 
      minimized.value.length > 0 && c.gridSpace === 'auto' 
        ? minimized.value.includes(c.columnId)
          ? 'var(--td-height)' 
          : `minmax(min-content, 100%)` 
        : c.gridSpace).join(" ");
});

const subrow = computed(() => isMobile.value ? '1fr' : `1 / ${props.columns.length + 1}`);
const emptyRow = computed(() => isMobile.value ? '1fr' : `1 / ${props.columns.length}`)
const minimized = ref<ColumnId[]>([]);
const table = ref<HTMLElement>();

const visibleRows = computed(() => {
    const visible = control.sortedRows.filter(r => {
      return (control.filteredRows.has(r) && (!isSubTable && control.activePage.size ? control.activePage.has(r) : true))
    });
    return (isRef(props.rows) ? props.rows.value : props.rows).filter(r => visible.includes(r.rowId));
})

const actionRowClick = (rowId: RowId) => {
  const rowData = props.data.get(rowId);
  if (props.options?.onRowClick && rowData) {
    if (hasSubs)  (props.options as StoreOptions<T, S>).onRowClick?.(rowData as T)
    else (props.options as SubStoreOptions<S>).onRowClick?.(rowData as S)
  }
}

onMounted(() => {
  if (props.options?.accordion && table.value) accordionizer(table as unknown as Ref<HTMLElement>, minimized, props.columns);
});

</script>

<template>
  <table
    v-if="props.columns"
    ref="table"
    :class="['ez-table', { 'has-sub-table': hasSubs }, { 'sub-table' : props.tableId !== control.tableId}]"
  >
    <thead
      v-if="!props.options?.hideHeaderCells"
      class="ez-thead"
    >
      <template
        v-for="(column, index) in columns"
        :key="column.columnId"
      >
        <component
          :is="column?.headerComponent ?? HeaderCell"
          v-if="column.visible"
          :align="column.align"
          :type="column.type"
          :columnId="column.columnId"
          :editable="!!column?.onClick"
          :gridSpace="column.gridSpace"
          :header="column.header?.value"
          :index="index"
          :searchable="column.searchable"
          :sortable="column.sortable"
          :tableId="tableId"
          :minimize="minimized.includes(column.columnId)"
        />
      </template>
    </thead>
    
    <tbody
      :class="['ez-tbody', {'input-borders': props.options?.inputBorders}]"
    >
      <TransitionGroup
        v-for="row in visibleRows"
        :key="row.rowId"
        name="table"
        tag="tr"
        :data-id="row.rowId"
        :class="[
          'ez-tr',
          { 'clickable': options?.onRowClick },
        ]"
      >
        <template
          v-for="(cell, columnIndex) in columns"
          :key="`${row.rowId}${cell.columnId}`"
        >
          <template v-if="cell.visible">
            <td
              :class="[
                'ez-td',
                cell.columnId,
                cell.type,
                cell?.align,
                typeof cell.classes === 'string' ? cell.classes : Array.isArray(cell.classes) ? cell.classes.join(' ') : '',
                { minimized: minimized.includes(cell.columnId) },
                { editable: cell.onClick }
              ]"
              :data-tooltip="cell?.tooltip"
              :data-hand-held-header="cell.header?.value"
              :data-id="createCellId(row.rowId,cell.columnId)"
            >
              <CellButton
                v-if="cell.type !== 'fold' || cell.type === 'fold' && subStores && subStores?.has(row.rowId)"
                :cell-data="cell"
                :cell-props="row.cells[columnIndex]"
                :on-row-click="actionRowClick"
                :row-id="row.rowId"
              />
              <component
                :is="cell.component"
                :key="`${row.rowId}-${cell.columnId}`"
                v-bind="row.cells[columnIndex]"
                :table-id="tableId"
              />
            </td>
          </template>
        </template>
        <td
          v-if="control.subTablesVisible?.has(row.rowId) && subStores?.has(row.rowId)"
          class="ez-sub-row"
        >
          <TableSection v-bind="(subStores.get(row.rowId) as SubTableStore<S>)" />
        </td>
      </TransitionGroup>
      <tr
        v-if="!visibleRows.length && options?.tableEmptyMessage"
        class="ez-tr"
      >
        <td
          class="ez-td empty-row"
          :style="{ 'grid-column': emptyRow }"
        >
          {{ typeof options.tableEmptyMessage === 'string' ? options.tableEmptyMessage : options.tableEmptyMessage.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
@import "@/assets/styles/ez-mixins";
@import "@/assets/styles/ez-tablet";
@import "@/assets/styles/ez-mobile";
@import '@/assets/styles/transitions';
$easeInOutCubic: cubic-bezier(0.65, 0, 0.35, 1);
.ez-table,
.ez-thead,
.ez-tbody,
.ez-tr,
.ez-th,
.ez-td {
  box-sizing: border-box;
}

.ez-thead,
.ez-tbody,
.ez-tr {
  display: contents;
}

.ez-table {
  background: var(--td-background-color);
  display: grid;
  border-spacing: 0;
  border-collapse: collapse;
  border-radius: var(--table-border-radius);
  border: 1px solid var(--table-border-color);
  @media only screen and (min-width: calc($tablet-max-width + 1px)) {
    grid-template-columns: v-bind(grid);
  }
  grid-template-rows: auto;
  grid-auto-flow: row;
  overflow: hidden;
  transition: grid-template-columns .5s;
  &.sub-table {
    border: none;
    border-radius: unset;
    border: none;
    border-radius: unset;
    .ez-td {
      background-color: var(--subrow-background-color);
    }
  }
}
.ez-tr {
  padding: var(--row-padding);
  &:not(:last-child) { box-shadow: 0 1px var(--tr-border-color); }
}
.ez-tbody.input-borders .ez-tr {
  .ez-td.editable {
    box-shadow:
      0 -1px var(--td-border-color) inset,
      -1px 0 0 var(--td-border-color) inset,
      -1px 0 0 var(--td-border-color);
  }
  &:last-child .ez-td.editable {
    box-shadow:
      -1px 0 0 var(--td-border-color) inset,
      -1px 0 0 var(--td-border-color);
  }
}
.ez-th,
.ez-td {
  
  padding: 0 var(--cell-padding-horizontal);
  display: flex;
  align-items: center;
  position: relative;

  &.fold,
  &.checkbox,
  &.context-button {
    padding: 0;
  }
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:focus {
    outline: var(--focus-color) auto 1px;
  }
}
.ez-th {
  font-family: var(--th-font-family);
  background: var(--th-background-color);
  color: var(--th-color);
  height: var(--th-height);
  user-select: none;
  font-size: var(--th-font-size);
  font-weight: var(--th-font-weight);
  box-shadow: 0 -1px var(--th-border-color) inset;
  white-space: nowrap;
  &.sortable {
    cursor: pointer;

    &:hover {
      background: var(--th-background-color-hover);
      color: var(--th-color-hover, inherit);
    }

    .sort-icon {
      margin-left: -16px;
      transform: rotate(0) translateX(16px);
      transform-origin: 24px 8px;
      width: 16px;
      height: 16px;
      stroke: var(--p-400);
      stroke-width: 2px;
      fill: transparent;
      transition: transform 0.15s $easeoutquint;

      &.ascending {
        transform: rotate(180deg) translateX(16px);
      }
    }
  }
}
:where(.ez-table:not(.sub-table) > tbody > .ez-tr):last-child {
  .ez-td { box-shadow:  0 1px var(--td-border-color) inset; }
  > .ez-td {
    box-shadow: none;
  }
}

:where(.ez-table:not(.sub-table) > tbody > .ez-tr) {
  @media only screen and (min-width: calc($tablet-max-width + 1px)) {
    &.clickable:hover:not(:has(.editable:hover, .ez-td + .ez-sub-row:hover)) > .ez-td,
    > .ez-td.editable:hover {
      background: var(--td-background-color-hover);
    }
  }
  .ez-sub-row {
    padding: 0;

    @media only screen and (min-width: calc($tablet-max-width + 1px)) {
      display: inline-grid;
      grid-column: v-bind(subrow)
    }
  }
}
@media only screen and (min-width: calc($tablet-max-width + 1px)) {
  :where(.ez-table.sub-table > tbody > .ez-tr) {
    &.clickable:hover > .ez-td,
    .ez-td.editable:hover {
      background: var(--subrow-background-color-hover);
    }
  }
}
.ez-td {
  font-family: var(--td-font-family);
  background: var(--td-background-color);
  box-shadow: 0 -1px var(--td-border-color) inset;
  height: var(--td-height);
  color: var(--td-color);
  width: 100%;
  font-size: var(--td-font-size);
  font-weight: var(--td-font-weight);
  transition: all 1s $easeoutquint, background-color .25s;
  &.button-cell {
    width: var(--td-height);
    height: var(--td-height);
  }
  &.empty-row {
    justify-content: center !important;
    height: initial !important;
    padding: 2rem !important;
    &:before,
    &:after { content: initial !important; }
  }
}
.ez-th,
.ez-td {
  &:after {
    content: attr(data-value);
    background: var(--td-background-color);
    border-radius: var(--table-border-radius);
    box-shadow: 0 0 0 1px var(--td-border-color);
    left: 50%;
    min-width: fit-content;
    padding: 4px 8px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all .25s $easeInOutCubic, visibility .25s .25s;
    white-space: nowrap;
    z-index: 1;
  }
  &.minimized {
    @media only screen and (min-width: calc($tablet-max-width + 1px)) {
      &:hover:after {
        transition: all .25s $easeInOutCubic;
        transform: translate(-50%, -50%) scale(1);
      }
    }

  }
}
.ez-th:after {
  content: attr(data-hand-held-header);
}

@include sub-table-transitions;
@include ez-tablet(640px, 1024px);
@include ez-mobile(640px);
</style>
