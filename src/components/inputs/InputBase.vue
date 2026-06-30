<script setup lang="ts">
import { InputType, InputStatus } from "@/types/enums";

withDefaults(
  defineProps<{
    type?: InputType;
    label?: string;
    status?: InputStatus;
    infoText?: string;
  }>(),
  { label: "", type: InputType.TEXT, infoText: "", status: InputStatus.OK },
);
</script>

<template>
  <div :class="['input-field', status]">
    <div class="field-label">
      {{ label }}
    </div>
    <div class="field">
      <div class="field-icon-container">
        <svg
          v-if="type === InputType.SEARCH"
          class="field-Icon search"
          viewBox="0 0 16 16"
        >
          <circle
            cx="7"
            cy="7"
            r="6"
          />
          <path d="M11 11, 15 15" />
        </svg>
      </div>
      <slot />
    </div>
    <div class="field-info">
      {{ infoText }}
    </div>
  </div>
</template>
<style scoped lang="scss">
.input-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.field-label,
.field-info {
  font-size: 0.8125em;
}
.field-label {
  font-weight: var(--input-label-font-weight, 500);
  color: var(--input-label-color);
  &:empty {
    display: none;
  }
}
.field-info {
  color: var(--n-300);
  &:empty {
    display: none;
  }
}
.field {
  background-color: var(--input-field-background-color, #fff);
  display: inline-flex;
  border: 1px solid var(--input-field-border-color);
  border-radius: var(--input-field-border-radius, 4px);
  color: var(--input-field-color);
  transition: border 0.15s;
  &:placeholder {color: var(--input-field-placeholder)}
  &:hover {
    border-color: var(--input-field-border-color-hover);
  }
  &:focus-within {
    border: 1px solid var(--p-400);
    outline: 3px solid var(--p-700);
  }
}
.field-icon-container {
  display: flex;
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
}
.field-Icon {
  width: 16px;
  height: 16px;
  margin: auto;
  &.search {
    stroke: var(--input-field-icon);
    stroke-width: 2;
    fill: transparent;
  }
}
</style>
