<script setup lang="ts" generic="T, S">
import {
  CellId,
  RowId,
  Table,
  TableService,
} from "@/types/tableTypes";

import TableSection from "@/components/table/TableSection.vue";
import { computed, inject, onMounted, ref, watch } from "vue";
import Pagination from "@/components/table/Pagination.vue";
import CellInputOverlay from "../overlays/CellInputOverlay.vue";
import { InjectData, InjectRows, InjectSubStores, InjectColumns, InjectControl, InjectOptions, InjectService, InjectRawData, InjectReady } from "@/types/injectTypes";
import { Injector } from '@/types/enums';
import { updateRowsFn } from "@/utils/buildUtils";

const emit = defineEmits<{
  (e: 'update:allSelected', rowId: RowId[]): void;
  (e: 'update:selected', rowId: RowId): void;
  (e: 'update:cellValue', returnValue: { cellId: CellId, value: any }): void
}>();

const { rawData } = inject(Injector.RAWDATA) as InjectRawData<T>;
const { data } = inject(Injector.DATA) as InjectData<T>;
const { rows } = inject(Injector.ROWS) as InjectRows;
const { options } = inject(Injector.OPTIONS) as InjectOptions<T, S>;
const { columns } = inject(Injector.COLUMNS) as InjectColumns<T, S>;
const { subStores } = inject(Injector.SUBSTORES) as InjectSubStores<S>;
const { control } = inject(Injector.CONTROL) as InjectControl;
const { ready } = inject(Injector.READY) as InjectReady;
const tableService = inject(Injector.TABLESERVICE) as InjectService<T, S>;

const mounted = ref(false);

if (options.pagination?.rowsPerPage ) tableService.updatePages();

onMounted(() => mounted.value = true)
</script>

<template>
  <TableSection
    :data="data"
    :rows="tableService.rows"
    :columns="columns"
    :active-column="control.activeColumn"
    :table-id="control.tableId"
    :options="options"
    :subStores="subStores"
    @update:all-selected="(v) => emit('update:allSelected', v)"
    @update:selected="(v) => emit('update:selected', v)"
  />
  <Pagination
    v-if="ready && control.paginationPages.size > 1"
    :activePageNumber="control.activePageNumber"
    :rows="rows"
    :paginatonPages="control.paginationPages"
  />
    
  <CellInputOverlay
    v-if="mounted"
    :columns="columns"
    :tableId="`#${control.tableId}`"
    @update:cellValue="(v) => emit('update:cellValue', v)"
  />
</template>


