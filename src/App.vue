<script setup lang="ts">
import { MockType1, MockType2, mockDataFn2, SubData, mockDataFn1 } from "@/static/mockData";
import EZTable from "@/components/table/EZTableFacade.vue";
import { computed, ComputedRef, reactive, ref } from "vue";
import { RowId, Table, TableOptions, TableService } from "@/types/tableTypes";
import { chipColumn, dateColumn, foldColumn, numberColumn, textColumn, contextButtonColumn } from "@/components/table/columns";
import { formatDate, formatNumber } from '@/utils/generalUtils';
import { estimateColor } from "./static/mockUtils";


const allSelected = (e: RowId[]) => console.log("All selected", e);
const rowSelected = (e: RowId) => console.log("Row selected", e);
const data1 = reactive(mockDataFn1(20));
const table1: Table<MockType1, unknown> = {
  tableId: 'test-table',
  columns: [
  textColumn({
      columnId: 'id',
      header: computed(() => 'Id'),
      gridSpace: 'min-content',
      getValue: (r) => r.id,
    }),
  textColumn({
      columnId: 'name',
      header: computed(() => 'Name'),
      gridSpace: 'auto',
      getValue: (r) => `${r.name.firstname[Math.floor(Math.random() * r.name.firstname.length)]} ${r.name.surename[Math.floor(Math.random() * r.name.surename.length)]}`,
    }),
    numberColumn({
      columnId: 'age',
      header: computed(() => 'Age'),
      gridSpace: 'min-content',
      getValue: (r) => r.age,
      getProps: () => ({ format: formatNumber }),
      priority: 2,
    }),
    dateColumn({
      columnId: 'luckey-date',
      header: computed(() => 'Lucky date'),
      gridSpace: 'min-content',
      getValue: (r) => r.luckyDate,
      getProps: () => ({ format: formatDate }),
      priority: 1,
    }),
  ],
  options: {
    setRowId: (r) => r.id,
    tableEmptyMessage: 'Tomt',
    onRowClick: (arg: MockType1) => console.log('row-click', arg),
  },
}

const tableOptions: TableOptions<MockType2, SubData> = {
  setRowId: (r) => r.id,
  searchFilter: true,
  onRowClick: (arg: MockType2) => console.log('row-click', arg),
  pagination: { rowsPerPage: 4, goToPrevNext: true },
  inputBorders: false,
  accordion: true,
  tableEmptyMessage: 'Tomt',
};
const locale = ref(true)
const test = computed(() => locale.value ? 'svenska' : 'engelska');
const data = ref();
setTimeout(() => { data.value = mockDataFn2(20) }, 10)
const data2: ComputedRef<MockType2[]> = computed(() => data.value);
const table2: Table<MockType2, SubData> = ({
  tableId: 'test-table',
  columns: [
    foldColumn({columnId: 'fold'}),
    textColumn({
      columnId: 'name',
      header: test,
      gridSpace: 'auto',
      onClick: true,
      getValue: (r) => `${r.name.firstname[Math.floor(Math.random() * r.name.firstname.length)]} ${r.name.surename[Math.floor(Math.random() * r.name.surename.length)]}`,
    }),
    numberColumn({
      columnId: 'age',
      header: computed(() => 'Age'),
      gridSpace: 'auto',
      onClick: true,
      getValue: (r) => r.age,
      getProps: () => ({ format: formatNumber }),
      priority: 2,
    }),
    dateColumn({
      columnId: 'luckey-date',
      header: computed(() => 'Lucky date'),
      gridSpace: 'auto',
      onClick: true,
      getValue: (r) => r.luckyDate,
      getProps: () => ({ format: formatDate }),
      priority: 1,
    }),
    chipColumn({
      columnId: 'favorite-color',
      header: computed(() => 'Favorit Color'),
      gridSpace: 'auto',
      getValue: (r) => estimateColor(r.favoriteColor),
      getProps: (r) => ({
        statusColor: r.favoriteColor,
      }),
      priority: 3
    }),
    contextButtonColumn({
      columnId: 'contenx-button',
      getProps: (r) => ({
        options: [
          {label: 'one item', action: () => console.log('click 1')},
          {label: 'two item', action: () => console.log('click 2')}
        ]
      })
    })
  ],
  
  subTable: {
    columns: [
      textColumn({
        columnId: 'sub-type',
        getValue: (s) => s.type
      }),
      textColumn({
        columnId: 'sub-dentures',
        getValue: (s) => s.dentures
      }),
      textColumn({
        columnId: 'sub-cough',
        getValue: (s) => s.cough
      }),
    ],
    options: {
      setRowId: (s) => s.id,
      hideHeaderCells: true,
      onRowClick: (arg: SubData) => console.log('sub-row-click', arg),
    },
  },
  subData: (r: MockType2) => r.extraData as SubData[],
  options: tableOptions
});

const click = () => data2.value[0].age = 999;
const removeRow = () => {
  data2.value.shift();
}
const getService = (service: TableService<MockType2, SubData>) => {
  console.log('service', service);
}
const cellUpdate = (r:unknown) => { console.log(r)}
const changeLang = () => {
  locale.value = !locale.value
}
</script>

<template>
  <div class="test-buttons">
    <button @click="changeLang">
      change language
    </button>
    <button @click="click">
      update cell
    </button>
    <button @click="removeRow">
      remove row
    </button>
  </div>
  <EZTable
    :table="table2"
    :data="data2"
    @update:selected="rowSelected"
    @update:allSelected="allSelected"
    @tableService="getService"
    @update:cell-value="cellUpdate"
  />
</template>

<style scoped lang="scss">
:root {
  --th-background-color: orange;
}
.test-buttons {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 1rem;
}
</style>
