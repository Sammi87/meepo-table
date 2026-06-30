<script setup lang="ts" generic="T, S">
import { FoldProps } from "@/types/cellTypes";
import { Injector } from "@/types/enums";
import { InjectService } from "@/types/injectTypes";
import { computed, inject } from "vue";

const props = withDefaults(
  defineProps<FoldProps>(),
  {
    type: 'fold',
  },
);

const { hasSubRows, subTableIsOpen, toggleFold, control } = inject(Injector.TABLESERVICE) as InjectService<T, S>;
const hasSubRowsBool = hasSubRows(props.rowId);
const isOpen = computed(() => subTableIsOpen(props.rowId))

const onChange = (): void => {
  toggleFold(props.rowId);
};
</script>

<template>
  <div
    v-if="hasSubRowsBool"
    class="fold-container"
  >
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      :class="{ 'fold-out': isOpen }"
    >
      <path
        class="arrow"
        d="M4 0, 12 8, 4 16"
      />
    </svg>

    <input
      :id="`fold-${rowId}`" 
      class="checkbox-input"
      type="checkbox"
      @change="onChange"
    />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/transitions';
.fold-container {
  display: grid;
  place-items: center;
  position: relative;
  width: var(--td-button-cell-size);
  height: var(--td-button-cell-size);

  svg {
    fill: transparent;
    stroke: var(--fold-icon-color);
    stroke-width: var(--fold-icon-stroke-width);
    width: var(--fold-icon-size);
    transition: transform 0.5s $easeoutquint;
    &.fold-out {
      transform: rotate(90deg);
    }
    .arrow { d: var(--fold-arrow-path) }
  }

  .checkbox-input {
    appearance: none;
    position: absolute;
    inset: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
  }
}
</style>
