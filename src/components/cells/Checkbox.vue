<script setup lang="ts" generic="T, S">
import { CheckboxProps } from "@/types/cellTypes";
import { inject, ref } from "vue";
import { Injector } from "@/types/enums";
import { InjectService } from "@/types/injectTypes";

const props = withDefaults(
  defineProps<CheckboxProps>(),
  {
    value: false,
    indeterminate: false,
  },
);

const { checkRow } = inject(Injector.TABLESERVICE) as InjectService<T, S>;
const checked = ref(props.value);

const onChange = () => {
  if (checked.value) checkRow(props.rowId);
};
</script>

<template>
  <div class="checkbox-container">
    <svg
      viewBox="0 0 24 24"
      width="24"
      heigh="24"
      xmlns="http://www.w3.org/2000/svg"
      :class="['checkbox-visual', { checked }]"
    >
      <path
        class="check"
        d="M18 8L10 16L6 12"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
    <!-- prettier-ignore -->
    <input
      :id="`cb-${rowId}`"
      v-model="checked"
      class="checkbox-input"
      type="checkbox"
      @change="onChange"
    >
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/transitions';
.checkbox-container {
  display: grid;
  place-items: center;
  position: relative;
  max-width: var(--td-height);
  width: 100%;
  height: 100%;
  &:hover .checkbox-visual {
    border: 1px solid var(--table-checkbox-hover-color);
  }
}
.checkbox-visual {
  transition:
    background-color 0.35s $easeoutquint,
    border-color 0.15s;
  width: var(--table-checkbox-size);
  border: 1px solid var(--table-checkbox-color);
  border-radius: var(--table-checkbox-radius);
  .check {
    transition: all 0.25s $easeoutquint;
    d: path("M24 0L12 12L0 24");
    fill: transparent;
    stroke: transparent;
  }
  &.checked {
    transition: background-color 0.15s $easeoutquint;
    background-color: var(--table-checkbox-color);
    .check {
      transition: all 0.25s 0.1s $easeoutquint;
      stroke: #fff;
      d: path("M18 8L10 16L6 12");
    }
  }
}

.checkbox-input {
  appearance: none;
  position: absolute;
  inset: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
}
</style>
