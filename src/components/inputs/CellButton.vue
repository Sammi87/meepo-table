<script setup lang="ts" generic="T extends CommonProps['type']">
import { Cell, CommonProps } from '@/types/cellTypes';
import { Column, RowId } from '@/types/tableTypes';
import BaseButton from './BaseButton.vue';
import { ComponentPublicInstance, ref } from 'vue';
import { getBoundingBox, inputOverlayService } from '@/services/overlayService';
import { getCssVar } from '@/utils/generalUtils';

const props = defineProps<{
  rowId: RowId;
  cellProps: Cell<T>;
  cellData: Column<CommonProps, any>,
  onRowClick?: (rowId: RowId) => void
}>();

const cellRef = ref<ComponentPublicInstance>();

const onClick = () => {
  if (parseInt(getCssVar('--mobile-max-width') ?? '0') > window.innerWidth) return;
  if (props.cellProps?.onClick) {
    props.cellProps.onClick({columnId: props.cellData.columnId, rowId: props.rowId})
  } else if (props.cellData?.onClick) {
    if (typeof props.cellData?.onClick === 'boolean' && props.cellData.onClick && cellRef.value) {
      inputOverlayService.set({
        type: props.cellData.type,
        rowId: props.rowId,
        columnId: props.cellData.columnId,
        positionData: getBoundingBox(cellRef.value.$el),
        value: props.cellProps.value,
        placeholder: props.cellProps.placeholder,
        validation: props.cellProps?.validation,
      });
    } else if (typeof props.cellData?.onClick === 'function') {
      props.cellData?.onClick?.({columnId: props.cellData.columnId, rowId: props.rowId})
    }
  } else {
    props.onRowClick?.(props.rowId);
  }
}

</script>

<template>
  <BaseButton
    v-if="props.cellProps?.onClick || props.cellData?.onClick || props.onRowClick"
    ref="cellRef"
    class="ez-cell-button"
    @click="onClick"
  />
</template>

<style scoped lang="scss">
.ez-cell-button {
  position: absolute;
  inset: 0;
  padding: 0;
}
</style>
