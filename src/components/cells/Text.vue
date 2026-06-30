<script setup lang="ts">
import { computed } from "vue";
import { TextProps } from "@/types/cellTypes";

const props = withDefaults(defineProps<TextProps>(), {
  type: 'text',
  format: (v: any) => v
});

const formatedValue = computed(() => props.format(props.value));

</script>

<template>
  <span class="text">{{ formatedValue }}</span>
</template>

<style scoped lang="scss">
.text {
  width: 100%;
  line-height: 1.375;
  pointer-events: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &.editable {
    line-height: var(--td-height);
    padding: 0 var(--cell-padding-horizontal);
    margin: 0 calc(var(--cell-padding-horizontal) * -1);
  }
}
.cell-btn {
  display: none;
  all: unset;
  touch-action: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}
</style>
