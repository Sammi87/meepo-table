<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { inputOverlayService, getBoundingBox } from "@/services/overlayService";
import { ContextOption } from "@/types/inputTypes";
import { ColumnId, RowId } from "@/types/tableTypes";

const props = defineProps<{
  type: 'context-menu',
  rowId: RowId,
  columnId: ColumnId,
  positionData: DOMRect,
  contextOptions?: ContextOption[],
}>();

const emit = defineEmits<{(e: 'close:input'): void}>();
const menuRef = ref();
const select = (event: Event, o: ContextOption) => {
  event.preventDefault();
  event.stopPropagation();
  o.action();
  emit('close:input');
};

const position = computed<{x: string, y: string}>(() => {
  if (!menuRef.value) return {x: '-1000px', y: '-1000px' }

  const child = getBoundingBox(menuRef.value);
  const px = props.positionData.x;
  const py = props.positionData.y;
  const pw = props.positionData.width;
  const ph = props.positionData.height;
  const cx = child.x;
  const cy = child.y;
  const cw = child.width;
  const ch = child.height;

  const x = pw - cw + 'px';
  const y = ph + 1 + 'px';
  return {x, y }
});

</script>

<template>
  <ul
    v-if="contextOptions"
    ref="menuRef"
    class="context-menu"
    :style="{ left: position.x, top: position.y }"
  >
    <li
      v-for="option in contextOptions"
      :key="option.label"
      class="menu-item"
      @click="(ev: Event) => select(ev, option)"
    >
      {{ option.label }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.context-menu {
  position: absolute;
  text-decoration-style: unset;
  padding: var(--context-menu-padding);
  margin: 0;
  border-radius: var(--context-menu-radius);
  display: inline-grid;
  background-color: var(--context-menu-bkg);
  color: var(--context-menu-color);
  box-shadow: var(--context-menu-shadow);
}
.menu-item {
  padding: var(--context-menu-item-padding);
  height: var(--context-menu-item-height);
  display: flex;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: var(--context-menu-item-bkg-hover);
  }
}
</style>
