<script setup lang="ts">
import { Ref, ref } from "vue";
import { inputOverlayService } from "@/services/overlayService";
import { ContextButtonProps } from "@/types/cellTypes";

const props = withDefaults(
  defineProps<ContextButtonProps>(),
  { 
    type: "context-button",
    path: 'M6 2a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M6 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M6 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0',
  },
);

const menuRef: Ref<HTMLElement | null> = ref(null);

const open = () => {
  props.options.length === 1
    ? props.options[0].action()
    : menuRef.value ? inputOverlayService.set({
      useBackground: false,
      type: 'context-button',
      rowId: props.rowId,
      columnId: props.columnId,
      positionData: menuRef.value.getBoundingClientRect(),
      contextOptions: props.options,
    }) : null;
}
</script>

<template>
  <button
    v-if="props.options"
    ref="menuRef"
    class="icon-options"
    @click="open"
  >
    <svg viewBox="0 0 16 16">
      <path :d="path" />
    </svg>
  </button>
</template>

<style scoped lang="scss">
button {
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  max-width: var(--td-height);
  width: 100%;
  height: 100%;
  outline-color: var(--p-400);
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color .15s;
  svg {
    width: 16px;
    height: 16px;
    fill: var(--table-context-button);
    position: relative;
    transition: fill .15s;
  }
  &:before {
    content: "";
    position: absolute;
    width: 2em;
    height: 2em;
    border-radius: var(--table-context-button-radius);
    background-color: var(--table-context-button-bkg);
  }
  &:hover {
    &:before {
      background-color: var(--table-context-button-bkg-hover);
    }
    svg { fill: var(--table-context-button-hover); }
  }
  &:active {
    &:before {
      background-color: var(--table-context-button-bkg-active);
    }
    svg { fill: var(--table-context-button-active); }
  }
}
</style>
