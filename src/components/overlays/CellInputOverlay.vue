<script setup lang="ts" generic="T, S, C extends string, P extends CommonProps, E">
import { getBoundingBox, placeMenu } from '@/services/overlayService';
import { computed, inject, ref, watch } from 'vue';
import { Injector, TransitionType } from '@/types/enums'
import Overlay from '@/components/overlays/Overlay.vue';
import { inputOverlayService } from '@/services/overlayService'
import { AlternativeValue, CellId, Column, EZComponent, TableId } from '@/types/tableTypes';
import { Cell, CommonProps } from '@/types/cellTypes';
import { InputOverlayProps } from '@/types/inputTypes';
import { InjectService } from '@/types/injectTypes';
import { debounce, getCssVar, throttle } from '@/utils/generalUtils';

const props = defineProps<{
  tableId: TableId;
  columns: readonly Column<P, E>[];
}>()

const { createCellId } = inject(Injector.TABLESERVICE) as InjectService<T, S>;

const emit = defineEmits<{(e:'update:cellValue', returnValue: { cellId: CellId, value:  (P['value'] | AlternativeValue<T, P, string>) }): void}>();

const handHeldWidth = parseInt(getCssVar('--tablet-max-width')) ??  parseInt(getCssVar('--mobile-max-width')) ?? 0;
const overlayComponent = ref<EZComponent<P>>();
const overlayComponentProps = ref<InputOverlayProps<C>>();
const cellValue = ref<Cell<C>['value']>();

watch(inputOverlayService.componentProps, (p) => {
  overlayComponentProps.value = inputOverlayService.componentProps.value as InputOverlayProps<C> ?? undefined;
  overlayComponent.value = props.columns.find(c => c.columnId === inputOverlayService.componentProps.value?.columnId)?.editComponent ?? undefined;
})

const position = computed(() => {
  if (!overlayComponentProps.value) return undefined;
  const p = overlayComponentProps.value.positionData;
  if (overlayComponentProps.value?.type === 'contextbutton' && overlayComponent.value?.$el) {
    const c = getBoundingBox(overlayComponent.value?.$el);
    return placeMenu(p, c);
  }
  return {
    top: `${p.top}px`,
    left: `${p.left + (p.width /2)}px`,
    width: `${p.width - (p.width /2)}px`,
    height: `${p.height}px`
  }
});

const updateValue = (ev: Cell<C>['value']) => {
  const colId = overlayComponentProps.value?.columnId;
  const rowId = overlayComponentProps.value?.rowId;

  cellValue.value = ev;
  if(rowId && colId) emit('update:cellValue', { cellId: createCellId(rowId, colId), value: ev });
}

const throttleClose = debounce((ev?: Cell<C>['value']) => close(ev), 100);

const close = (ev?: Cell<C>['value']) => {
  if (ev) updateValue(ev);
  cellValue.value = undefined
  overlayComponent.value = undefined;
  inputOverlayService.close();
};
</script>

<template>
  <Overlay
    v-if="tableId"
    :teleport="tableId"
    :transition="TransitionType.NONE"
    :active="!!position && !!overlayComponent && !!overlayComponentProps"
    @close="throttleClose"
  >
    <div
      :class="['input-container', { 'use-background' : overlayComponentProps?.useBackground ?? true }]"
      :style="position"
      @click="throttleClose"
    >
      <component
        :is="overlayComponent"
        ref="child"
        v-bind="overlayComponentProps"
        @abort:input="() => throttleClose()"
        @close:input="throttleClose"
      />
    </div>
  </Overlay>
</template>

<style lang="scss">

.input-container {
  position: fixed;
  &.use-background:before {
    content: "";
    background-color: var(--td-edit-active);
    inset: -5px;
    height: 100%;
    display: block;
  }
}
</style>