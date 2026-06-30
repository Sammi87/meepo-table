<script setup lang="ts" generic="T, S">
import TextField from "@/components/inputs/TextField.vue";
import { TextFieldProps } from "@/types/inputTypes";
import { Injector, InputType } from "@/types/enums";
import { inject, ref } from "vue";
import searchFn from "@/filterUtils/searchFilter";
import { InjectService } from "@/types/injectTypes";

const { columns, rows, options, control, subStores, updatePages } = inject(Injector.TABLESERVICE) as InjectService<T, S>;

const search = options.searchFilter
  ? typeof options.searchFilter === "function"
    ? options.searchFilter
    : searchFn
  : false;
const searchValue = ref('');
const searchfield: TextFieldProps = {
  type: InputType.SEARCH,
  label: "Search",
  placeholder: "Search...",
};

const searchUpdate = (filter: string) => {
  if (search) {
    search(filter, [...columns], rows.value, control, subStores?.value);
    updatePages();
  }
};
</script>

<template>
  <TextField
    v-if="search"
    id="table-search"
    v-bind="searchfield"
    v-model="searchValue"
    @update:modelValue="searchUpdate($event)"
  />
</template>

<style scoped lang="scss"></style>

